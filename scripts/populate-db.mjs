import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Since we are in an ES module, we need to derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust the import paths to be relative to the script's location
const dataPath = path.resolve(__dirname, '../src/data');

// Dynamically import the data files
const { herbs } = await import(path.join(dataPath, 'herbs.ts').replace(/\\/g, '/'));
const { formulations } = await import(path.join(dataPath, 'index.ts').replace(/\\/g, '/'));

const db = {
  herbs,
  formulations
};

const dbPath = path.resolve(__dirname, '../data/db.json');
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log('Successfully populated data/db.json');
