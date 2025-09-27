import { Formulation } from '../../types/ayurveda';

export const vatis: Formulation[] = [
  {
    id: 'triphala-guggulu',
    name: 'Triphala Guggulu',
    sanskritName: 'त्रिफला गुग्गुलु',
    type: 'vati',
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
      duration: '2-3 months',
      form: {
        tablet: '500mg-1g'
      }
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    preparation: 'Herbal tablets with Triphala and Guggulu',
    reference: 'Sharangadhara Samhita Madhyama 7/82-83',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Triphala Guggulu', price: 150, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Triphala Guggulu', price: 160, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'khadiradi-vati',
    name: 'Khadiradi Vati',
    sanskritName: 'खदिरादि वटी',
    type: 'vati',
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
      duration: '7-14 days',
      form: {
        tablet: '250-500mg'
      }
    },
    anupana: ['Warm water'],
    contraindications: ['Pitta disorders'],
    preparation: 'Herbal tablets for throat and respiratory conditions',
    reference: 'Sharangadhara Samhita Madhyama 7/22-24',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Khadiradi Vati', price: 80, quantity: '80 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Khadiradi Vati', price: 90, quantity: '80 tablets' }
        ]
      }
    ]
  },
  {
    id: 'arogyavardhini-vati',
    name: 'Arogyavardhini Vati',
    sanskritName: 'आरोग्यवर्धिनी वटी',
    type: 'vati',
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
      duration: '1-3 months',
      form: {
        tablet: '250-500mg'
      }
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Lactation'],
    preparation: 'Herbo-mineral tablets for liver and metabolic health',
    reference: 'Rasaratnasamucchaya 20/87-92',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Arogyavardhini Vati', price: 110, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Arogyavardhini Vati', price: 120, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'chandraprabha-vati',
    name: 'Chandraprabha Vati',
    sanskritName: 'चन्द्रप्रभा वटी',
    type: 'vati',
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
      duration: 'As prescribed',
      form: {
        tablet: '2 tablets'
      }
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    preparation: 'Herbo-mineral tablets for urinary and reproductive health',
    reference: 'Sharangadhara Samhita',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Chandraprabha Vati', price: 90, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Chandraprabha Vati', price: 100, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'kamadugha-rasa',
    name: 'Kamadugha Rasa',
    sanskritName: 'कामदुघा रस',
    type: 'vati',
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
      duration: 'As needed',
      form: {
        tablet: '250-500mg'
      }
    },
    anupana: ['Cold water', 'Honey'],
    contraindications: ['Low gastric acid'],
    preparation: 'Mineral-based tablets for digestive health',
    reference: 'Rasendra Sara Sangraha',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Kamadugha Rasa', price: 220, quantity: '30 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Kamadugha Rasa', price: 230, quantity: '30 tablets' }
        ]
      }
    ]
  }
];
