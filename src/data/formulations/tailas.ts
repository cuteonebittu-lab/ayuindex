import { Formulation } from '../../types/ayurveda';

export const tailas: Formulation[] = [
  {
    id: 'ksheerbala-taila',
    name: 'Ksheerbala Taila',
    sanskritName: 'क्षीरबला तैल',
    type: 'taila',
    category: 'Nervous System',
    ingredients: [
      { herb: 'Bala', quantity: '4.8 kg', part: 'root' },
      { herb: 'Cow\'s Milk', quantity: '12.288 L' },
      { herb: 'Sesame Oil', quantity: '768 ml' }
    ],
    indications: [
      'Facial paralysis',
      'Muscular dystrophy',
      'Neuromuscular disorders',
      'Rheumatoid arthritis'
    ],
    dosage: {
      amount: 'As needed',
      frequency: 'Once or twice daily',
      duration: 'As prescribed'
    },
    anupana: ['Not applicable (external use)'],
    contraindications: ['None for external application'],
    reference: 'Ashtanga Hridaya',
    categories: ['Nervous System', 'Musculoskeletal']
  }
];
