import { Formulation } from '../../types/ayurveda';

export const rasas: Formulation[] = [
  {
    id: 'sootshekhar-rasa',
    name: 'Sootshekhar Rasa',
    sanskritName: 'सूतशेखर रस',
    type: 'rasa',
    category: 'Respiratory System',
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
    categories: ['Respiratory System', 'Fever']
  }
];
