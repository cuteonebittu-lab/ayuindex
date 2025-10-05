import { Formulation } from '../../types/ayurveda.ts';

export const guggulus: Formulation[] = [
  {
    id: 'yogaraja-guggulu',
    name: 'Yogaraja Guggulu',
    sanskritName: 'योगराज गुग्गुलु',
    type: 'guggulu',
    clinicalSystems: ['Musculoskeletal System', 'Nervous System', 'Digestive System'],
    indicationCategories: ['Musculoskeletal Issues', 'Neurological Disorders', 'Digestive Disorders'],
    traditionalCategories: ['Vatahara', 'Shothahara', 'Vedanasthapana', 'Am Pachak'],
    ingredients: [
      { herb: 'Shuddha Guggulu (Commiphora wightii)', quantity: '1 part' },
      { herb: 'Triphala (Amalaki, Haritaki, Bibhitaki)', quantity: '1 part' },
      { herb: 'Trikatu (Shunthi, Maricha, Pippali)', quantity: '1 part' },
      { herb: 'Chitrakamoola (Plumbago zeylanica)', quantity: '1 part' }
    ],
    indications: [
      'Amavata (Rheumatoid Arthritis)',
      'Sandhivata (Osteoarthritis)',
      'Gridhrasi (Sciatica)',
      'Vatarakta (Gout)',
      'Kroshtukashirsha (Synovitis of the knee joint)',
      'Gulma (Abdominal tumor)',
      'Arsha (Hemorrhoids)'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'twice or thrice a day',
      duration: 'as directed by the physician'
    },
    anupana: ['Warm water', 'Dashamularishta'],
    contraindications: [
      'Garbhini (Pregnancy)',
      'Raktapitta (Bleeding disorders)'
    ],
    reference: 'Bhaishajya Ratnavali, Amavata Adhikara 29/115-121',
    
    adultDosage: 'Oral: 1-2 tablets (500mg - 1g) twice or thrice daily, after meals.',
    paediatricDosage: 'Oral: 1 tablet once or twice daily, after meals.',
    doseAdjustment: {
      hepatic: 'Use with caution in patients with liver disorders.',
      renal: 'Use with caution in patients with kidney disorders.'
    },
    pregnancyLactation: 'Contraindicated during pregnancy. Use with caution during lactation.',
    modeOfAction: 'Acts as a potent anti-inflammatory and analgesic. Guggulu helps in reducing joint inflammation and pain. Triphala and other ingredients help in digesting and eliminating Ama (metabolic toxins), which is considered a primary cause of joint diseases in Ayurveda.',
    adverseDrugReactions: 'Generally well-tolerated. May cause mild gastric irritation or skin rash in some individuals.',
    interactions: 'May interact with anti-platelet and anti-coagulant drugs. Monitor patients on thyroid medications as Guggulu can influence thyroid function.',
    contraindicationsWarnings: 'Contraindicated in pregnancy and bleeding disorders. Avoid in patients with known allergy to Guggulu. Use cautiously in hyperthyroidism.',
    generalConsiderations: 'A classical formulation for managing various types of joint pain and inflammatory conditions. Diet should be light and easily digestible. Avoid sour, heavy, and fried foods.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Yograj Guggulu', price: 150, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Yograj Guggulu', price: 160, quantity: '80 tablets' }
        ]
      },
      {
        name: 'Zandu',
        products: [
          { name: 'Zandu Yograj Guggulu', price: 145, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'gokshuradi-guggulu',
    name: 'Gokshuradi Guggul',
    sanskritName: 'गोक्षुरादि गुग्गुलु',
    type: 'guggulu',
    clinicalSystems: ['Urinary System', 'Reproductive System', 'Musculoskeletal System'],
    indicationCategories: ['Urinary Disorders', "Women's Health", 'Musculoskeletal Issues'],
    traditionalCategories: ['Vatahara', 'Shothahara', 'Tridoshahara'],
    ingredients: [
      { herb: 'Gokshura (Tribulus terrestris)', quantity: '1 part' },
      { herb: 'Triphala (Haritaki, Bibhitaki, Amalaki)', quantity: '1 part' },
      { herb: 'Guggulu (Commiphora mukul)', quantity: '1 part' },
      { herb: 'Trikatu (Long pepper, Black pepper, Ginger)', quantity: '1 part' },
      { herb: 'Musta (Cyperus rotundus)', quantity: '1 part' }
    ],
    indications: [
      'Kidney and urinary disorders',
      'Renal calculi',
      'Dysuria',
      'Gout',
      'Menstrual problems',
      'PCOS',
      'Urinary tract infection'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'twice daily',
      duration: 'as directed by physician'
    },
    anupana: ['Lukewarm water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    reference: 'SudhaTatva',
    adultDosage: '1-2 tablets, two times a day with lukewarm water, one hour after meals',
    pregnancyLactation: 'Contraindicated during pregnancy. Use with caution during lactation.',
    modeOfAction: 'Acts as a diuretic and anti-inflammatory. Gokshura helps in urinary system disorders, while Guggulu reduces inflammation and pain.',
    generalConsiderations: 'Useful for urinary and reproductive system disorders. Should be taken under medical supervision.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Gokshuradi Guggulu', price: 140, quantity: '60 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Gokshuradi Guggulu', price: 135, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'lakshadi-guggulu',
    name: 'Lakshadi Guggul',
    sanskritName: 'लाक्षादि गुग्गुलु',
    type: 'guggulu',
    clinicalSystems: ['Musculoskeletal System'],
    indicationCategories: ['Musculoskeletal Issues'],
    traditionalCategories: ['Balya', 'Shothahara', 'Vedanasthapana'],
    ingredients: [
      { herb: 'Laksha (lac)', quantity: '1 part' },
      { herb: 'Asthishrunkhala', quantity: '1 part' },
      { herb: 'Arjuna', quantity: '1 part' },
      { herb: 'Ashwagandha', quantity: '1 part' },
      { herb: 'Nagabala', quantity: '1 part' },
      { herb: 'Purified Guggulu', quantity: '1 part' }
    ],
    indications: [
      'Bone fractures',
      'Enhances healing of fracture',
      'Osteoporosis',
      'Inflammatory diseases of bones & joints'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'daily',
      duration: 'as directed by physician'
    },
    anupana: ['Plain water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    reference: 'Classical Ayurvedic Text',
    adultDosage: 'One or two tablets daily after meals with plain water',
    pregnancyLactation: 'Contraindicated during pregnancy.',
    modeOfAction: 'Promotes bone healing and reduces inflammation. Laksha and other ingredients help in bone tissue regeneration.',
    generalConsiderations: 'Useful for bone-related disorders and fracture healing.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Lakshadi Guggulu', price: 155, quantity: '60 tablets' }
        ]
      }
    ]
  },
  {
    id: 'yograj-guggulu',
    name: 'Yograj Guggul',
    sanskritName: 'योगराज गुग्गुलु',
    type: 'guggulu',
    clinicalSystems: ['Musculoskeletal System', 'Nervous System', 'Integumentary System'],
    indicationCategories: ['Musculoskeletal Issues', 'Neurological Disorders', 'Skin Conditions'],
    traditionalCategories: ['Vatahara', 'Shothahara', 'Am Pachak'],
    ingredients: [
      { herb: 'Ajamoda', quantity: '1 part' },
      { herb: 'Amalaki', quantity: '1 part' },
      { herb: 'Chavya', quantity: '1 part' },
      { herb: 'Chitraka', quantity: '1 part' },
      { herb: 'Dhanyaka (coriander)', quantity: '1 part' },
      { herb: 'Ela', quantity: '1 part' },
      { herb: 'Gokshura', quantity: '1 part' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Haritaki', quantity: '1 part' },
      { herb: 'Jeeraka', quantity: '1 part' },
      { herb: 'Karavi', quantity: '1 part' },
      { herb: 'Kushta', quantity: '1 part' },
      { herb: 'Marich', quantity: '1 part' },
      { herb: 'Musta', quantity: '1 part' },
      { herb: 'Patra', quantity: '1 part' },
      { herb: 'Pippali', quantity: '1 part' },
      { herb: 'Pippalimoola', quantity: '1 part' },
      { herb: 'Rasna', quantity: '1 part' },
      { herb: 'Saindhava Lavana (rock salt)', quantity: '1 part' },
      { herb: 'Shunthi', quantity: '1 part' },
      { herb: 'Suradaru', quantity: '1 part' },
      { herb: 'Taleesapatra', quantity: '1 part' },
      { herb: 'Twak (cinnamon bark)', quantity: '1 part' },
      { herb: 'Usheera', quantity: '1 part' },
      { herb: 'Bibhitaki', quantity: '1 part' },
      { herb: 'Yavagraja', quantity: '1 part' },
      { herb: 'Yavani', quantity: '1 part' }
    ],
    indications: [
      'Various arthritis',
      'Rheumatoid arthritis',
      'Gout',
      'Infected wounds',
      'Osteoarthritis',
      'Neurological disorders like paralysis and facial palsy'
    ],
    dosage: {
      amount: '2 tablets',
      frequency: 'twice daily',
      duration: 'as advised'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    reference: 'Classical Ayurvedic Text',
    adultDosage: '2 tablets, twice a day or as advised',
    pregnancyLactation: 'Contraindicated during pregnancy.',
    modeOfAction: 'Comprehensive polyherbal formulation for musculoskeletal and neurological disorders.',
    generalConsiderations: 'One of the most comprehensive Guggulu formulations for various conditions.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Yograj Guggulu', price: 160, quantity: '80 tablets' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Yograj Guggulu', price: 165, quantity: '80 tablets' }
        ]
      }
    ]
  }
];
