const fs = require('fs');
const path = require('path');

// Import all individual formulation types
const { arishtas } = require('../src/data/formulations/arishtas.ts');
const { vatis } = require('../src/data/formulations/vatis.ts');
const { kashayas } = require('../src/data/formulations/kashayas.ts');
const { ghritas } = require('../src/data/formulations/ghritas.ts');
const { churnas } = require('../src/data/formulations/churnas.ts');
const { tailas } = require('../src/data/formulations/tailas.ts');
const { bhasmas } = require('../src/data/formulations/bhasmas.ts');
const { guggulus } = require('../src/data/formulations/guggulus.ts');
const { avalehas } = require('../src/data/formulations/avalehas.ts');
const { rasas } = require('../src/data/formulations/rasas.ts');
const { syrups } = require('../src/data/formulations/syrups.ts');
const { commercialProducts } = require('../src/data/formulations/commercial-products.ts');

// Read the herbs data from the JSON file
const herbsData = require('../data/herbs_dataset.json');

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
    price_inr: Number(brand.Price.replace('₹', '').trim()),
    retailer: brand.CompanyName,
    product_url: '', // This information is not in the JSON file
  })),
}));

// Combine all formulations into a single array
const allFormulations = [
  ...arishtas,
  ...vatis,
  ...kashayas,
  ...ghritas,
  ...churnas,
  ...tailas,
  ...bhasmas,
  ...rasas,
  ...guggulus,
  ...avalehas,
  ...syrups,
  ...commercialProducts
];

const db = {
  herbs,
  formulations: allFormulations
};

const dbPath = path.resolve(__dirname, '../data/db.json');
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log('Successfully populated data/db.json');
console.log(`Added ${herbs.length} herbs and ${allFormulations.length} formulations`);
