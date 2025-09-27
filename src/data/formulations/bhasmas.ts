import { Formulation } from '../../types/ayurveda';

export const bhasmas: Formulation[] = [
  {
    id: 'mandura-bhasma',
    name: 'Mandura Bhasma',
    sanskritName: 'मण्डूर भस्म',
    type: 'bhasma',
    clinicalSystems: ['Hematopoietic System', 'Digestive System'],
    indicationCategories: ['General Health & Wellness', 'Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Iron Rust', quantity: '1 part' },
      { herb: 'Triphala Decoction', quantity: 'As needed' }
    ],
    indications: [
      'Anemia',
      'Jaundice',
      'Liver disorders',
      'Spleen disorders'
    ],
    dosage: {
      amount: '125-250mg',
      frequency: 'Twice daily',
      duration: '1-3 months'
    },
    anupana: ['Honey', 'Ghee'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    reference: 'Rasa Tarangini',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Mandur Bhasma', price: 180, quantity: '10g' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Mandur Bhasma', price: 190, quantity: '10g' }
        ]
      }
    ]
  }
];
