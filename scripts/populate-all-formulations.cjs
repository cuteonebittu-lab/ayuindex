const fs = require('fs');
const path = require('path');

// Read the current db.json
const dbPath = path.resolve(__dirname, '../data/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Import all formulation data from TypeScript files
const formulationsPath = path.resolve(__dirname, '../src/data/formulations');

// Helper function to read and parse TypeScript files
function parseTypeScriptFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Extract the array content between export const and the closing bracket
    const match = content.match(/export\s+const\s+\w+\s*:\s*Formulation\[\]\s*=\s*\[([\s\S]*?)\];/);
    if (match) {
      // Convert TypeScript object to JSON
      let arrayContent = match[1];
      
      // Fix TypeScript syntax to JSON
      arrayContent = arrayContent
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/(\w+):/g, '"$1":') // Add quotes to property names
        .replace(/,\s*}/g, '}') // Remove trailing commas
        .replace(/,\s*\]/g, ']'); // Remove trailing commas in arrays
      
      // Parse as JSON
      return JSON.parse(`[${arrayContent}]`);
    }
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
  }
  return [];
}

// Get all formulation files
const formulationFiles = [
  'arishtas.ts',
  'vatis.ts',
  'kashayas.ts',
  'ghritas.ts',
  'churnas.ts',
  'tailas.ts',
  'bhasmas.ts',
  'rasas.ts',
  'guggulus.ts',
  'avalehas.ts',
  'syrups.ts'
];

let allFormulations = [];

// Read each formulation file
formulationFiles.forEach(file => {
  const filePath = path.join(formulationsPath, file);
  if (fs.existsSync(filePath)) {
    const formulations = parseTypeScriptFile(filePath);
    console.log(`Loaded ${formulations.length} formulations from ${file}`);
    allFormulations = [...allFormulations, ...formulations];
  }
});

// Replace formulations in the database
db.formulations = allFormulations;

// Write back to db.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log('Successfully populated all formulations in data/db.json');
console.log(`Total formulations: ${allFormulations.length}`);
