import { Formulation } from '../../types/ayurveda.ts';

export const commercialProducts: Formulation[] = [
  {
    id: 'liv-52',
    name: 'Liv.52',
    sanskritName: 'लिव.52',
    type: 'vati',
    clinicalSystems: ['Digestive System', 'Hematopoietic System'],
    indicationCategories: ['Digestive Disorders', 'General Health & Wellness'],
    traditionalCategories: ['Rasayana', 'Deepana'],
    ingredients: [
      { herb: 'Caper Bush', quantity: 'Proprietary' },
      { herb: 'Chicory', quantity: 'Proprietary' },
      { herb: 'Black Nightshade', quantity: 'Proprietary' },
      { herb: 'Arjuna', quantity: 'Proprietary' },
      { herb: 'Negro Coffee', quantity: 'Proprietary' },
      { herb: 'Yarrow', quantity: 'Proprietary' },
      { herb: 'Tamarisk', quantity: 'Proprietary' }
    ],
    indications: [
      'Liver disorders',
      'Hepatitis',
      'Jaundice',
      'Liver cirrhosis',
      'Fatty liver',
      'Loss of appetite'
    ],
    dosage: {
      amount: '2 tablets',
      frequency: 'Twice daily',
      duration: 'As directed by physician'
    },
    anupana: ['Water'],
    contraindications: [],
    reference: 'Himalaya Wellness',
    brands: [
      {
        name: 'Himalaya',
        products: [
          { name: 'Liv.52', price: 96, quantity: '100 Tablets' },
          { name: 'Liv.52 DS', price: 180, quantity: '60 Tablets' },
          { name: 'Liv.52 DS', price: 540, quantity: '180 Tablets' }
        ]
      }
    ]
  },
  {
    id: 'chyawanprash',
    name: 'Chyawanprash',
    sanskritName: 'च्यवनप्राश',
    type: 'avaleha',
    clinicalSystems: ['Immune System', 'Respiratory System'],
    indicationCategories: ['General Health & Wellness', 'Respiratory Conditions'],
    traditionalCategories: ['Rasayana', 'Balya'],
    ingredients: [
      { herb: 'Amla', quantity: 'Main ingredient' },
      { herb: 'Bilya', quantity: 'Proprietary' },
      { herb: 'Brahmi', quantity: 'Proprietary' },
      { herb: 'Pippali', quantity: 'Proprietary' },
      { herb: 'Ashwagandha', quantity: 'Proprietary' },
      { herb: 'Shatavari', quantity: 'Proprietary' },
      { herb: 'Gokshura', quantity: 'Proprietary' },
      { herb: 'Vidanga', quantity: 'Proprietary' },
      { herb: 'Cardamom', quantity: 'Proprietary' },
      { herb: 'Cinnamon', quantity: 'Proprietary' }
    ],
    indications: [
      'Immunity enhancement',
      'Respiratory health',
      'Digestive health',
      'Energy and vitality',
      'Anti-aging',
      'General wellness'
    ],
    dosage: {
      amount: '1 teaspoon',
      frequency: 'Twice daily',
      duration: 'Regular use'
    },
    anupana: ['Warm milk', 'Water'],
    contraindications: ['Diabetes (sugar-containing varieties)'],
    reference: 'Classical Ayurvedic Text',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Chyawanprash', price: 820, quantity: '1 kg' }
        ]
      }
    ]
  },
  {
    id: 'guggulutiktaka-kashayam',
    name: 'Guggulutiktaka Kashayam',
    sanskritName: 'गुग्गुलुतिक्तक कषायम्',
    type: 'kashaya',
    clinicalSystems: ['Integumentary System', 'Digestive System', 'Immune System'],
    indicationCategories: ['Skin Conditions', 'Digestive Disorders', 'Metabolic Disorders'],
    traditionalCategories: ['Shothahara', 'Virechana', 'Kaphahara'],
    ingredients: [
      { herb: 'Nimba (Neem)', quantity: '1 part' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Manjishtha', quantity: '1 part' },
      { herb: 'Black Pepper', quantity: '1 part' },
      { herb: 'Vacha', quantity: '1 part' }
    ],
    indications: [
      'Chronic skin diseases',
      'Leprosy',
      'Eczema',
      'Psoriasis',
      'Fistula',
      'Indigestion',
      'Diabetes',
      'Blood purification'
    ],
    dosage: {
      amount: '15 ml',
      frequency: 'Twice daily',
      duration: 'As directed by physician'
    },
    anupana: ['Lukewarm water'],
    contraindications: ['Pregnancy'],
    reference: 'Ashtaanga Hrudayam',
    brands: [
      {
        name: 'Baidyanath',
        products: [
          { name: 'Guggulutiktaka Kashayam', price: 9.95, quantity: '200 ml' }
        ]
      },
      {
        name: 'AVN',
        products: [
          { name: 'Gulgulutiktakam Kashayam', price: 9.99, quantity: '100 Tablets' }
        ]
      },
      {
        name: 'AVP Kottakal',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 350, quantity: '100 Tablets' }
        ]
      },
      {
        name: 'Nagarjuna',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 170, quantity: '200 ml' }
        ]
      },
      {
        name: 'Aimil',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 530, quantity: '200 ml' }
        ]
      },
      {
        name: 'Kerala Ayurveda',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 440, quantity: '200 ml' },
          { name: 'Gulguluthikthakam Kwath', price: 183, quantity: '200 ml' }
        ]
      },
      {
        name: 'Solumiks',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 530, quantity: '200 ml' }
        ]
      },
      {
        name: 'Dhootapapeshwar',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 530, quantity: '200 ml' }
        ]
      },
      {
        name: 'Zandu',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 530, quantity: '200 ml' }
        ]
      },
      {
        name: 'Sandu',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 530, quantity: '200 ml' }
        ]
      },
      {
        name: 'JRK Pharmaceuticals',
        products: [
          { name: 'Gulguluthikthakam Kashayam', price: 530, quantity: '200 ml' }
        ]
      }
    ]
  },
  {
    id: 'ashwagandha-capsules',
    name: 'Ashwagandha Capsules',
    sanskritName: 'अश्वगंधा',
    type: 'vati',
    clinicalSystems: ['Nervous System', 'Endocrine System'],
    indicationCategories: ['Mental Health', 'General Health & Wellness'],
    traditionalCategories: ['Rasayana', 'Balya', 'Medhya'],
    ingredients: [
      { herb: 'Withania somnifera', quantity: 'Standardized extract' }
    ],
    indications: [
      'Stress',
      'Fatigue',
      'Anxiety',
      'General wellness',
      'Energy enhancement',
      'Mental clarity'
    ],
    dosage: {
      amount: '1 capsule',
      frequency: 'Twice daily',
      duration: 'Regular use'
    },
    anupana: ['Water', 'Milk'],
    contraindications: [],
    reference: 'Himalaya Wellness',
    brands: [
      {
        name: 'Himalaya',
        products: [
          { name: 'Ashwagandha', price: 240, quantity: '60 Capsules' }
        ]
      }
    ]
  },
  {
    id: 'triphala-churna',
    name: 'Triphala Churna',
    sanskritName: 'त्रिफला चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders', 'General Health & Wellness'],
    traditionalCategories: ['Rasayana', 'Deepana', 'Anulomana'],
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part' },
      { herb: 'Bibhitaki', quantity: '1 part' },
      { herb: 'Amalaki', quantity: '1 part' }
    ],
    indications: [
      'Digestive health',
      'Bowel regulation',
      'Detoxification',
      'Eye health',
      'General wellness'
    ],
    dosage: {
      amount: '1 teaspoon',
      frequency: 'At night',
      duration: 'Regular use'
    },
    anupana: ['Warm water'],
    contraindications: [],
    reference: 'Classical Ayurvedic Text',
    brands: [
      {
        name: 'AVN',
        products: [
          { name: 'Triphala Churna', price: 180, quantity: '100 gm' }
        ]
      }
    ]
  },
  {
    id: 'chyavanaprash-avaleha',
    name: 'Chyavanaprash Avaleha',
    sanskritName: 'च्यवनप्राश अवलेह',
    type: 'avaleha',
    clinicalSystems: ['Immune System', 'Respiratory System'],
    indicationCategories: ['General Health & Wellness', 'Respiratory Conditions'],
    traditionalCategories: ['Rasayana', 'Balya'],
    ingredients: [
      { herb: 'Amla', quantity: 'Main ingredient' },
      { herb: 'Ashwagandha', quantity: 'Proprietary' },
      { herb: 'Pippali', quantity: 'Proprietary' },
      { herb: 'Honey', quantity: 'Proprietary' }
    ],
    indications: [
      'Immunity',
      'Vitality',
      'Respiratory health',
      'Energy enhancement'
    ],
    dosage: {
      amount: '1 teaspoon',
      frequency: 'Twice daily',
      duration: 'Regular use'
    },
    anupana: ['Warm milk', 'Water'],
    contraindications: ['Diabetes (sugar-containing varieties)'],
    reference: 'Kottakkal Arya Vaidya Sala',
    brands: [
      {
        name: 'AVP Kottakal',
        products: [
          { name: 'Chyavanaprash Avaleha', price: 420, quantity: '500 gm' }
        ]
      }
    ]
  }
];
