import { Formulation } from '../../types/ayurveda';

export const churnas: Formulation[] = [
  {
    id: 'pushyanuga-churna',
    name: 'Pushyanuga Churna',
    sanskritName: 'पुष्यानुग चूर्ण',
    type: 'churna',
    clinicalSystems: ['Reproductive System'],
    indicationCategories: ["Women's Health"],
    traditionalCategories: ['Kaphahara', 'Shothahara'],
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
    reference: 'Ashtanga Hridaya Uttara 33/45-48',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Pushyanuga Churna', price: 120, quantity: '60g' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Pushyanuga Churna', price: 130, quantity: '60g' }
        ]
      }
    ]
  },
  {
    id: 'hingwastaka-churna',
    name: 'Hingwastaka Churna',
    sanskritName: 'हिंग्वष्टक चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
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
    reference: 'Sharangadhara Samhita Madhyama 6/102-104',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Hingwastaka Churna', price: 80, quantity: '100g' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Hingwastaka Churna', price: 90, quantity: '100g' }
        ]
      }
    ]
  },
  {
    id: 'avipattikar-churna',
    name: 'Avipattikar Churna',
    sanskritName: 'अविपत्तिकर चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
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
    reference: 'Bhaishajya Ratnavali 10/32-36',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Avipattikar Churna', price: 90, quantity: '60g' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Avipattikar Churna', price: 100, quantity: '60g' }
        ]
      }
    ]
  },
  {
    id: 'triphala-churna',
    name: 'Triphala Churna',
    sanskritName: 'त्रिफला चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System', 'Nervous System', 'Integumentary System'],
    indicationCategories: ['Digestive Disorders', 'Eye Disorders', 'Metabolic Disorders', 'Skin Conditions', 'General Health & Wellness'],
    traditionalCategories: ['Rasayana', 'Anulomana', 'Chakshushya'],
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
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Triphala Churna', price: 70, quantity: '120g' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Triphala Churna', price: 75, quantity: '120g' }
        ]
      },
      {
        name: 'Zandu',
        products: [
          { name: 'Zandu Triphala Churna', price: 65, quantity: '120g' }
        ]
      }
    ]
  }
];
