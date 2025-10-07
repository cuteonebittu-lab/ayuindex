import { Formulation } from '../../types/ayurveda.ts';

export const vatis: Formulation[] = [
  {
    id: 'triphala-guggulu',
    name: 'Triphala Guggulu',
    sanskritName: 'त्रिफला गुग्गुलु',
    type: 'vati',
    clinicalSystems: ['Musculoskeletal System', 'Integumentary System'],
    indicationCategories: ['Metabolic Disorders', 'Musculoskeletal Issues', 'Skin Conditions'],
    traditionalCategories: ['Kaphahara', 'Shothahara'],
    ingredients: [
      { herb: 'Triphala', quantity: '3 parts' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Pippali', quantity: '1 part' }
    ],
    indications: [
      'Obesity',
      'High cholesterol',
      'Arthritis',
      'Joint pain',
      'Skin disorders'
    ],
    dosage: {
      amount: '500mg-1g',
      frequency: 'Thrice daily',
      duration: '2-3 months',
      form: {
        tablet: '500mg-1g'
      }
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    preparation: 'Herbal tablets with Triphala and Guggulu',
    reference: 'Sharangadhara Samhita Madhyama 7/82-83',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Triphala Guggulu', price: 150, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Triphala Guggulu', price: 160, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'khadiradi-vati',
    name: 'Khadiradi Vati',
    sanskritName: 'खदिरादि वटी',
    type: 'vati',
    clinicalSystems: ['Respiratory System'],
    indicationCategories: ['Respiratory Conditions'],
    traditionalCategories: ['Chakshushya', 'Shothahara'],
    ingredients: [
      { herb: 'Khadira', quantity: '1 part', part: 'heartwood' },
      { herb: 'Trikatu', quantity: '1 part' },
      { herb: 'Honey', quantity: 'As needed' }
    ],
    indications: [
      'Cough',
      'Bronchitis',
      'Throat infections',
      'Hoarseness of voice'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: 'Thrice daily',
      duration: '7-14 days',
      form: {
        tablet: '250-500mg'
      }
    },
    anupana: ['Warm water'],
    contraindications: ['Pitta disorders'],
    preparation: 'Herbal tablets for throat and respiratory conditions',
    reference: 'Sharangadhara Samhita Madhyama 7/22-24',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Khadiradi Vati', price: 80, quantity: '80 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Khadiradi Vati', price: 90, quantity: '80 tablets' }
        ]
      }
    ]
  },
  {
    id: 'arogyavardhini-vati',
    name: 'Arogyavardhini Vati',
    sanskritName: 'आरोग्यवर्धिनी वटी',
    type: 'vati',
    clinicalSystems: ['Digestive System', 'Integumentary System'],
    indicationCategories: ['Metabolic Disorders', 'Digestive Disorders', 'Skin Conditions'],
    traditionalCategories: ['Deepana', 'Pachana', 'Rasayana'],
    ingredients: [
      { herb: 'Kutki', quantity: '1 part', part: 'root' },
      { herb: 'Triphala', quantity: '1 part', part: 'fruit' },
      { herb: 'Tamra Bhasma', quantity: '1/16 part' },
      { herb: 'Abhrak Bhasma', quantity: '1/16 part' }
    ],
    indications: [
      'Liver disorders',
      'Skin diseases',
      'Metabolic disorders',
      'Obesity',
      'Diabetes'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: 'Twice daily',
      duration: '1-3 months',
      form: {
        tablet: '250-500mg'
      }
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Lactation'],
    preparation: 'Herbo-mineral tablets for liver and metabolic health',
    reference: 'Rasaratnasamucchaya 20/87-92',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Arogyavardhini Vati', price: 110, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Arogyavardhini Vati', price: 120, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'chandraprabha-vati',
    name: 'Chandraprabha Vati',
    sanskritName: 'चन्द्रप्रभा वटी',
    type: 'vati',
    clinicalSystems: ['Urinary System', 'Endocrine System'],
    indicationCategories: ['Urinary Disorders', 'Metabolic Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
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
      duration: 'As prescribed',
      form: {
        tablet: '2 tablets'
      }
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    preparation: 'Herbo-mineral tablets for urinary and reproductive health',
    reference: 'Sharangadhara Samhita',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Chandraprabha Vati', price: 90, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Chandraprabha Vati', price: 100, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'kamadugha-rasa',
    name: 'Kamadugha Rasa',
    sanskritName: 'कामदुघा रस',
    type: 'vati',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Mukta Bhasma', quantity: '1 part' },
      { herb: 'Pravala Bhasma', quantity: '1 part' },
      { herb: 'Shankha Bhasma', quantity: '1 part' },
      { herb: 'Shukti Bhasma', quantity: '1 part' }
    ],
    indications: [
      'Hyperacidity',
      'Heartburn',
      'Gastritis',
      'Ulcers',
      'Indigestion'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: '2-3 times daily',
      duration: 'As needed',
      form: {
        tablet: '250-500mg'
      }
    },
    anupana: ['Cold water', 'Honey'],
    contraindications: ['Low gastric acid'],
    preparation: 'Mineral-based tablets for digestive health',
    reference: 'Rasendra Sara Sangraha',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Kamadugha Rasa', price: 220, quantity: '30 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Kamadugha Rasa', price: 230, quantity: '30 tablets' }
        ]
      }
    ]
  },
  {
    id: 'punarnavadi-mandoor',
    name: 'Punarnavadi Mandoor',
    sanskritName: 'पुनर्नवादि मंडूर',
    type: 'vati',
    clinicalSystems: ['Urinary System', 'Digestive System', 'Hematopoietic System'],
    indicationCategories: ['Urinary Disorders', 'Metabolic Disorders'],
    traditionalCategories: ['Shothahara', 'Deepana', 'Tridoshahara'],
    ingredients: [
      { herb: 'Punarnava', quantity: '48 g', part: 'powder' },
      { herb: 'Shunthi', quantity: '48 g', part: 'powder' },
      { herb: 'Pippali', quantity: '48 g', part: 'powder' },
      { herb: 'Maricha', quantity: '48 g', part: 'powder' },
      { herb: 'Amalaki', quantity: '48 g', part: 'powder' },
      { herb: 'Haritaki', quantity: '48 g', part: 'powder' },
      { herb: 'Chavya', quantity: '48 g', part: 'powder' },
      { herb: 'Haridra', quantity: '48 g', part: 'powder' },
      { herb: 'Daru Haridra', quantity: '48 g', part: 'powder' },
      { herb: 'Kushta', quantity: '48 g', part: 'powder' },
      { herb: 'Danti', quantity: '48 g', part: 'powder' },
      { herb: 'Kutaja Phala', quantity: '48 g', part: 'powder' },
      { herb: 'Musta', quantity: '48 g', part: 'powder' },
      { herb: 'Vidanga', quantity: '48 g', part: 'powder' },
      { herb: 'Chitrak Moola', quantity: '48 g', part: 'powder' },
      { herb: 'Mandoora Bhasma', quantity: '1.92 kg' },
      { herb: 'Cow Urine', quantity: '6.144 litre' }
    ],
    indications: [
      'Anaemia',
      'Splenomegaly',
      'Haemorrhoids',
      'Malabsorption syndrome',
      'Chronic fever',
      'Inflammatory conditions',
      'Infective skin diseases',
      'Helminthiasis'
    ],
    dosage: {
      amount: '500 mg- 1 g',
      frequency: 'Once or twice daily before or after food',
      duration: 'Maximum up to 4-6 months',
      form: {
        tablet: '500 mg- 1 g'
      }
    },
    anupana: ['Water', 'Buttermilk'],
    contraindications: ['Hemosiderosis'],
    preparation: 'All the ingredients are made into fine paste with cow urine and tablets are prepared.',
    reference: 'Charak Samhita Chikitsa Sthana 16/93-95, Bhaishajya Ratnavali',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Punarnavadi Mandoor', price: 180, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Shree Dootpapeshwar Ltd.',
        products: [
          { name: 'S.D.P. Punarnavadi Mandoor', price: 200, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Zandu',
        products: [
          { name: 'Zandu Punarnavadi Mandoor', price: 190, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Punarnavadi Mandoor', price: 195, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Arya Vaidya Pharmacy',
        products: [
          { name: 'AVP Punarnavadi Mandooram', price: 210, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'bgr-34',
    name: 'BGR-34',
    sanskritName: 'बीजीआर-३४',
    type: 'vati',
    clinicalSystems: ['Endocrine System'],
    indicationCategories: ['Metabolic Disorders'],
    traditionalCategories: [],
    ingredients: [
      { herb: 'Daruharidra (Berberis aristata)', quantity: 'Proprietary' },
      { herb: 'Giloy (Tinospora cordifolia)', quantity: 'Proprietary' },
      { herb: 'Vijaysar (Pterocarpus marsupium)', quantity: 'Proprietary' },
      { herb: 'Gudmar (Gymnema sylvestre)', quantity: 'Proprietary' },
      { herb: 'Manjeestha (Rubia cordifolia)', quantity: 'Proprietary' },
      { herb: 'Fenugreek (Trigonella foenum-graecum)', quantity: 'Proprietary' }
    ],
    indications: [
      'To support glycemic control',
      'Management of diabetes mellitus (adjunct)'
    ],
    dosage: {
      amount: '1 tablet',
      frequency: 'Twice daily',
      duration: 'As per clinician',
      form: {
        tablet: '1 tablet'
      }
    },
    anupana: ['Water'],
    contraindications: [],
    preparation: 'Tablet / capsule form (proprietary extraction, standardisation)',
    reference: 'Wikipedia',
    brands: [
      {
        name: 'AIMIL Pharmaceuticals',
        products: [
          { name: 'BGR-34', price: 500, quantity: '100 tablets' }
        ]
      }
    ]
  },
  {
    id: 'chandraprabha-vati-new',
    name: 'Chandraprabha Vati',
    sanskritName: 'चन्द्रप्रभा वटी',
    type: 'vati',
    clinicalSystems: ['Urinary System', 'Reproductive System'],
    indicationCategories: ['Urinary Disorders', "Women's Health", "Men's Health"],
    traditionalCategories: ['Deepana', 'Pachana', 'Tridoshahara'],
    ingredients: [
      { herb: 'Multiple mineral + herbal components (Loha, Rasa dravyas, etc.)', quantity: 'Proprietary' }
    ],
    indications: [
      'Urinary & genitourinary tract disorders',
      'Reproductive issues (variant dependent)'
    ],
    dosage: {
      amount: 'As per physician',
      frequency: 'As directed',
      duration: 'from 60 tablet packs'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    reference: 'SudhaTatva',
    adultDosage: 'Usually from 60 tablets pack; dosage depends on condition and physician\'s instructions',
    modeOfAction: 'Acts on urinary and reproductive systems.',
    generalConsiderations: 'Classical mineral-herbal formulation with multiple variants.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Chandraprabha Vati', price: 95, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Chandraprabha Vati', price: 100, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'laghusutshekhar-vati',
    name: 'Laghusutshekhar Vati',
    sanskritName: 'लघुसूतशेखर वटी',
    type: 'vati',
    clinicalSystems: ['Digestive System', 'Nervous System'],
    indicationCategories: ['Digestive Disorders', 'Neurological Disorders'],
    traditionalCategories: ['Pittahara', 'Vedanasthapana'],
    ingredients: [
      { herb: 'Purified Swarna Gairika (cinnabar/gairika processed)', quantity: '1 part' },
      { herb: 'Sunthi (ginger)', quantity: '1 part' }
    ],
    indications: [
      'Acidity',
      'Gastritis',
      'Headache',
      'Migraine'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'twice a day',
      duration: 'before or after food or as directed by physician'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    reference: 'Classical Ayurvedic Text',
    adultDosage: '1-2 tablets, twice a day before or after food or as directed by physician',
    modeOfAction: 'Relieves acidity and helps in gastritis.',
    generalConsiderations: 'Useful for digestive and headache disorders.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Laghusutshekhar Vati', price: 85, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'samshamani-vati',
    name: 'Samshamani Vati',
    sanskritName: 'संशमनी वटी',
    type: 'vati',
    clinicalSystems: ['Immune System', 'Digestive System'],
    indicationCategories: ['Fever & Infections', 'Digestive Disorders'],
    traditionalCategories: ['Jwaraghna', 'Pittahara'],
    ingredients: [
      { herb: 'Guduchi (Tinospora cordifolia) aqueous extract', quantity: '1 part' }
    ],
    indications: [
      'Chronic fever',
      'Viral and bacterial infections',
      'Immuno-modulation',
      'Inflammation',
      'Indigestion',
      'Pitta disorders'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'twice a day',
      duration: 'as directed'
    },
    anupana: ['Warm water'],
    contraindications: [],
    reference: 'Classical Ayurvedic Text',
    adultDosage: '1-2 tablets, twice a day or as directed',
    modeOfAction: 'Immunomodulatory and antipyretic.',
    generalConsiderations: 'Useful for fever and immune support.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Samshamani Vati', price: 90, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'praval-panchamrut-tablet',
    name: 'Praval Panchamrut Tablet',
    sanskritName: 'प्रवाल पञ्चामृत वटी',
    type: 'vati',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Pittahara', 'Deepana'],
    ingredients: [
      { herb: 'Praval Pishti', quantity: '1 part' },
      { herb: 'Shankha Bhasma', quantity: '1 part' },
      { herb: 'Shukti Bhasma', quantity: '1 part' },
      { herb: 'Kapardika Bhasma', quantity: '1 part' },
      { herb: 'Guduchi Satva', quantity: '1 part' },
      { herb: 'Godugdha (cow\'s milk)', quantity: '1 part' }
    ],
    indications: [
      'Bloating',
      'Hyperacidity',
      'Anorexia',
      'Diarrhea',
      'Indigestion'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'as directed',
      duration: 'as directed by physician'
    },
    anupana: ['Warm water'],
    contraindications: [],
    reference: 'Classical Ayurvedic Text',
    adultDosage: 'As directed by physician (common general usage would be 1-2 tablets)',
    modeOfAction: 'Classical mineral-herbal tablet for digestive issues.',
    generalConsiderations: 'Useful for various digestive disorders.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Praval Panchamrut Tablet', price: 120, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'agnitundi-vati',
    name: 'Agnitundi Vati',
    sanskritName: 'अग्नितुण्डी वटी',
    type: 'vati',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Ajamoda (Trachyspermum roxburghianum)', quantity: '1 part' },
      { herb: 'Haritaki (Terminalia chebula)', quantity: '1 part' },
      { herb: 'Amalaki (Emblica officinalis)', quantity: '1 part' },
      { herb: 'Sarjikshara (sodium bicarbonate)', quantity: '1 part' },
      { herb: 'Yava Kshara (barley alkali)', quantity: '1 part' },
      { herb: 'Vatsanabha (Aconitum ferox, purified)', quantity: '1 part' },
      { herb: 'Jeeraka (Cuminum cyminum)', quantity: '1 part' },
      { herb: 'Vibhitaki (Terminalia bellerica)', quantity: '1 part' },
      { herb: 'Purified Mercury (Sūta)', quantity: '1 part' },
      { herb: 'Gandhaka (purified Sulphur)', quantity: '1 part' },
      { herb: 'Chitraka (Plumbago zeylanica)', quantity: '1 part' },
      { herb: 'Rock salt (Saindhava)', quantity: '1 part' },
      { herb: 'Sea salt (Samudra Lavana)', quantity: '1 part' },
      { herb: 'Borax (Tankana Bhasma)', quantity: '1 part' },
      { herb: 'Sochal salt (Sauvarchala Lavana)', quantity: '1 part' },
      { herb: 'Vidanga (Embelia ribes)', quantity: '1 part' },
      { herb: 'Vishamushti (purified Strychnos nux vomica)', quantity: '1 part' },
      { herb: 'Jambira swarasa (lemon juice)', quantity: '1 part' }
    ],
    indications: [
      'Digestive stimulation (Agni)',
      'Acid dyspepsia'
    ],
    dosage: {
      amount: '½-1 tablet',
      frequency: 'twice daily',
      duration: 'morning & evening'
    },
    anupana: ['Lime juice', 'Warm water'],
    contraindications: ['Pregnancy', 'Lactation', 'Children'],
    reference: 'Nakra Ayurveda',
    adultDosage: '½ to 1 tablet (≈ 62.5 mg to 125 mg) twice a day, morning & evening',
    modeOfAction: 'Strong mineral-herbal formulation for digestive stimulation.',
    generalConsiderations: 'Potent formulation requiring strict medical supervision. Use under direct medical supervision due to potent ingredients (e.g. Aconitum etc.)',
    brands: [
      {
        name: 'Nakra Ayurveda',
        products: [
          { name: 'Agnitundi Vati', price: 150, quantity: '30 tablets' }
        ]
      }
    ]
  },
  {
    id: 'alkaloplan-capsules',
    name: 'Alkaloplan Capsules',
    sanskritName: 'अल्कालोप्लान कैप्सूल',
    type: 'vati',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Pittahara', 'Kaphahara'],
    ingredients: [
      { herb: 'Sajjikshar (soda bi carbonate)', quantity: '300 mg' },
      { herb: 'Mukta Shukti (purified pearl / oyster shell)', quantity: '100 mg' },
      { herb: 'Giloy Satva (Tinospora cordifolia extract)', quantity: '100 mg' }
    ],
    indications: [
      'Acidity',
      'Gastritis',
      'Abdominal colic',
      'Symptoms of digestive discomfort',
      'Pitta / kapha balance'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'as labeled',
      duration: 'as directed'
    },
    anupana: ['Warm water'],
    contraindications: [],
    reference: 'Planet Ayurveda',
    adultDosage: 'As labeled (manufacturer instructions; commonly 1-2 tablets)',
    modeOfAction: 'Alkalinizing and balancing for digestive discomfort.',
    generalConsiderations: 'Proprietary mineral-herbal capsule.',
    brands: [
      {
        name: 'Planet Ayurveda',
        products: [
          { name: 'Alkaloplan Capsules', price: 180, quantity: '60 capsules' }
        ]
      }
    ]
  },
  {
    id: 'boswellia-curcumin',
    name: 'Boswellia Curcumin',
    sanskritName: 'बोसवेलिया कर्क्यूमिन',
    type: 'vati',
    clinicalSystems: ['Musculoskeletal System'],
    indicationCategories: ['Musculoskeletal Issues'],
    traditionalCategories: ['Shothahara', 'Vedanasthapana'],
    ingredients: [
      { herb: 'Shallaki (Boswellia serrata)', quantity: '1 part' },
      { herb: 'Curcumin (Curcuma longa)', quantity: '1 part' }
    ],
    indications: [
      'Anti-inflammatory',
      'Helpful in osteoarthritis',
      'Rheumatoid arthritis',
      'Joint pain',
      'Reducing stiffness'
    ],
    dosage: {
      amount: '1 capsule',
      frequency: 'twice a day',
      duration: 'after a meal'
    },
    anupana: ['Plain water'],
    contraindications: [],
    reference: 'Planet Ayurveda',
    adultDosage: '1 capsule twice a day after a meal with plain water',
    modeOfAction: 'Anti-inflammatory and analgesic properties.',
    generalConsiderations: 'Proprietary herbal capsule for joint health.',
    brands: [
      {
        name: 'Planet Ayurveda',
        products: [
          { name: 'Boswellia Curcumin', price: 250, quantity: '60 capsules' }
        ]
      }
    ]
  },
  {
    id: 'panchkola-capsules',
    name: 'Panchkola Capsules',
    sanskritName: 'पंचकोल कैप्सूल',
    type: 'vati',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders', 'Metabolic Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Pippali (Piper longum fruit)', quantity: '100 mg' },
      { herb: 'Pippali root (Piper longum root)', quantity: '100 mg' },
      { herb: 'Chavya (Piper retrofractum)', quantity: '100 mg' },
      { herb: 'Chitraka (Plumbago zeylanica)', quantity: '100 mg' },
      { herb: 'Sonth / Shunthi (Zingiber officinale)', quantity: '100 mg' }
    ],
    indications: [
      'Supports digestion',
      'Detoxification',
      'Metabolic balance',
      'Stimulates liver/pancreas/intestines to secrete digestive juices',
      'Used in digestive, detox / metabolic disorders'
    ],
    dosage: {
      amount: '1-2 capsules',
      frequency: 'twice daily',
      duration: 'half an hour after meals'
    },
    anupana: ['Plain water'],
    contraindications: [],
    reference: 'planetayurveda.eu',
    adultDosage: '1-2 capsules twice daily, half an hour after meals, with plain water',
    modeOfAction: 'Supports digestive and metabolic functions.',
    generalConsiderations: 'Proprietary extract capsule.',
    brands: [
      {
        name: 'Planet Ayurveda',
        products: [
          { name: 'Panchkola Capsules', price: 200, quantity: '60 capsules' }
        ]
      }
    ]
  },
  {
    id: 'sanjivani-vati',
    name: 'Sanjivani Vati',
    sanskritName: 'संजीवनी वटी',
    type: 'vati',
    clinicalSystems: ['Digestive System', 'Respiratory System'],
    indicationCategories: ['Digestive Disorders', 'Fever & Infections'],
    traditionalCategories: ['Deepana', 'Pachana', 'Jwaraghna'],
    ingredients: [
      { herb: 'Vidanga', quantity: '1 part', part: 'fruit' },
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Vacha', quantity: '1 part', part: 'rhizome' },
      { herb: 'Guduchi', quantity: '1 part', part: 'stem' },
      { herb: 'Shuddha Bhallataka', quantity: '1 part', part: 'fruit' },
      { herb: 'Shuddha Vatsanabha', quantity: '1 part', part: 'root' },
      { herb: 'Gomutra', quantity: 'Q.S.' }
    ],
    indications: [
      'Indigestion',
      'Fever',
      'Diarrhea',
      'Gastroenteritis'
    ],
    dosage: {
      amount: '125-250mg',
      frequency: 'Twice daily',
      duration: 'As needed',
      form: {
        tablet: '125-250mg'
      }
    },
    anupana: ['Warm water', 'Ginger juice'],
    contraindications: ['Pregnancy', 'High pitta'],
    preparation: 'Herbal tablets for digestive and febrile conditions',
    reference: 'Sharangadhara Samhita',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Sanjivani Vati', price: 100, quantity: '40 tablets' }
        ]
      }
    ]
  },
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
  }
];
