import { Formulation } from '../../types/ayurveda';

export const churnas: Formulation[] = [
  {
    id: 'pushyanuga-churna',
    name: 'Pushyanuga Churna',
    sanskritName: 'पुष्यानुग चूर्ण',
    type: 'churna',
    category: 'Women\'s Health',
    ingredients: [
      { herb: 'Lodhra', quantity: '1 part', part: 'bark' },
      { herb: 'Musta', quantity: '1 part', part: 'rhizome' },
      { herb: 'Patha', quantity: '1 part', part: 'root' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Menstrual disorders',
      'Leucorrhea',
      'Vaginal infections',
      'Abnormal uterine bleeding'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily',
      duration: 'As needed'
    },
    anupana: ['Warm water', 'Honey'],
    contraindications: ['Pregnancy'],
    categories: ['Women\'s Health'],
    reference: 'Ashtanga Hridaya Uttara 33/45-48'
  },
  {
    id: 'hingwastaka-churna',
    name: 'Hingwastaka Churna',
    sanskritName: 'हिंग्वष्टक चूर्ण',
    type: 'churna',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Hing', quantity: '1 part' },
      { herb: 'Trikatu', quantity: '1 part' },
      { herb: 'Ajmoda', quantity: '1 part' },
      { herb: 'Black Salt', quantity: '1 part' }
    ],
    indications: [
      'Indigestion',
      'Bloating',
      'Flatulence',
      'Abdominal pain',
      'Loss of appetite'
    ],
    dosage: {
      amount: '1-3g',
      frequency: 'After meals',
      duration: 'As needed'
    },
    anupana: ['Warm water'],
    contraindications: ['Peptic ulcer'],
    categories: ['Digestive System'],
    reference: 'Sharangadhara Samhita Madhyama 6/102-104'
  },
  {
    id: 'avipattikar-churna',
    name: 'Avipattikar Churna',
    sanskritName: 'अविपत्तिकर चूर्ण',
    type: 'churna',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Trikatu', quantity: '1 part' },
      { herb: 'Triphala', quantity: '1 part' },
      { herb: 'Musta', quantity: '1 part' },
      { herb: 'Vidanga', quantity: '1 part' }
    ],
    indications: [
      'Hyperacidity',
      'Gastritis',
      'Indigestion',
      'Heartburn'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily',
      duration: 'As needed'
    },
    anupana: ['Warm water'],
    contraindications: ['Peptic ulcer'],
    categories: ['Digestive System'],
    reference: 'Bhaishajya Ratnavali 10/32-36'
  },
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
    categories: ['Digestive System', 'General Tonic']
  }
];
