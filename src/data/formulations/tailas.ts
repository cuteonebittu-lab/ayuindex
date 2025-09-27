import { Formulation } from '../../types/ayurveda';

export const tailas: Formulation[] = [
  {
    id: 'ksheerbala-taila',
    name: 'Ksheerbala Taila',
    sanskritName: 'क्षीरबला तैल',
    type: 'taila',
    clinicalSystems: ['Nervous System', 'Musculoskeletal System'],
    indicationCategories: ['Neurological Disorders', 'Musculoskeletal Issues'],
    traditionalCategories: ['Vatahara', 'Balya'],
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
    brands: [
      {
        name: 'Kottakkal Arya Vaidya Sala',
        products: [
          { name: 'Ksheerbala Thailam (101)', price: 300, quantity: '200ml' }
        ]
      },
      {
        name: 'Nagarjuna',
        products: [
          { name: 'Ksheerabala Thailam', price: 280, quantity: '200ml' }
        ]
      }
    ]
  }
];
