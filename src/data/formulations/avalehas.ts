import { Formulation } from '../../types/ayurveda.ts';

export const avalehas: Formulation[] = [
  {
    id: 'chyawanprash',
    name: 'Chyawanprash',
    sanskritName: 'च्यवनप्राश',
    type: 'avaleha',
    clinicalSystems: ['Respiratory System', 'Immune System', 'Digestive System'],
    indicationCategories: ['Respiratory Conditions', 'General Health & Wellness', 'Digestive Disorders'],
    traditionalCategories: ['Rasayana', 'Balya', 'Kaphahara'],
    ingredients: [
      { herb: 'Amla (Emblica officinalis) pulp (primary base)', quantity: '500 g' },
      { herb: 'Ghee', quantity: '100 g' },
      { herb: 'Sesame oil', quantity: '50 g' },
      { herb: 'Honey', quantity: '200 g' },
      { herb: 'Sugar or jaggery', quantity: '300 g' },
      { herb: 'Long list of herbs/extracts (example): Ashwagandha, Shatavari, Giloy, Pippali, Dalchini, Lavanga, Ela, Yavani, etc. (classical formulations use 30–50 herbs; commercial brands standardize key extracts)', quantity: 'various' }
    ],
    indications: [
      'Rasayana (rejuvenation)',
      'Immune support',
      'General vitality',
      'Respiratory wellness',
      'Antioxidant support'
    ],
    dosage: {
      amount: '10–20 g (1 tablespoon)',
      frequency: 'once or twice daily',
      duration: 'depending on brand'
    },
    anupana: ['Warm milk', 'Warm water', 'Alone'],
    contraindications: [
      'Uncontrolled Madhumeha (Diabetes Mellitus)'
    ],
    preparation: 'Prepare concentrated decoction of listed herbs; reduce and mix with amla pulp cooked with sugar/jaggery to jam-like consistency; add ghee/oils; finally mix powdered herbs/extracts and preserve in sterile jars with honey/ghee.',
    reference: 'WHO/peer-reviewed reviews on Chyawanprash composition and uses, PMC review on Chyawanprash formulation and properties',
    adultDosage: '10–20 g (1 tablespoon) once or twice daily; may be taken with warm milk/water.',
    generalConsiderations: 'High sugar variants: caution in diabetes — use diabetic variants or consult clinician. Store in cool dry place; follow manufacturer shelf-life.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Chyawanprash', price: 350, quantity: '1kg' },
          { name: 'Dabur Chyawanprash Sugar-Free', price: 400, quantity: '1kg' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Chyawanprash Special', price: 370, quantity: '1kg' }
        ]
      },
      {
        name: 'Patanjali',
        products: [
          { name: 'Patanjali Chyawanprash', price: 250, quantity: '1kg' }
        ]
      }
    ]
  },
  {
    id: 'vikramprash',
    name: 'Vikramprash',
    sanskritName: 'विक्रमप्राश',
    type: 'avaleha',
    clinicalSystems: ['Immune System'],
    indicationCategories: ['General Health & Wellness'],
    traditionalCategories: ['Rasayana', 'Balya'],
    ingredients: [
      { herb: 'Bilva (Aegle marmelos)', quantity: 'Principal herb' },
      { herb: 'Many other herbs (full list not disclosed)', quantity: 'Proprietary' }
    ],
    indications: [
      'General immune support',
      'Tonic',
      'Adaptogen properties'
    ],
    dosage: {
      amount: '1-2 teaspoons (adults), ½ teaspoon (children)',
      frequency: 'as directed',
      duration: 'with lukewarm water or milk'
    },
    anupana: ['Lukewarm water', 'Milk'],
    contraindications: [],
    reference: 'Planet Ayurveda',
    adultDosage: 'Adults — 1 to 2 teaspoons with lukewarm water or milk; Children — ½ teaspoon with lukewarm water or milk',
    modeOfAction: 'General immune support and tonic.',
    generalConsiderations: 'Proprietary avaleha (like chyavanprash) for immunity support.',
    brands: [
      {
        name: 'Planet Ayurveda',
        products: [
          { name: 'Vikramprash', price: 300, quantity: '500g' }
        ]
      }
    ]
  },
  {
    id: 'anantamul-avaleha',
    name: 'Anantamul Avaleha',
    sanskritName: 'अनंतमूल अवलेह',
    type: 'avaleha',
    clinicalSystems: ['Integumentary System', 'Hematopoietic System'],
    indicationCategories: ['Skin Conditions', 'General Health & Wellness'],
    traditionalCategories: ['Rasayana'],
    ingredients: [
      { herb: 'Anantamul (Hemidesmus indicus) root extract', quantity: '50 g' },
      { herb: 'Sugar/jaggery', quantity: '300 g' },
      { herb: 'Ghee / oil', quantity: '50 g' },
      { herb: 'Supporting herbs (Manjistha, Nagarmotha)', quantity: 'various' }
    ],
    indications: [
      'General debility',
      'Skin disorders (adjunct)',
      'Blood purifier (classical use)'
    ],
    dosage: {
      amount: '1-2 teaspoons',
      frequency: 'twice daily',
      duration: 'after meals (adult)'
    },
    anupana: ['Warm water'],
    contraindications: [],
    generalConsiderations: 'High sugar content: caution in diabetics. Follow product labeling.',
    reference: 'Classical Ayurvedic Text',
    brands: []
  },
  {
    id: 'brahma-rasayana',
    name: 'Brahma Rasayana',
    sanskritName: 'ब्रह्म रसायन',
    type: 'avaleha',
    clinicalSystems: ['Nervous System', 'Immune System'],
    indicationCategories: ['Mental Health', 'General Health & Wellness'],
    traditionalCategories: ['Rasayana', 'Medhya', 'Balya'],
    ingredients: [
      { herb: 'Dashamoola', quantity: '1 part', part: 'roots' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Amla', quantity: '1 part', part: 'fruit' },
      { herb: 'Ghee', quantity: '1 part' },
      { herb: 'Honey', quantity: '1 part' },
      { herb: 'Sugar', quantity: '1 part' }
    ],
    indications: [
      'Memory enhancement',
      'Anti-aging',
      'Stress reduction',
      'Immunity booster',
      'General debility'
    ],
    dosage: {
      amount: '1-2 teaspoons',
      frequency: 'Twice daily',
      duration: 'Long-term use'
    },
    anupana: ['Warm milk'],
    contraindications: ['Diabetes'],
    reference: 'Charaka Samhita',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Brahma Rasayana', price: 300, quantity: '250g' }
        ]
      }
    ]
  },
  {
    id: 'chyawanprash-commercial',
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
    id: 'chyavanaprash-avaleha-commercial',
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
