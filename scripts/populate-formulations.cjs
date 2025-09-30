const fs = require('fs');
const path = require('path');

// Read the current db.json
const dbPath = path.resolve(__dirname, '../data/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Sample formulations data - in a real scenario, you would import from your TypeScript files
const formulations = [
  {
    id: 'triphala-churna',
    name: 'Triphala Churna',
    sanskritName: 'त्रिफला चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders', 'Constipation'],
    traditionalCategories: ['Rasayana', 'Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part' },
      { herb: 'Bibhitaki', quantity: '1 part' },
      { herb: 'Amla', quantity: '1 part' }
    ],
    indications: ['Constipation', 'Poor digestion', 'Eye disorders', 'Detoxification'],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily',
      duration: 'As needed'
    },
    anupana: ['Warm water', 'Honey'],
    contraindications: ['Diarrhea', 'Pregnancy'],
    reference: 'Charaka Samhita'
  },
  {
    id: 'ashwagandha-churna',
    name: 'Ashwagandha Churna',
    sanskritName: 'अश्वगंधा चूर्ण',
    type: 'churna',
    clinicalSystems: ['Nervous System', 'Reproductive System'],
    indicationCategories: ['Stress', 'Weakness', 'Insomnia'],
    traditionalCategories: ['Balya', 'Rasayana', 'Vajikarana'],
    ingredients: [
      { herb: 'Ashwagandha', quantity: '100%' }
    ],
    indications: ['Stress', 'Anxiety', 'Weakness', 'Insomnia', 'Low libido'],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily',
      duration: 'Long-term use'
    },
    anupana: ['Milk', 'Ghee'],
    contraindications: ['Hyperthyroidism'],
    reference: 'Charaka Samhita'
  },
  {
    id: 'chitrakadi-vati',
    name: 'Chitrakadi Vati',
    sanskritName: 'चित्रकादि वटी',
    type: 'vatis',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders', 'Metabolic Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Chitrak', quantity: '1 part' },
      { herb: 'Pippali', quantity: '1 part' },
      { herb: 'Ginger', quantity: '1 part' }
    ],
    indications: ['Indigestion', 'Loss of appetite', 'Obesity'],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily',
      duration: '2-3 months'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Ulcers'],
    reference: 'Bhaishajya Ratnavali'
  },
  {
    id: 'dasamoolarishta',
    name: 'Dasamoolarishta',
    sanskritName: 'दशमूलारिष्ट',
    type: 'arishtas',
    clinicalSystems: ['Respiratory System', 'Musculoskeletal System'],
    indicationCategories: ['Respiratory Disorders', 'Pain'],
    traditionalCategories: ['Rasayana', 'Balya'],
    ingredients: [
      { herb: 'Bilva', quantity: '1 part' },
      { herb: 'Agnimantha', quantity: '1 part' },
      { herb: 'Shyonaka', quantity: '1 part' }
    ],
    indications: ['Cough', 'Asthma', 'Rheumatism', 'Weakness'],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: '1-3 months'
    },
    anupana: ['Equal water'],
    contraindications: ['Diabetes', 'Alcohol sensitivity'],
    reference: 'Sharngadhara Samhita'
  },
  {
    id: 'mahakalyanaka-ghrita',
    name: 'Mahakalyanaka Ghrita',
    sanskritName: 'महाकल्याणक घृत',
    type: 'ghritas',
    clinicalSystems: ['Nervous System', 'Reproductive System'],
    indicationCategories: ['Mental Disorders', 'Infertility'],
    traditionalCategories: ['Medhya', 'Vajikarana'],
    ingredients: [
      { herb: 'Ashwagandha', quantity: '1 part' },
      { herb: 'Shatavari', quantity: '1 part' },
      { herb: 'Brahmi', quantity: '1 part' }
    ],
    indications: ['Anxiety', 'Memory loss', 'Infertility', 'Weakness'],
    dosage: {
      amount: '5-10g',
      frequency: 'Twice daily',
      duration: '3-6 months'
    },
    anupana: ['Milk'],
    contraindications: ['Obesity', 'High cholesterol'],
    reference: 'Ashtanga Hridaya'
  }
];

// Replace formulations in the database
db.formulations = formulations;

// Write back to db.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log('Successfully populated formulations in data/db.json');
console.log(`Added ${formulations.length} formulations`);
