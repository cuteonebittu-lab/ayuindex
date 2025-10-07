import { Formulation } from '../../types/ayurveda.ts';

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
  },
  {
    id: 'bilwadi-churna',
    name: 'Bilwadi Churna',
    sanskritName: 'बिल्वादि चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Bel (Aegle marmelos)', quantity: 'Proprietary' },
      { herb: 'Mochras (exudate)', quantity: 'Proprietary' },
      { herb: 'Ginger (Sonth)', quantity: 'Proprietary' },
      { herb: 'Vijaya (Cannabis sativa leaves)', quantity: 'Proprietary' },
      { herb: 'Dhātaki (Woodfordia floribunda)', quantity: 'Proprietary' },
      { herb: 'Dhaniya (Coriandrum sativum)', quantity: 'Proprietary' },
      { herb: 'Saunf', quantity: 'Proprietary' }
    ],
    indications: [
      'GI tract support',
      'Traditional digestive tonic'
    ],
    dosage: {
      amount: '~10 ml',
      frequency: 'Twice daily',
      duration: 'As directed',
      form: {
        powder: '~10 ml'
      }
    },
    anupana: ['Water'],
    contraindications: [],
    preparation: 'Powdered mixture of herbs',
    reference: 'mohtaayurved.com',
    brands: []
  },
  {
    id: 'hingwashtak-churna',
    name: 'Hingwashtak Churna',
    sanskritName: 'हिंग्वष्टक चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana', 'Anulomana'],
    ingredients: [
      { herb: 'Ghritbharjit Hingu (asafoetida processed with ghee)', quantity: '1 part' },
      { herb: 'Sunthi (ginger)', quantity: '1 part' },
      { herb: 'Marich (black pepper)', quantity: '1 part' },
      { herb: 'Pippali (long pepper)', quantity: '1 part' },
      { herb: 'Ajamoda (carom seed)', quantity: '1 part' },
      { herb: 'Saidhava (rock salt)', quantity: '1 part' },
      { herb: 'Shwet Jeerak (white cumin)', quantity: '1 part' },
      { herb: 'Krushna Jeerak (black cumin)', quantity: '1 part' }
    ],
    indications: [
      'Appetite enhancer',
      'Digestive disorders',
      'Indigestion',
      'Constipation',
      'Anorexia',
      'Bloating'
    ],
    dosage: {
      amount: '2-4 grams',
      frequency: 'during the meal',
      duration: 'as directed'
    },
    anupana: ['Ghee'],
    contraindications: ['Peptic ulcer'],
    reference: 'Classical Ayurvedic Text',
    adultDosage: '2-4 grams with ghee during the meal',
    modeOfAction: 'Stimulates digestive fire (Agni) and improves digestion.',
    generalConsiderations: 'Useful for various digestive disorders.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Hingwashtak Churna', price: 85, quantity: '100g' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Hingwashtak Churna', price: 90, quantity: '100g' }
        ]
      }
    ]
  },
  {
    id: 'sitopaladi-churna',
    name: 'Sitopaladi Churna',
    sanskritName: 'सितोपलादि चूर्ण',
    type: 'churna',
    clinicalSystems: ['Respiratory System'],
    indicationCategories: ['Respiratory Conditions', 'ENT Conditions'],
    traditionalCategories: ['Kaphahara', 'Pittahara'],
    ingredients: [
      { herb: 'Mishri (rock sugar)', quantity: '1 part' },
      { herb: 'Vanshlochan (bamboo manna)', quantity: '1 part' },
      { herb: 'Pippali (long pepper)', quantity: '1 part' },
      { herb: 'Ela (cardamom)', quantity: '1 part' },
      { herb: 'Dalchini (cinnamon)', quantity: '1 part' }
    ],
    indications: [
      'Cough',
      'Cold',
      'Sinusitis',
      'Bronchitis',
      'Asthma',
      'Balancing throat and respiratory issues',
      'Conditions with Kapha / phlegm',
      'Anemia in some variants'
    ],
    dosage: {
      amount: 'As directed',
      frequency: 'As directed',
      duration: 'as directed by physician'
    },
    anupana: ['Warm water', 'Honey'],
    contraindications: ['Diabetes (due to sugar content)'],
    reference: 'Classical Ayurvedic Text',
    adultDosage: 'As directed by physician (often in small doses with warm water or honey)',
    modeOfAction: 'Acts as expectorant and respiratory tonic.',
    generalConsiderations: 'Useful for respiratory disorders and throat conditions.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Sitopaladi Churna', price: 95, quantity: '50g' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Sitopaladi Churna', price: 100, quantity: '50g' }
        ]
      }
    ]
  },
  {
    id: 'panchasakar-churna',
    name: 'Panchasakar Churna',
    sanskritName: 'पञ्चसकार चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System', 'Urinary System'],
    indicationCategories: ['Digestive Disorders', 'Urinary Disorders'],
    traditionalCategories: ['Anulomana', 'Vatahara'],
    ingredients: [
      { herb: 'Cassia angustifolia (Senna)', quantity: '1 part' },
      { herb: 'Terminalia chebula (Haritaki)', quantity: '1 part' },
      { herb: 'Zingiber officinale (Ginger)', quantity: '1 part' },
      { herb: 'Foeniculum vulgare (Fennel)', quantity: '1 part' }
    ],
    indications: [
      'Mutraghata (urine retention)',
      'Mutrakr̥cchā (dysuria)',
      'Prameha (certain urinary disorders)',
      'Pidāka (boils / carbuncles)'
    ],
    dosage: {
      amount: '1-3 g',
      frequency: 'as per physician',
      duration: 'as directed'
    },
    anupana: ['Honey', 'Water'],
    contraindications: ['Pregnancy', 'Diarrhea'],
    reference: 'Nakra Ayurveda',
    adultDosage: '1 to 3 g (or as per physician) with honey or water',
    modeOfAction: 'Acts as mild laxative and urinary system support.',
    generalConsiderations: 'Useful for urinary and digestive disorders. Use under supervision, do not exceed recommended dose, store in cool dry place.',
    brands: [
      {
        name: 'Nakra Ayurveda',
        products: [
          { name: 'Panchasakar Churna', price: 110, quantity: '100g' }
        ]
      }
    ]
  },
  {
    id: 'aamvatantak-churna',
    name: 'Aamvatantak Churna',
    sanskritName: 'आमवातान्तक चूर्ण',
    type: 'churna',
    clinicalSystems: ['Musculoskeletal System', 'Immune System'],
    indicationCategories: ['Musculoskeletal Issues', 'General Health & Wellness'],
    traditionalCategories: ['Shothahara', 'Vedanasthapana', 'Balya'],
    ingredients: [
      { herb: 'Ashwagandha (Withania somnifera)', quantity: '1 part' },
      { herb: 'Methi (Trigonella foenum graecum)', quantity: '1 part' },
      { herb: 'Gorakhmundi (Sphaeranthus indicus)', quantity: '1 part' },
      { herb: 'Haridra (Curcuma longa)', quantity: '1 part' },
      { herb: 'Sonth (Zingiber officinale)', quantity: '1 part' }
    ],
    indications: [
      'Pain, swelling in joints (arthritic symptoms)',
      'Boosting immunity',
      'Nourishing joints'
    ],
    dosage: {
      amount: '½ teaspoon',
      frequency: 'twice daily',
      duration: 'after meals'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    reference: 'Planet Ayurveda',
    adultDosage: '½ teaspoon twice daily after meals',
    modeOfAction: 'Anti-inflammatory and immunomodulatory.',
    generalConsiderations: 'Proprietary formulation for joint health.',
    brands: [
      {
        name: 'Planet Ayurveda',
        products: [
          { name: 'Aamvatantak Churna', price: 120, quantity: '200g' }
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
    traditionalCategories: ['Pittahara', 'Anulomana'],
    ingredients: [
      { herb: 'Khanda Sharkara (major bulk (classical proportion))', quantity: '50%' },
      { herb: 'Trivrit (Operculina turpethum)', quantity: '6 parts' },
      { herb: 'Baheda (Terminalia bellirica)', quantity: '6 parts' },
      { herb: 'Haritaki (Terminalia chebula)', quantity: '6 parts' },
      { herb: 'Amla (Emblica officinalis)', quantity: '6 parts' },
      { herb: 'Nagarmotha (Cyperus rotundus)', quantity: '4 parts' },
      { herb: 'Vidanga (Embelia ribes)', quantity: '4 parts' },
      { herb: 'Pippali / Black pepper / Clove / Cardamom / Tejpatta (supporting spices)', quantity: 'rest' }
    ],
    indications: [
      'Amlapitta (hyperacidity)',
      'Constipation',
      'Indigestion',
      'Bloating',
      'Ascites (adjunct)'
    ],
    dosage: {
      amount: '1-3 g (powder), 10-20 ml (decoction), 2-3 tablets (500 mg)',
      frequency: 'twice daily',
      duration: 'as directed'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy (unless physician approves)'],
    reference: 'Classical texts / Ayurvedic pharmacopeial summaries, PlanetAyurveda / Ask-Ayurveda synthesis',
    adultDosage: 'Powder: 1–3 g with warm water or as decoction 10–20 ml twice daily. Tablets (500 mg standardized): 2–3 tablets twice daily (per product labeling).',
    modeOfAction: 'Acts as a mild laxative and antacid.',
    generalConsiderations: 'Classical churna for digestive disorders. Avoid in pregnancy unless physician approves. Caution with strong laxative effect; avoid chronic overuse. Use under supervision if on anticoagulants or antidiabetics.',
    brands: [
      {
        name: 'Planet Ayurveda',
        products: [
          { name: 'Avipattikar Churna', price: 150, quantity: '100g' }
        ]
      }
    ]
  },
  {
    id: 'trikatu-churna',
    name: 'Trikatu Churna',
    sanskritName: 'त्रिकटु चूर्ण',
    type: 'churna',
    clinicalSystems: ['Digestive System', 'Respiratory System'],
    indicationCategories: ['Digestive Disorders', 'Respiratory Conditions'],
    traditionalCategories: ['Deepana', 'Pachana', 'Kaphahara'],
    ingredients: [
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Maricha', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Indigestion',
      'Loss of appetite',
      'Cough',
      'Cold',
      'Obesity'
    ],
    dosage: {
      amount: '1-3g',
      frequency: 'Twice daily',
      duration: 'As needed'
    },
    anupana: ['Warm water', 'Honey'],
    contraindications: ['Hyperacidity'],
    reference: 'Charaka Samhita',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Trikatu Churna', price: 60, quantity: '100g' }
        ]
      }
    ]
  },
  {
    id: 'triphala-churna-commercial',
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
  }
];
