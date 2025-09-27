import { Formulation } from '../../types/ayurveda';

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
  }
];
