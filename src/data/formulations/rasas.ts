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
  }
];
