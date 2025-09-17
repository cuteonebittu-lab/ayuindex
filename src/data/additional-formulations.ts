import { Formulation } from '../types/ayurveda';

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
    id: 'draksharishta',
    name: 'Draksharishta',
    sanskritName: 'द्राक्षारिष्ट',
    type: 'arishta',
    category: 'General Tonic',
    ingredients: [
      { herb: 'Draksha', quantity: '4.8 kg', part: 'fruit' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' },
      { herb: 'Madhuka', quantity: '960 g', part: 'flower' }
    ],
    indications: [
      'General weakness',
      'Anemia',
      'Loss of appetite',
      'Respiratory disorders',
      'Cough'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: 'As prescribed'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes'],
    reference: 'Bhaishajya Ratnavali',
    categories: ['General Tonic', 'Respiratory System']
  }
];

export const vatis: Formulation[] = [
  {
    id: 'chandraprabha-vati',
    name: 'Chandraprabha Vati',
    sanskritName: 'चन्द्रप्रभा वटी',
    type: 'vati',
    category: 'Urinary System',
    ingredients: [
      { herb: 'Shilajit', quantity: '1 part' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Triphala', quantity: '1 part' }
    ],
    indications: [
      'Urinary tract infections',
      'Diabetes',
      'Renal calculi',
      'Erectile dysfunction'
    ],
    dosage: {
      amount: '2 tablets',
      frequency: 'Twice daily',
      duration: 'As prescribed'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    reference: 'Sharangadhara Samhita',
    categories: ['Urinary System', 'Metabolic Disorders']
  }
];

export const kashayas: Formulation[] = [
  {
    id: 'panchakola-kashaya',
    name: 'Panchakola Kashaya',
    sanskritName: 'पञ्चकोल कषाय',
    type: 'kashaya',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Pippalimula', quantity: '1 part', part: 'root' },
      { herb: 'Chavya', quantity: '1 part', part: 'root' },
      { herb: 'Chitraka', quantity: '1 part', part: 'root' },
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' }
    ],
    indications: [
      'Poor digestion',
      'Loss of appetite',
      'Abdominal pain',
      'Flatulence'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily before food',
      duration: '7-14 days'
    },
    anupana: ['Warm water'],
    contraindications: ['Pitta disorders', 'Pregnancy'],
    reference: 'Ashtanga Hridaya',
    categories: ['Digestive System']
  }
];

export const ghritas: Formulation[] = [
  {
    id: 'mahakalyana-ghrita',
    name: 'Mahakalyana Ghrita',
    sanskritName: 'महाकल्याण घृत',
    type: 'ghrita',
    category: 'Nervous System',
    ingredients: [
      { herb: 'Ashwagandha', quantity: '1 part', part: 'root' },
      { herb: 'Shatavari', quantity: '1 part', part: 'root' },
      { herb: 'Ghee', quantity: '4 parts' }
    ],
    indications: [
      'Mental disorders',
      'Epilepsy',
      'Memory enhancement',
      'Nervous weakness'
    ],
    dosage: {
      amount: '10-20ml',
      frequency: 'Twice daily',
      duration: '1-3 months'
    },
    anupana: ['Warm milk'],
    contraindications: ['High cholesterol', 'Obesity'],
    reference: 'Bhaishajya Ratnavali',
    categories: ['Nervous System', 'Mental Health']
  }
];
