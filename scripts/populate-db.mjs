import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { allFormulations } from '../src/data/formulations/index.ts';

// Since we are in an ES module, we need to derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the herbs data from the JSON file using fs
const herbsDataPath = path.resolve(__dirname, '../data/herbs_dataset.json');
const herbsData = JSON.parse(fs.readFileSync(herbsDataPath, 'utf-8'));

// Map the herbs data to match the Herb type structure
const herbs = herbsData.map((herb) => ({
  id: herb.HerbName.toLowerCase().replace(/ /g, '-'),
  name: herb.HerbName,
  sanskritName: herb.HerbName, // Assuming HerbName is the Sanskrit name for now
  botanicalName: herb.BotanicalName,
  family: '', // This information is not in the JSON file
  parts: [herb.PartsUsed],
  rasa: herb.Rasa,
  guna: herb.Guna,
  virya: herb.Virya,
  vipaka: herb.Vipaka,
  karma: Array.isArray(herb.Karma) ? herb.Karma : [herb.Karma],
  prabhava: herb.Prabhava,
  indications: herb.Indications,
  typicalDosage: {
    powder: herb.Dosage,
  },
  brandsAndPrices: herb.Brands.map((brand) => ({
    brand: brand.BrandName,
    sku_title: `${brand.CompanyName} ${brand.BrandName} ${brand.PackageSize}`,
    pack_size: brand.PackageSize,
    price_inr: Number(String(brand.Price).replace('₹', '').trim()),
    retailer: brand.CompanyName,
    product_url: '', // This information is not in the JSON file
  })),
}));

const db = {
  herbs,
  formulations: allFormulations
};

const dbPath = path.resolve(__dirname, '../data/db.json');
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log('Successfully populated data/db.json');
console.log(`Added ${herbs.length} herbs and ${allFormulations.length} formulations`);
