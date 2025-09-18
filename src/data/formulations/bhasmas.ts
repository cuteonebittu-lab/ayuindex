import { Formulation } from '../../types/ayurveda';

export const bhasmas: Formulation[] = [
  {
    id: 'mandura-bhasma',
    name: 'Mandura Bhasma',
    sanskritName: 'मण्डूर भस्म',
    type: 'bhasma',
    category: 'Blood',
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
    categories: ['Blood', 'Liver']
  }
];
