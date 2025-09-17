import { Formulation } from '../../types/ayurveda';

export const churnas: Formulation[] = [
  {
    id: 'triphala-churna',
    name: 'Triphala Churna',
    sanskritName: 'त्रिफला चूर्ण',
    type: 'churna',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Constipation',
      'Eye disorders',
      'Diabetes',
      'Skin diseases',
      'Digestive disorders'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Once or twice daily',
      duration: 'As needed'
    },
    anupana: ['Warm water', 'Honey'],
    contraindications: ['Pregnancy', 'Diarrhea'],
    reference: 'Sharangadhara Samhita',
    categories: ['Digestive System', 'Eye Care']
  }
];
