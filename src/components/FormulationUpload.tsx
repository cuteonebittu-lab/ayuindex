import React, { useState } from 'react';
import { Formulation } from '../types/ayurveda';
import { formulationApi } from '../services/api';

interface FormulationUploadProps {
  onDataImported: () => void;
}

interface ImportSummary {
  newFormulations: Formulation[];
  updatedFormulations: Formulation[];
}

const FormulationUpload: React.FC<FormulationUploadProps> = ({ onDataImported }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [importSummary, setImportSummary] = useState<ImportSummary | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadStatus('Processing formulation file...');

    try {
      const fileContent = await readFileContent(file);
      console.log('Formulation file content loaded:', fileContent.substring(0, 200) + '...');

      const formulations = parseFormulationFileContent(fileContent, file.name);
      console.log('Parsed formulations:', formulations);

      await importFormulationsToDatabase(formulations);

      setUploadStatus('Formulations imported successfully!');
      onDataImported();
    } catch (error) {
      console.error('Error importing formulations:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setUploadStatus(`Error importing formulations: ${errorMessage}. Please check the file format.`);
    } finally {
      setIsUploading(false);
    }
  };

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = (e) => reject(e);
      reader.readAsText(file);
    });
  };

  const parseFormulationFileContent = (content: string, fileName: string): Formulation[] => {
    try {
      if (fileName.toLowerCase().endsWith('.json')) {
        const parsed = JSON.parse(content);
        // Handle both array format and object with formulations property
        if (Array.isArray(parsed)) {
          return parsed;
        } else if (parsed.formulations && Array.isArray(parsed.formulations)) {
          return parsed.formulations;
        } else {
          throw new Error('Invalid JSON structure. Expected array of formulations or object with "formulations" property.');
        }
      } else if (fileName.toLowerCase().endsWith('.csv')) {
        return parseFormulationCSV(content);
      } else {
        throw new Error('Unsupported file format. Please upload JSON or CSV files.');
      }
    } catch (error) {
      throw new Error('Invalid file format. Please check the file structure.');
    }
  };

  const parseFormulationCSV = (csvContent: string): Formulation[] => {
    const lines = csvContent.split('\n').filter(line => line.trim());
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim());
    const formulations: Formulation[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const values = line.split(',').map(v => v.trim());
      const row: Record<string, string> = {};

      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });

      formulations.push(parseFormulationFromCSV(row));
    }

    return formulations;
  };

  const parseFormulationFromCSV = (row: Record<string, string>): Formulation => {
    return {
      id: row.id || `formulation-${Date.now()}-${Math.random()}`,
      name: row.name || '',
      sanskritName: row.sanskritName || '',
      type: (row.type as any) || 'churna',
      clinicalSystems: row.clinicalSystems ? row.clinicalSystems.split(';').map(s => s.trim()) as any : [],
      indicationCategories: row.indicationCategories ? row.indicationCategories.split(';').map(c => c.trim()) as any : [],
      traditionalCategories: row.traditionalCategories ? row.traditionalCategories.split(';').map(c => c.trim()) as any : [],
      ingredients: row.ingredients ? JSON.parse(row.ingredients) : [],
      indications: row.indications ? row.indications.split(';').map(i => i.trim()) : [],
      dosage: {
        amount: row.dosageAmount || '',
        frequency: row.dosageFrequency || '',
        duration: row.dosageDuration || '',
        form: row.dosageForm ? { [row.dosageForm]: row.dosageAmount } : undefined
      },
      anupana: row.anupana ? row.anupana.split(';').map(a => a.trim()) : [],
      contraindications: row.contraindications ? row.contraindications.split(';').map(c => c.trim()) : [],
      preparation: row.preparation || '',
      reference: row.reference || '',
      brands: row.brands ? JSON.parse(row.brands) : [],
    };
  };

  const importFormulationsToDatabase = async (formulations: Formulation[]) => {
    const summary: ImportSummary = {
      newFormulations: [],
      updatedFormulations: []
    };

    console.log(`Starting formulation import process for ${formulations.length} formulations...`);

    for (const formulation of formulations) {
      try {
        console.log(`Processing formulation: ${formulation.name} (ID: ${formulation.id})`);
        
        // Check if formulation already exists and update, otherwise create
        try {
          await formulationApi.getById(formulation.id);
          console.log(`Formulation ${formulation.id} exists, updating...`);
          // Remove id from update payload for JSON Server
          const { id, ...formulationWithoutId } = formulation;
          await formulationApi.update(formulation.id, formulationWithoutId);
          summary.updatedFormulations.push(formulation);
          console.log(`Successfully updated formulation: ${formulation.name}`);
        } catch (getError) {
          // Formulation doesn't exist, create new (without id in payload)
          console.log(`Formulation ${formulation.id} doesn't exist, creating new...`);
          const { id, ...formulationWithoutId } = formulation;
          await formulationApi.create(formulationWithoutId);
          summary.newFormulations.push(formulation);
          console.log(`Successfully created formulation: ${formulation.name}`);
        }
      } catch (apiError) {
        console.error(`Failed to import/update formulation: ${formulation.name}`, apiError);
        // Don't add to summary if operation failed
      }
    }

    const totalNew = summary.newFormulations.length;
    const totalUpdated = summary.updatedFormulations.length;

    console.log(`Formulation import complete: ${totalNew} new, ${totalUpdated} updated`);
    console.log('Formulation import summary:', summary);

    setImportSummary(summary);

    if (totalNew > 0 && totalUpdated > 0) {
      setUploadStatus(`Successfully imported ${totalNew} new formulations and updated ${totalUpdated} existing formulations`);
    } else if (totalNew > 0) {
      setUploadStatus(`Successfully imported ${totalNew} new formulations`);
    } else if (totalUpdated > 0) {
      setUploadStatus(`Successfully updated ${totalUpdated} existing formulations`);
    } else {
      setUploadStatus('No formulations imported or updated');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Import Formulations</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Formulation JSON/CSV File
          </label>
          <input
            type="file"
            accept=".json,.csv"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
          />
          <p className="mt-1 text-sm text-gray-500">
            Upload JSON or CSV files containing formulations data only
          </p>
        </div>

        {uploadStatus && (
          <div className={`p-3 rounded-md ${
            uploadStatus.includes('Error')
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-purple-50 text-purple-700 border border-purple-200'
          }`}>
            {uploadStatus}
          </div>
        )}

        {importSummary && (
          <div className="bg-purple-50 border border-purple-200 rounded-md p-4">
            <h4 className="font-semibold text-purple-800 mb-3">Formulation Import Summary</h4>

            {importSummary.newFormulations.length > 0 && (
              <div className="mb-4">
                <h5 className="font-medium text-purple-700 mb-2">New Formulations ({importSummary.newFormulations.length}):</h5>
                <ul className="list-disc list-inside ml-4 text-sm">
                  {importSummary.newFormulations.map(formulation => (
                    <li key={formulation.id}>{formulation.name} ({formulation.id})</li>
                  ))}
                </ul>
              </div>
            )}

            {importSummary.updatedFormulations.length > 0 && (
              <div>
                <h5 className="font-medium text-orange-600 mb-2">Updated Formulations ({importSummary.updatedFormulations.length}):</h5>
                <ul className="list-disc list-inside ml-4 text-sm">
                  {importSummary.updatedFormulations.map(formulation => (
                    <li key={formulation.id}>{formulation.name} ({formulation.id})</li>
                  ))}
                </ul>
              </div>
            )}

            {importSummary.newFormulations.length === 0 && importSummary.updatedFormulations.length === 0 && (
              <p className="text-gray-600">No formulations were imported or updated.</p>
            )}
          </div>
        )}

        {isUploading && (
          <div className="flex items-center space-x-2 text-purple-600">
            <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            <span>Uploading and processing formulations...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormulationUpload;
