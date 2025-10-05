import React, { useState } from 'react';
import { Herb } from '../types/ayurveda';
import { herbApi } from '../services/api';

interface HerbUploadProps {
  onDataImported: () => void;
}

interface ImportSummary {
  newHerbs: Herb[];
  updatedHerbs: Herb[];
}

const HerbUpload: React.FC<HerbUploadProps> = ({ onDataImported }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [importSummary, setImportSummary] = useState<ImportSummary | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadStatus('Processing herb file...');

    try {
      const fileContent = await readFileContent(file);
      console.log('Herb file content loaded:', fileContent.substring(0, 200) + '...');

      const herbs = parseHerbFileContent(fileContent, file.name);
      console.log('Parsed herbs:', herbs);

      await importHerbsToDatabase(herbs);

      setUploadStatus('Herbs imported successfully!');
      onDataImported();
    } catch (error) {
      console.error('Error importing herbs:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setUploadStatus(`Error importing herbs: ${errorMessage}. Please check the file format.`);
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

  const parseHerbFileContent = (content: string, fileName: string): Herb[] => {
    try {
      if (fileName.toLowerCase().endsWith('.json')) {
        const parsed = JSON.parse(content);
        // Handle both array format and object with herbs property
        if (Array.isArray(parsed)) {
          return parsed;
        } else if (parsed.herbs && Array.isArray(parsed.herbs)) {
          return parsed.herbs;
        } else {
          throw new Error('Invalid JSON structure. Expected array of herbs or object with "herbs" property.');
        }
      } else if (fileName.toLowerCase().endsWith('.csv')) {
        return parseHerbCSV(content);
      } else {
        throw new Error('Unsupported file format. Please upload JSON or CSV files.');
      }
    } catch (error) {
      throw new Error('Invalid file format. Please check the file structure.');
    }
  };

  const parseHerbCSV = (csvContent: string): Herb[] => {
    const lines = csvContent.split('\n').filter(line => line.trim());
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim());
    const herbs: Herb[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const values = line.split(',').map(v => v.trim());
      const row: Record<string, string> = {};

      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });

      herbs.push(parseHerbFromCSV(row));
    }

    return herbs;
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
      brandsAndPrices: row.brandsAndPrices ? JSON.parse(row.brandsAndPrices) : [],
      anupana: row.anupana ? row.anupana.split(';').map(a => a.trim()) : [],
      contraindications: row.contraindications ? row.contraindications.split(';').map(c => c.trim()) : [],
    };
  };

  const importHerbsToDatabase = async (herbs: Herb[]) => {
    const summary: ImportSummary = {
      newHerbs: [],
      updatedHerbs: []
    };

    console.log(`Starting herb import process for ${herbs.length} herbs...`);

    for (const herb of herbs) {
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

    const totalNew = summary.newHerbs.length;
    const totalUpdated = summary.updatedHerbs.length;

    console.log(`Herb import complete: ${totalNew} new, ${totalUpdated} updated`);
    console.log('Herb import summary:', summary);

    setImportSummary(summary);

    if (totalNew > 0 && totalUpdated > 0) {
      setUploadStatus(`Successfully imported ${totalNew} new herbs and updated ${totalUpdated} existing herbs`);
    } else if (totalNew > 0) {
      setUploadStatus(`Successfully imported ${totalNew} new herbs`);
    } else if (totalUpdated > 0) {
      setUploadStatus(`Successfully updated ${totalUpdated} existing herbs`);
    } else {
      setUploadStatus('No herbs imported or updated');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Import Herbs</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Herb JSON/CSV File
          </label>
          <input
            type="file"
            accept=".json,.csv"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          <p className="mt-1 text-sm text-gray-500">
            Upload JSON or CSV files containing herbs data only
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
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <h4 className="font-semibold text-green-800 mb-3">Herb Import Summary</h4>

            {importSummary.newHerbs.length > 0 && (
              <div className="mb-4">
                <h5 className="font-medium text-green-700 mb-2">New Herbs ({importSummary.newHerbs.length}):</h5>
                <ul className="list-disc list-inside ml-4 text-sm">
                  {importSummary.newHerbs.map(herb => (
                    <li key={herb.id}>{herb.name} ({herb.id})</li>
                  ))}
                </ul>
              </div>
            )}

            {importSummary.updatedHerbs.length > 0 && (
              <div>
                <h5 className="font-medium text-orange-600 mb-2">Updated Herbs ({importSummary.updatedHerbs.length}):</h5>
                <ul className="list-disc list-inside ml-4 text-sm">
                  {importSummary.updatedHerbs.map(herb => (
                    <li key={herb.id}>{herb.name} ({herb.id})</li>
                  ))}
                </ul>
              </div>
            )}

            {importSummary.newHerbs.length === 0 && importSummary.updatedHerbs.length === 0 && (
              <p className="text-gray-600">No herbs were imported or updated.</p>
            )}
          </div>
        )}

        {isUploading && (
          <div className="flex items-center space-x-2 text-green-600">
            <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            <span>Uploading and processing herbs...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HerbUpload;
