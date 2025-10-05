import React, { useState } from 'react';
import { Herb, Formulation } from '../types/ayurveda';
import { herbApi, formulationApi } from '../services/api';

interface FileUploadProps {
  onDataImported: () => void;
}

interface ImportData {
  herbs?: Herb[];
  formulations?: Formulation[];
}

interface ImportSummary {
  newHerbs: Herb[];
  updatedHerbs: Herb[];
  newFormulations: Formulation[];
  updatedFormulations: Formulation[];
}

const FileUpload: React.FC<FileUploadProps> = ({ onDataImported }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [importSummary, setImportSummary] = useState<ImportSummary | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadStatus('Processing file...');

    try {
      const fileContent = await readFileContent(file);
      console.log('File content loaded:', fileContent.substring(0, 200) + '...');

      const importData = parseFileContent(fileContent, file.name);
      console.log('Parsed import data:', importData);

      await importDataToDatabase(importData);

      setUploadStatus('Data imported successfully!');
      onDataImported();
    } catch (error) {
      console.error('Error importing data:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setUploadStatus(`Error importing data: ${errorMessage}. Please check the file format.`);
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

  const parseFileContent = (content: string, fileName: string): ImportData => {
    try {
      if (fileName.toLowerCase().endsWith('.json')) {
        return JSON.parse(content);
      } else if (fileName.toLowerCase().endsWith('.csv')) {
        return parseCSV(content);
      } else {
        throw new Error('Unsupported file format. Please upload JSON or CSV files.');
      }
    } catch (error) {
      throw new Error('Invalid file format. Please check the file structure.');
    }
  };

  const parseCSV = (csvContent: string): ImportData => {
    const lines = csvContent.split('\n').filter(line => line.trim());
    if (lines.length < 2) return { herbs: [], formulations: [] };

    const headers = lines[0].split(',').map(h => h.trim());
    const herbs: Herb[] = [];
    const formulations: Formulation[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const values = line.split(',').map(v => v.trim());
      const row: Record<string, string> = {};

      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });

      // Determine if this is a herb or formulation based on available fields
      if (row.botanicalName || row.name?.toLowerCase().includes('herb')) {
        herbs.push(parseHerbFromCSV(row));
      } else if (row.type || row.name?.toLowerCase().includes('formulation')) {
        formulations.push(parseFormulationFromCSV(row));
      }
    }

    return { herbs, formulations };
  };

  const parseHerbFromCSV = (row: Record<string, string>): Herb => {
    return {
      id: row.id || `herb-${Date.now()}-${Math.random()}`,
      name: row.name || '',
      sanskritName: row.sanskritName || '',
      botanicalName: row.botanicalName || '',
      family: row.family || '',
      parts: row.parts ? row.parts.split(';').map(p => p.trim()) : [],
      rasa: row.rasa ? row.rasa.split(';').map(r => r.trim()) : [],
      guna: row.guna ? row.guna.split(';').map(g => g.trim()) : [],
      virya: row.virya || '',
      vipaka: row.vipaka || '',
      karma: row.karma ? row.karma.split(';').map(k => k.trim()) : [],
      prabhava: row.prabhava || '',
      indications: row.indications ? row.indications.split(';').map(i => i.trim()) : [],
      typicalDosage: row.typicalDosage ? { powder: row.typicalDosage } : undefined,
      anupana: row.anupana ? row.anupana.split(';').map(a => a.trim()) : [],
      contraindications: row.contraindications ? row.contraindications.split(';').map(c => c.trim()) : [],
    };
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
      },
      anupana: row.anupana ? row.anupana.split(';').map(a => a.trim()) : [],
      contraindications: row.contraindications ? row.contraindications.split(';').map(c => c.trim()) : [],
      reference: row.reference || '',
    };
  };

  const importDataToDatabase = async (importData: ImportData) => {
    const summary: ImportSummary = {
      newHerbs: [],
      updatedHerbs: [],
      newFormulations: [],
      updatedFormulations: []
    };

    console.log('Starting import process...');

    // Process herbs
    if (importData.herbs && importData.herbs.length > 0) {
      console.log(`Processing ${importData.herbs.length} herbs`);
      for (const herb of importData.herbs) {
        try {
          console.log(`Processing herb: ${herb.name} (ID: ${herb.id})`);
          // Check if herb already exists and update, otherwise create
          try {
            await herbApi.getById(herb.id);
            console.log(`Herb ${herb.id} exists, updating...`);
            // Remove id from update payload for JSON Server
            const { id, ...herbWithoutId } = herb;
            await herbApi.update(herb.id, herbWithoutId);
            summary.updatedHerbs.push(herb);
            console.log(`Successfully updated herb: ${herb.name}`);
          } catch (getError) {
            // Herb doesn't exist, create new (without id in payload)
            console.log(`Herb ${herb.id} doesn't exist, creating new...`);
            const { id, ...herbWithoutId } = herb;
            await herbApi.create(herbWithoutId);
            summary.newHerbs.push(herb);
            console.log(`Successfully created herb: ${herb.name}`);
          }
        } catch (apiError) {
          console.error(`Failed to import/update herb: ${herb.name}`, apiError);
          // Don't add to summary if operation failed
        }
      }
    }

    // Process formulations
    if (importData.formulations && importData.formulations.length > 0) {
      console.log(`Processing ${importData.formulations.length} formulations`);
      for (const formulation of importData.formulations) {
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
    }

    const totalNew = summary.newHerbs.length + summary.newFormulations.length;
    const totalUpdated = summary.updatedHerbs.length + summary.updatedFormulations.length;

    console.log(`Import complete: ${totalNew} new, ${totalUpdated} updated`);
    console.log('Import summary:', summary);

    setImportSummary(summary);

    if (totalNew > 0 && totalUpdated > 0) {
      setUploadStatus(`Successfully imported ${totalNew} new items and updated ${totalUpdated} existing items`);
    } else if (totalNew > 0) {
      setUploadStatus(`Successfully imported ${totalNew} new items`);
    } else if (totalUpdated > 0) {
      setUploadStatus(`Successfully updated ${totalUpdated} existing items`);
    } else {
      setUploadStatus('No data imported or updated');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Import Data</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload JSON/CSV File
          </label>
          <input
            type="file"
            accept=".json,.csv"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <p className="mt-1 text-sm text-gray-500">
            Upload JSON or CSV files containing herbs or formulations data
          </p>
        </div>

        {uploadStatus && (
          <div className={`p-3 rounded-md ${
            uploadStatus.includes('Error')
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}>
            {uploadStatus}
          </div>
        )}

        {importSummary && (
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <h4 className="font-semibold text-blue-800 mb-3">Import Summary</h4>

            {(importSummary.newHerbs.length > 0 || importSummary.updatedHerbs.length > 0) && (
              <div className="mb-4">
                <h5 className="font-medium text-blue-700 mb-2">Herbs:</h5>
                {importSummary.newHerbs.length > 0 && (
                  <div className="mb-2">
                    <span className="text-green-600 font-medium">New ({importSummary.newHerbs.length}):</span>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      {importSummary.newHerbs.map(herb => (
                        <li key={herb.id}>{herb.name} ({herb.id})</li>
                      ))}
                    </ul>
                  </div>
                )}
                {importSummary.updatedHerbs.length > 0 && (
                  <div>
                    <span className="text-orange-600 font-medium">Updated ({importSummary.updatedHerbs.length}):</span>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      {importSummary.updatedHerbs.map(herb => (
                        <li key={herb.id}>{herb.name} ({herb.id})</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {(importSummary.newFormulations.length > 0 || importSummary.updatedFormulations.length > 0) && (
              <div>
                <h5 className="font-medium text-blue-700 mb-2">Formulations:</h5>
                {importSummary.newFormulations.length > 0 && (
                  <div className="mb-2">
                    <span className="text-green-600 font-medium">New ({importSummary.newFormulations.length}):</span>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      {importSummary.newFormulations.map(formulation => (
                        <li key={formulation.id}>{formulation.name} ({formulation.id})</li>
                      ))}
                    </ul>
                  </div>
                )}
                {importSummary.updatedFormulations.length > 0 && (
                  <div>
                    <span className="text-orange-600 font-medium">Updated ({importSummary.updatedFormulations.length}):</span>
                    <ul className="list-disc list-inside ml-4 text-sm">
                      {importSummary.updatedFormulations.map(formulation => (
                        <li key={formulation.id}>{formulation.name} ({formulation.id})</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {importSummary.newHerbs.length === 0 &&
             importSummary.updatedHerbs.length === 0 &&
             importSummary.newFormulations.length === 0 &&
             importSummary.updatedFormulations.length === 0 && (
              <p className="text-gray-600">No data was imported or updated.</p>
            )}
          </div>
        )}

        {isUploading && (
          <div className="flex items-center space-x-2 text-blue-600">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span>Uploading and processing data...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
