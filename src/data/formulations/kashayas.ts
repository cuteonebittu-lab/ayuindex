import { Formulation } from '../../types/ayurveda';

export const kashayas: Formulation[] = [
  {
    id: 'shadangapaniya',
    name: 'Shadangapaniya',
    sanskritName: 'षडंग पानीय',
    type: 'kashaya',
    clinicalSystems: ['Immune System', 'Urinary System'],
    indicationCategories: ['Fever & Infections', 'General Health & Wellness'],
    traditionalCategories: ['Jwaraghna', 'Pittahara'],
    ingredients: [
      { herb: 'Musta', quantity: '1 part', part: 'rhizome' },
      { herb: 'Parpataka', quantity: '1 part', part: 'whole plant' },
      { herb: 'Ushira', quantity: '1 part', part: 'root' },
      { herb: 'Chandana', quantity: '1 part', part: 'heartwood' },
      { herb: 'Udichya', quantity: '1 part', part: 'rhizome' },
      { herb: 'Nagara', quantity: '1 part', part: 'rhizome' }
    ],
    indications: [
      'Fever',
      'Thirst',
      'Burning sensation',
      'Heat stroke',
      'Summer disorders'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: '3-4 times daily',
      duration: 'As needed'
    },
    anupana: ['Cool water'],
    contraindications: ['Cold and cough'],
    reference: 'Charaka Samhita',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Shadangapaniya', price: 100, quantity: '200ml' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Shadangapaniya', price: 110, quantity: '200ml' }
        ]
      }
    ]
  },
  {
    id: 'guduchyadi-kashaya',
    name: 'Guduchyadi Kashaya',
    sanskritName: 'गुडूच्यादि कषाय',
    type: 'kashaya',
    clinicalSystems: ['Immune System'],
    indicationCategories: ['Fever & Infections', 'General Health & Wellness'],
    traditionalCategories: ['Jwaraghna', 'Rasayana'],
    ingredients: [
      { herb: 'Guduchi', quantity: '1 part', part: 'stem' },
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Chronic fever',
      'General debility',
      'Loss of appetite',
      'Weakness after fever'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily before food',
      duration: '7-14 days'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    reference: 'Ashtanga Hridaya',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Guduchyadi Kashaya', price: 130, quantity: '200ml' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Guduchyadi Kashaya', price: 140, quantity: '200ml' }
        ]
      }
    ]
  }
];
