import { Formulation } from '../../types/ayurveda';

export const arishtas: Formulation[] = [
  {
    id: 'ashokarishta',
    name: 'Ashokarishta',
    sanskritName: 'अशोकारिष्ट',
    type: 'arishta',
    category: 'Women\'s Health',
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
      duration: 'As prescribed'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    reference: 'Bhaishajya Ratnavali 66/115-121',
    categories: ['Women\'s Health', 'Reproductive System']
  },
  {
    id: 'dashmularishta',
    name: 'Dashmularishta',
    sanskritName: 'दशमूलारिष्ट',
    type: 'arishta',
    category: 'Respiratory System',
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
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Peptic ulcer'],
    reference: 'Bhaishajya Ratnavali',
    categories: ['Respiratory System', 'Musculoskeletal']
  }
];
