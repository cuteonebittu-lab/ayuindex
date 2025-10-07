import { Formulation } from '../../types/ayurveda.ts';

export const arishtas: Formulation[] = [
  {
    id: 'saraswatarishta',
    name: 'Saraswatarishta',
    sanskritName: 'सारस्वतारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Nervous System'],
    indicationCategories: ['Mental Health'],
    traditionalCategories: ['Medhya', 'Rasayana'],
    ingredients: [
      { herb: 'Brahmi', quantity: '4.8 kg', part: 'whole plant' },
      { herb: 'Vacha', quantity: '960 g', part: 'rhizome' },
      { herb: 'Shankhapushpi', quantity: '960 g', part: 'whole plant' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' }
    ],
    indications: [
      'Memory enhancement',
      'Speech disorders',
      'Mental fatigue',
      'Concentration issues',
      'Learning disabilities'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: '2-3 months',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Alcoholism'],
    preparation: 'Fermented decoction with herbs and jaggery',
    reference: 'Bhaishajya Ratnavali 73/54-60',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Saraswatarishta', price: 200, quantity: '450ml' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Saraswatarishta', price: 210, quantity: '450ml' }
        ]
      }
    ]
  },
  {
    id: 'kutajarishta',
    name: 'Kutajarishta',
    sanskritName: 'कुटजारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Kutaja', quantity: '4.8 kg', part: 'bark' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' },
      { herb: 'Musta', quantity: '48 g', part: 'rhizome' },
      { herb: 'Jaggery', quantity: '4.8 kg' }
    ],
    indications: [
      'Diarrhea',
      'Dysentery',
      'IBS',
      'Intestinal infections'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: 'Until symptoms subside',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Constipation'],
    preparation: 'Fermented decoction with Kutaja bark and jaggery',
    reference: 'Bhaishajya Ratnavali 7/188-192'
  },
  {
    id: 'ashokarishta',
    name: 'Ashokarishta',
    sanskritName: 'अशोकारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Reproductive System'],
    indicationCategories: ['Women\'s Health'],
    traditionalCategories: ['Rasayana'],
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
      duration: 'As prescribed',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    preparation: 'Fermented decoction with Ashoka bark',
    reference: 'Bhaishajya Ratnavali 66/115-121'
  },
  {
    id: 'dashmularishta',
    name: 'Dashmularishta',
    sanskritName: 'दशमूलारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Respiratory System', 'Musculoskeletal System'],
    indicationCategories: ['Respiratory Conditions', 'Musculoskeletal Issues'],
    traditionalCategories: ['Vatahara', 'Shothahara'],
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
      duration: '2-3 months',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Peptic ulcer'],
    preparation: 'Fermented decoction with Dashmoola roots',
    reference: 'Bhaishajya Ratnavali'
  },
  {
    id: 'dashmularishta-modern',
    name: 'Dashmularishta',
    sanskritName: 'दशमूलारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Respiratory System', 'Musculoskeletal System', 'Nervous System'],
    indicationCategories: ['Respiratory Conditions', 'Musculoskeletal Issues', 'Neurological Disorders'],
    traditionalCategories: ['Vatahara', 'Shothahara', 'Vedanasthapana'],
    ingredients: [
      { herb: 'Dashamula (ten roots)', quantity: 'Proprietary' },
      { herb: 'Supporting herbs', quantity: 'Proprietary' },
      { herb: 'Jaggery/sugar', quantity: 'Ferment base' }
    ],
    indications: [
      'Vata disorders',
      'Analgesic',
      'Anti-inflammatory',
      'Respiratory conditions',
      'Debility'
    ],
    dosage: {
      amount: '12-24 ml',
      frequency: 'Diluted with water',
      duration: 'As prescribed',
      form: {
        liquid: '12-24 ml'
      }
    },
    anupana: ['Diluted with water'],
    contraindications: ['Pregnancy', 'Diabetes'],
    preparation: 'Fermented liquid (asava / arishta): decoction of herbs + powder + sugar / jaggery, allow fermentation, filter, bottle',
    reference: 'mohtaayurved.com, Scribd',
    brands: []
  },
  {
    id: 'khadirarishta',
    name: 'Khadirarishta',
    sanskritName: 'खदिरारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Integumentary System', 'Urinary System', 'Cardiovascular System'],
    indicationCategories: ['Skin Conditions', 'Urinary Disorders', 'Cardiovascular Conditions'],
    traditionalCategories: ['Kaphahara', 'Pittahara'],
    ingredients: [
      { herb: 'Khadira (Acacia catechu)', quantity: 'Principal herb' },
      { herb: '13 other herbs (detailed list not fully given)', quantity: 'Proprietary' }
    ],
    indications: [
      'Skin ailments (Kushthas)',
      'Skin lesions with Vata–Kapha predominance',
      'Urinary calculi',
      'Flatulence',
      'Cardiac tonic'
    ],
    dosage: {
      amount: '3 teaspoons',
      frequency: 'twice daily',
      duration: 'as directed by Ayurvedic physician'
    },
    anupana: ['Equal amount of lukewarm water'],
    contraindications: [],
    reference: 'Always Ayurveda',
    adultDosage: '3 teaspoons twice daily with equal amount of lukewarm water',
    modeOfAction: 'Acts on skin, urinary, and cardiovascular systems.',
    generalConsiderations: 'The Asava / Arishta class is self-preserving via its alcohol content; ideal use within about one year of purchase.',
    brands: [
      {
        name: 'Planet Ayurveda',
        products: [
          { name: 'Khadirarishta', price: 250, quantity: '450ml' }
        ]
      }
    ]
  },
  {
    id: 'arvindasav',
    name: 'Arvindasav',
    sanskritName: 'अर्विन्दासव',
    type: 'arishta',
    clinicalSystems: ['Digestive System', 'Immune System'],
    indicationCategories: ['Digestive Disorders', 'General Health & Wellness'],
    traditionalCategories: ['Deepana', 'Balya'],
    ingredients: [
      { herb: 'Gambahri (Gmelina arborea)', quantity: '1 part' },
      { herb: 'Manjistha (Rubia cordifolia)', quantity: '1 part' },
      { herb: 'Anantamul (Hemidesmus indicus)', quantity: '1 part' },
      { herb: 'Jatamansi (Nardostachys jatamansi)', quantity: '1 part' },
      { herb: 'Nagarmotha (Cyperus rotundus)', quantity: '1 part' },
      { herb: 'Amalaki (Emblica officinalis)', quantity: '1 part' },
      { herb: 'Vacha (Acorus calamus)', quantity: '1 part' },
      { herb: 'Gur (jaggery)', quantity: '1 part' }
    ],
    indications: [
      'Loss of appetite',
      'General weakness',
      'Low immunity',
      'Improving digestion and metabolism'
    ],
    dosage: {
      amount: '2 teaspoons',
      frequency: 'twice daily',
      duration: 'after a meal'
    },
    anupana: ['Equal amount of water'],
    contraindications: [],
    reference: 'Always Ayurveda',
    adultDosage: '2 teaspoons twice daily after a meal with equal amount of water',
    modeOfAction: 'Supports digestion and immunity.',
    generalConsiderations: 'Classical Asava/Arishta formulation.',
    brands: [
      {
        name: 'Planet Ayurveda',
        products: [
          { name: 'Arvindasav', price: 220, quantity: '450ml' }
        ]
      }
    ]
  },
  {
    id: 'kumaryasava',
    name: 'Kumaryasava',
    sanskritName: 'कुमार्यासव',
    type: 'arishta',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders', 'General Health & Wellness'],
    traditionalCategories: ['Deepana', 'Pachana', 'Rasayana'],
    ingredients: [
      { herb: 'Aloe (Kumari) juice/pulp (Aloe vera)', quantity: '200 g' },
      { herb: 'Supporting herbs (Manjistha, Nagarmotha, etc.)', quantity: 'various' },
      { herb: 'Jaggery (gur) for fermentation medium', quantity: '250 g' }
    ],
    indications: [
      'Liver & digestive complaints',
      'Loss of appetite',
      'General weakness',
      'Immune support (as tonic)'
    ],
    dosage: {
      amount: '10 ml',
      frequency: 'twice daily',
      duration: 'after meals'
    },
    anupana: ['Water'],
    contraindications: ['Excess alcohol-containing formulations if contraindicated'],
    generalConsiderations: 'Use per physician in pregnancy/lactation.',
    preparation: 'Decoction of herbs is prepared and cooled; mixed with aloe juice and jaggery (as sugar source) and allowed to ferment naturally for defined period (7–21 days) until desired alcoholic strength; filter and bottle.',
    reference: 'Ayurvedic Formulary citations (PlanetAyurveda summary), 1mg / product monographs',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Kumaryasava', price: 180, quantity: '450ml' }
        ]
      }
    ]
  },
  {
    id: 'draksharishta',
    name: 'Draksharishta',
    sanskritName: 'द्राक्षारिष्ट',
    type: 'arishta',
    clinicalSystems: ['Digestive System', 'Respiratory System'],
    indicationCategories: ['Digestive Disorders', 'Respiratory Conditions'],
    traditionalCategories: ['Deepana', 'Pachana', 'Balya'],
    ingredients: [
      { herb: 'Draksha (Grapes)', quantity: '2.4 kg', part: 'fruit' },
      { herb: 'Dhataki', quantity: '384 g', part: 'flower' },
      { herb: 'Jaggery', quantity: '4.8 kg' }
    ],
    indications: [
      'Indigestion',
      'Loss of appetite',
      'Cough',
      'Cold',
      'General weakness'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: 'As needed',
      form: {
        liquid: '15-30ml'
      }
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes'],
    preparation: 'Fermented decoction with grapes and jaggery',
    reference: 'Bhaishajya Ratnavali',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Draksharishta', price: 180, quantity: '450ml' }
        ]
      }
    ]
  }
];
