import { Formulation } from '../../types/ayurveda';

export const arishtas: Formulation[] = [
  {
    id: 'saraswatarishta',
    name: 'Saraswatarishta',
    sanskritName: 'सारस्वतारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Nervous System'],
    indicationCategories: ['Mental Health'],
    traditionalCategories: ['Medhya', 'Rasayana'],
    ingredients: [
      { herb: 'Brahmi', quantity: '4.8 kg', part: 'whole plant' },
      { herb: 'Vacha', quantity: '960 g', part: 'rhizome' },
      { herb: 'Shankhapushpi', quantity: '960 g', part: 'whole plant' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' }
    ],
    indications: [
      'Memory enhancement',
      'Speech disorders',
      'Mental fatigue',
      'Concentration issues',
      'Learning disabilities'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: '2-3 months',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Alcoholism'],
    preparation: 'Fermented decoction with herbs and jaggery',
    reference: 'Bhaishajya Ratnavali 73/54-60',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Saraswatarishta', price: 200, quantity: '450ml' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Saraswatarishta', price: 210, quantity: '450ml' }
        ]
      }
    ]
  },
  {
    id: 'kutajarishta',
    name: 'Kutajarishta',
    sanskritName: 'कुटजारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Kutaja', quantity: '4.8 kg', part: 'bark' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' },
      { herb: 'Musta', quantity: '48 g', part: 'rhizome' },
      { herb: 'Jaggery', quantity: '4.8 kg' }
    ],
    indications: [
      'Diarrhea',
      'Dysentery',
      'IBS',
      'Intestinal infections'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: 'Until symptoms subside',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Constipation'],
    preparation: 'Fermented decoction with Kutaja bark and jaggery',
    reference: 'Bhaishajya Ratnavali 7/188-192'
  },
  {
    id: 'ashokarishta',
    name: 'Ashokarishta',
    sanskritName: 'अशोकारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Reproductive System'],
    indicationCategories: ['Women\'s Health'],
    traditionalCategories: ['Rasayana'],
    ingredients: [
      { herb: 'Ashoka', quantity: '4.8 kg', part: 'bark' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' },
      { herb: 'Jaggery', quantity: '4.8 kg' },
      { herb: 'Water', quantity: '49.152 L' }
    ],
    indications: [
      'Menorrhagia',
      'Leucorrhoea',
      'Irregular menstruation',
      'Uterine disorders',
      'Dysmenorrhea'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: 'As prescribed',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    preparation: 'Fermented decoction with Ashoka bark',
    reference: 'Bhaishajya Ratnavali 66/115-121'
  },
  {
    id: 'dashmularishta',
    name: 'Dashmularishta',
    sanskritName: 'दशमूलारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Respiratory System', 'Musculoskeletal System'],
    indicationCategories: ['Respiratory Conditions', 'Musculoskeletal Issues'],
    traditionalCategories: ['Vatahara', 'Shothahara'],
    ingredients: [
      { herb: 'Dashmoola', quantity: '4.8 kg', part: 'roots' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' },
      { herb: 'Shunthi', quantity: '48 g', part: 'rhizome' },
      { herb: 'Jaggery', quantity: '4.8 kg' }
    ],
    indications: [
      'Respiratory disorders',
      'Cough',
      'Bronchitis',
      'Asthma',
      'Joint pain',
      'Arthritis'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '2-3 months',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Peptic ulcer'],
    preparation: 'Fermented decoction with Dashmoola roots',
    reference: 'Bhaishajya Ratnavali'
  }
];
