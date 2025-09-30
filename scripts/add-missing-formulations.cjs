const fs = require('fs');
const path = require('path');

// Read the current db.json
const dbPath = path.resolve(__dirname, '../data/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Add missing vatis formulations
const missingVatis = [
  {
    id: 'triphala-guggulu',
    name: 'Triphala Guggulu',
    sanskritName: 'त्रिफला गुग्गुलु',
    type: 'vatis',
    clinicalSystems: ['Musculoskeletal System', 'Integumentary System'],
    indicationCategories: ['Metabolic Disorders', 'Musculoskeletal Issues', 'Skin Conditions'],
    traditionalCategories: ['Kaphahara', 'Shothahara'],
    ingredients: [
      { herb: 'Triphala', quantity: '3 parts' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Pippali', quantity: '1 part' }
    ],
    indications: [
      'Obesity',
      'High cholesterol',
      'Arthritis',
      'Joint pain',
      'Skin disorders'
    ],
    dosage: {
      amount: '500mg-1g',
      frequency: 'Thrice daily',
      duration: '2-3 months'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    reference: 'Sharangadhara Samhita Madhyama 7/82-83'
  },
  {
    id: 'khadiradi-vati',
    name: 'Khadiradi Vati',
    sanskritName: 'खदिरादि वटी',
    type: 'vatis',
    clinicalSystems: ['Respiratory System'],
    indicationCategories: ['Respiratory Conditions'],
    traditionalCategories: ['Chakshushya', 'Shothahara'],
    ingredients: [
      { herb: 'Khadira', quantity: '1 part', part: 'heartwood' },
      { herb: 'Trikatu', quantity: '1 part' },
      { herb: 'Honey', quantity: 'As needed' }
    ],
    indications: [
      'Cough',
      'Bronchitis',
      'Throat infections',
      'Hoarseness of voice'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: 'Thrice daily',
      duration: '7-14 days'
    },
    anupana: ['Warm water'],
    contraindications: ['Pitta disorders'],
    reference: 'Sharangadhara Samhita Madhyama 7/22-24'
  },
  {
    id: 'arogyavardhini-vati',
    name: 'Arogyavardhini Vati',
    sanskritName: 'आरोग्यवर्धिनी वटी',
    type: 'vatis',
    clinicalSystems: ['Digestive System', 'Integumentary System'],
    indicationCategories: ['Metabolic Disorders', 'Digestive Disorders', 'Skin Conditions'],
    traditionalCategories: ['Deepana', 'Pachana', 'Rasayana'],
    ingredients: [
      { herb: 'Kutki', quantity: '1 part', part: 'root' },
      { herb: 'Triphala', quantity: '1 part', part: 'fruit' },
      { herb: 'Tamra Bhasma', quantity: '1/16 part' },
      { herb: 'Abhrak Bhasma', quantity: '1/16 part' }
    ],
    indications: [
      'Liver disorders',
      'Skin diseases',
      'Metabolic disorders',
      'Obesity',
      'Diabetes'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: 'Twice daily',
      duration: '1-3 months'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Lactation'],
    reference: 'Rasaratnasamucchaya 20/87-92'
  },
  {
    id: 'chandraprabha-vati',
    name: 'Chandraprabha Vati',
    sanskritName: 'चन्द्रप्रभा वटी',
    type: 'vatis',
    clinicalSystems: ['Urinary System', 'Endocrine System'],
    indicationCategories: ['Urinary Disorders', 'Metabolic Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Shilajit', quantity: '1 part' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Triphala', quantity: '1 part' }
    ],
    indications: [
      'Urinary tract infections',
      'Diabetes',
      'Renal calculi',
      'Erectile dysfunction'
    ],
    dosage: {
      amount: '2 tablets',
      frequency: 'Twice daily',
      duration: 'As prescribed'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    reference: 'Sharangadhara Samhita'
  },
  {
    id: 'kamadugha-rasa',
    name: 'Kamadugha Rasa',
    sanskritName: 'कामदुघा रस',
    type: 'vatis',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Mukta Bhasma', quantity: '1 part' },
      { herb: 'Pravala Bhasma', quantity: '1 part' },
      { herb: 'Shankha Bhasma', quantity: '1 part' },
      { herb: 'Shukti Bhasma', quantity: '1 part' }
    ],
    indications: [
      'Hyperacidity',
      'Heartburn',
      'Gastritis',
      'Ulcers',
      'Indigestion'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: '2-3 times daily',
      duration: 'As needed'
    },
    anupana: ['Cold water', 'Honey'],
    contraindications: ['Low gastric acid'],
    reference: 'Rasendra Sara Sangraha'
  },
  {
    id: 'punarnavadi-mandoor',
    name: 'Punarnavadi Mandoor',
    sanskritName: 'पुनर्नवादि मंडूर',
    type: 'vatis',
    clinicalSystems: ['Urinary System', 'Digestive System', 'Hematopoietic System'],
    indicationCategories: ['Urinary Disorders', 'Metabolic Disorders'],
    traditionalCategories: ['Shothahara', 'Deepana', 'Tridoshahara'],
    ingredients: [
      { herb: 'Punarnava', quantity: '48 g', part: 'powder' },
      { herb: 'Shunthi', quantity: '48 g', part: 'powder' },
      { herb: 'Pippali', quantity: '48 g', part: 'powder' },
      { herb: 'Maricha', quantity: '48 g', part: 'powder' },
      { herb: 'Amalaki', quantity: '48 g', part: 'powder' },
      { herb: 'Haritaki', quantity: '48 g', part: 'powder' },
      { herb: 'Chavya', quantity: '48 g', part: 'powder' },
      { herb: 'Haridra', quantity: '48 g', part: 'powder' },
      { herb: 'Daru Haridra', quantity: '48 g', part: 'powder' },
      { herb: 'Kushta', quantity: '48 g', part: 'powder' },
      { herb: 'Danti', quantity: '48 g', part: 'powder' },
      { herb: 'Kutaja Phala', quantity: '48 g', part: 'powder' },
      { herb: 'Musta', quantity: '48 g', part: 'powder' },
      { herb: 'Vidanga', quantity: '48 g', part: 'powder' },
      { herb: 'Chitrak Moola', quantity: '48 g', part: 'powder' },
      { herb: 'Mandoora Bhasma', quantity: '1.92 kg' }
    ],
    indications: [
      'Anaemia',
      'Splenomegaly',
      'Haemorrhoids',
      'Malabsorption syndrome',
      'Chronic fever',
      'Inflammatory conditions',
      'Infective skin diseases',
      'Helminthiasis'
    ],
    dosage: {
      amount: '500 mg- 1 g',
      frequency: 'Once or twice daily before or after food',
      duration: 'Maximum up to 4-6 months'
    },
    anupana: ['Water', 'Buttermilk'],
    contraindications: ['Hemosiderosis'],
    reference: 'Charak Samhita Chikitsa Sthana 16/93-95, Bhaishajya Ratnavali'
  },
  {
    id: 'bgr-34',
    name: 'BGR-34',
    sanskritName: 'बीजीआर-३४',
    type: 'vatis',
    clinicalSystems: ['Endocrine System'],
    indicationCategories: ['Metabolic Disorders'],
    traditionalCategories: [],
    ingredients: [
      { herb: 'Daruharidra (Berberis aristata)', quantity: 'Proprietary' },
      { herb: 'Giloy (Tinospora cordifolia)', quantity: 'Proprietary' },
      { herb: 'Vijaysar (Pterocarpus marsupium)', quantity: 'Proprietary' },
      { herb: 'Gudmar (Gymnema sylvestre)', quantity: 'Proprietary' },
      { herb: 'Manjeestha (Rubia cordifolia)', quantity: 'Proprietary' },
      { herb: 'Fenugreek (Trigonella foenum-graecum)', quantity: 'Proprietary' }
    ],
    indications: [
      'To support glycemic control',
      'Management of diabetes mellitus (adjunct)'
    ],
    dosage: {
      amount: '1 tablet',
      frequency: 'Twice daily',
      duration: 'As per clinician'
    },
    anupana: ['Water'],
    contraindications: [],
    reference: 'Wikipedia'
  },
  {
    id: 'laghusutshekhar-vati',
    name: 'Laghusutshekhar Vati',
    sanskritName: 'लघुसूतशेखर वटी',
    type: 'vatis',
    clinicalSystems: ['Digestive System', 'Nervous System'],
    indicationCategories: ['Digestive Disorders', 'Neurological Disorders'],
    traditionalCategories: ['Pittahara', 'Vedanasthapana'],
    ingredients: [
      { herb: 'Purified Swarna Gairika (cinnabar/gairika processed)', quantity: '1 part' },
      { herb: 'Sunthi (ginger)', quantity: '1 part' }
    ],
    indications: [
      'Acidity',
      'Gastritis',
      'Headache',
      'Migraine'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'twice a day',
      duration: 'before or after food or as directed by physician'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    reference: 'Classical Ayurvedic Text'
  },
  {
    id: 'samshamani-vati',
    name: 'Samshamani Vati',
    sanskritName: 'संशमनी वटी',
    type: 'vatis',
    clinicalSystems: ['Immune System', 'Digestive System'],
    indicationCategories: ['Fever & Infections', 'Digestive Disorders'],
    traditionalCategories: ['Jwaraghna', 'Pittahara'],
    ingredients: [
      { herb: 'Guduchi (Tinospora cordifolia) aqueous extract', quantity: '1 part' }
    ],
    indications: [
      'Chronic fever',
      'Viral and bacterial infections',
      'Immuno-modulation',
      'Inflammation',
      'Indigestion',
      'Pitta disorders'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'twice a day',
      duration: 'as directed'
    },
    anupana: ['Warm water'],
    contraindications: [],
    reference: 'Classical Ayurvedic Text'
  },
  {
    id: 'praval-panchamrut-tablet',
    name: 'Praval Panchamrut Tablet',
    sanskritName: 'प्रवाल पञ्चामृत वटी',
    type: 'vatis',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Pittahara', 'Deepana'],
    ingredients: [
      { herb: 'Praval Pishti', quantity: '1 part' },
      { herb: 'Shankha Bhasma', quantity: '1 part' },
      { herb: 'Shukti Bhasma', quantity: '1 part' },
      { herb: 'Kapardika Bhasma', quantity: '1 part' },
      { herb: 'Guduchi Satva', quantity: '1 part' },
      { herb: 'Godugdha (cow\'s milk)', quantity: '1 part' }
    ],
    indications: [
      'Bloating',
      'Hyperacidity',
      'Anorexia',
      'Diarrhea',
      'Indigestion'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'as directed',
      duration: 'as directed by physician'
    },
    anupana: ['Warm water'],
    contraindications: [],
    reference: 'Classical Ayurvedic Text'
  },
  {
    id: 'boswellia-curcumin',
    name: 'Boswellia Curcumin',
    sanskritName: 'बोसवेलिया कर्क्यूमिन',
    type: 'vatis',
    clinicalSystems: ['Musculoskeletal System'],
    indicationCategories: ['Musculoskeletal Issues'],
    traditionalCategories: ['Shothahara', 'Vedanasthapana'],
    ingredients: [
      { herb: 'Shallaki (Boswellia serrata)', quantity: '1 part' },
      { herb: 'Curcumin (Curcuma longa)', quantity: '1 part' }
    ],
    indications: [
      'Anti-inflammatory',
      'Helpful in osteoarthritis',
      'Rheumatoid arthritis',
      'Joint pain',
      'Reducing stiffness'
    ],
    dosage: {
      amount: '1 capsule',
      frequency: 'twice a day',
      duration: 'after a meal'
    },
    anupana: ['Plain water'],
    contraindications: [],
    reference: 'Planet Ayurveda'
  },
  {
    id: 'panchkola-capsules',
    name: 'Panchkola Capsules',
    sanskritName: 'पंचकोल कैप्सूल',
    type: 'vatis',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders', 'Metabolic Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Pippali (Piper longum fruit)', quantity: '100 mg' },
      { herb: 'Pippali root (Piper longum root)', quantity: '100 mg' },
      { herb: 'Chavya (Piper retrofractum)', quantity: '100 mg' },
      { herb: 'Chitraka (Plumbago zeylanica)', quantity: '100 mg' },
      { herb: 'Sonth / Shunthi (Zingiber officinale)', quantity: '100 mg' }
    ],
    indications: [
      'Supports digestion',
      'Detoxification',
      'Metabolic balance',
      'Stimulates liver/pancreas/intestines to secrete digestive juices',
      'Used in digestive, detox / metabolic disorders'
    ],
    dosage: {
      amount: '1-2 capsules',
      frequency: 'twice daily',
      duration: 'half an hour after meals'
    },
    anupana: ['Plain water'],
    contraindications: [],
    reference: 'planetayurveda.eu'
  }
];

// Add missing churnas
const missingChurnas = [
  {
    id: 'triphala-churna',
    name: 'Triphala Churna',
    sanskritName: 'त्रिफला चूर्ण',
    type: 'churnas',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders', 'General Health & Wellness'],
    traditionalCategories: ['Rasayana', 'Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part' },
      { herb: 'Bibhitaki', quantity: '1 part' },
      { herb: 'Amla', quantity: '1 part' }
    ],
    indications: [
      'Constipation',
      'Poor digestion',
      'Eye disorders',
      'Detoxification'
    ],
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
    type: 'churnas',
    clinicalSystems: ['Nervous System', 'Reproductive System'],
    indicationCategories: ['Stress', 'Weakness', 'Insomnia'],
    traditionalCategories: ['Balya', 'Rasayana', 'Vajikarana'],
    ingredients: [
      { herb: 'Ashwagandha', quantity: '100%' }
    ],
    indications: [
      'Stress',
      'Anxiety',
      'Weakness',
      'Insomnia',
      'Low libido'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily',
      duration: 'Long-term use'
    },
    anupana: ['Milk', 'Ghee'],
    contraindications: ['Hyperthyroidism'],
    reference: 'Charaka Samhita'
  }
];

// Combine all missing formulations
const allMissingFormulations = [...missingVatis, ...missingChurnas];

// Add to existing formulations (avoid duplicates)
const existingIds = new Set(db.formulations.map(f => f.id));
const newFormulations = allMissingFormulations.filter(f => !existingIds.has(f.id));

db.formulations = [...db.formulations, ...newFormulations];

// Write back to db.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log('Successfully added missing formulations to data/db.json');
console.log(`Added ${newFormulations.length} new formulations`);
console.log(`Total formulations: ${db.formulations.length}`);
