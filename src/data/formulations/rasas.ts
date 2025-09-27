import { Formulation } from '../../types/ayurveda';

export const rasas: Formulation[] = [
  {
    id: 'sootshekhar-rasa',
    name: 'Sootshekhar Rasa',
    sanskritName: 'सूतशेखर रस',
    type: 'rasa',
    clinicalSystems: ['Respiratory System', 'Immune System'],
    indicationCategories: ['Respiratory Conditions', 'Fever & Infections'],
    traditionalCategories: ['Jwaraghna', 'Kaphahara'],
    ingredients: [
      { herb: 'Parada', quantity: '1 part' },
      { herb: 'Gandhaka', quantity: '1 part' },
      { herb: 'Vatsanabha', quantity: '1 part' },
      { herb: 'Tankana', quantity: '1 part' }
    ],
    indications: [
      'Fever',
      'Common cold',
      'Bronchitis',
      'Cough',
      'Sinusitis'
    ],
    dosage: {
      amount: '125mg',
      frequency: 'Twice daily',
      duration: '3-7 days'
    },
    anupana: ['Honey', 'Tulsi leaf juice'],
    contraindications: ['Pregnancy', 'Heart conditions'],
    reference: 'Rasa Tarangini',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Sootshekhar Rasa', price: 180, quantity: '30 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Sootshekhar Rasa', price: 190, quantity: '30 tablets' }
        ]
      }
    ]
  },
  {
    id: 'panchamrit-parpati',
    name: 'Panchamrit Parpati',
    sanskritName: 'पञ्चामृत पर्पटी',
    type: 'rasa',
    clinicalSystems: ['Digestive System', 'Hematopoietic System'],
    indicationCategories: ['Digestive Disorders', 'General Health & Wellness'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Abhraka Bhasma', quantity: '1 part' },
      { herb: 'Gandhaka (sulphur)', quantity: '1 part' },
      { herb: 'Ghee', quantity: '1 part' },
      { herb: 'Lauha Bhasma (iron)', quantity: '1 part' },
      { herb: 'Para (mercury)', quantity: '1 part' },
      { herb: 'Tamra Bhasma (copper / related)', quantity: '1 part' }
    ],
    indications: [
      'Diarrhea',
      'Dysentery with fever',
      'Weakness',
      'Anemia'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: '2-3 times a day',
      duration: 'as per practitioner'
    },
    anupana: ['Milk', 'Lukewarm water'],
    contraindications: ['Children', 'Pregnancy', 'Lactation'],
    reference: 'Nakra Ayurveda',
    adultDosage: '1-2 tablets with milk or lukewarm water 2-3 times a day (or per practitioner)',
    modeOfAction: 'Classical herbo-mineral formulation for digestive and hematopoietic systems.',
    generalConsiderations: 'High risk if misused; must be taken under expert supervision. High risk if misused; must be taken under expert supervision',
    brands: [
      {
        name: 'Nakra Ayurveda',
        products: [
          { name: 'Panchamrit Parpati', price: 200, quantity: '30 tablets' }
        ]
      }
    ]
  }
];
