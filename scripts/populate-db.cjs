const fs = require('fs');
const path = require('path');

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

// For formulations, we'll create a simple array with some sample data
// In a real scenario, you would import your formulation data files
const formulations = [
  {
    id: 'sample-formulation-1',
    name: 'Sample Formulation',
    sanskritName: 'सैंपल फॉर्म्युलेशन',
    type: 'churna',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Sample Herb', quantity: '1 part' }
    ],
    indications: ['Sample indication'],
    dosage: {
      amount: '1-2g',
      frequency: 'Twice daily',
      duration: 'As needed'
    },
    anupana: ['Water'],
    contraindications: [],
    reference: 'Sample reference'
  }
];

const db = {
  herbs,
  formulations
};

const dbPath = path.resolve(__dirname, '../data/db.json');
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log('Successfully populated data/db.json');
console.log(`Added ${herbs.length} herbs and ${formulations.length} formulations`);
