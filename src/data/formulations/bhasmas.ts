import { Formulation } from '../../types/ayurveda.ts';

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
  },
  {
    id: 'yava-kshara',
    name: 'Yava Kshara',
    sanskritName: 'यव क्षार',
    type: 'bhasma',
    clinicalSystems: ['Urinary System'],
    indicationCategories: ['Urinary Disorders'],
    traditionalCategories: ['Pittahara'],
    ingredients: [
      { herb: 'Barley whole plant', quantity: '1 part' }
    ],
    indications: [
      'Urinary coolant',
      'Hematuria (blood in urine)'
    ],
    dosage: {
      amount: '125-500 mg',
      frequency: 'twice a day',
      duration: 'before meals (or per physician)'
    },
    anupana: ['Warm water'],
    contraindications: [],
    reference: 'Nakra Ayurveda',
    adultDosage: '125-500 mg twice a day before meals (or per physician)',
    modeOfAction: 'Classical herbomineral alkali for urinary system.',
    generalConsiderations: 'Use with strict supervision. Use with strict supervision; especially in bleeding / sensitive conditions',
    brands: [
      {
        name: 'Nakra Ayurveda',
        products: [
          { name: 'Yava Kshara', price: 150, quantity: '10g' }
        ]
      }
    ]
  }
];
