import { Formulation } from '../types/ayurveda';

export const additionalFormulations: Formulation[] = [
  {
    id: 'brahmi-ghrita',
    name: 'Brahmi Ghrita',
    sanskritName: 'ब्राह्मी घृत',
    type: 'ghrita',
    category: 'Mental Health',
    ingredients: [
      { herb: 'Brahmi', quantity: '4.8 kg', part: 'whole plant' },
      { herb: 'Vacha', quantity: '960 g', part: 'rhizome' },
      { herb: 'Shankhapushpi', quantity: '960 g', part: 'whole plant' },
      { herb: 'Cow Ghee', quantity: '4.8 kg' }
    ],
    indications: [
      'Memory enhancement',
      'Mental disorders',
      'Anxiety',
      'Depression',
      'Insomnia',
      'ADHD',
      'Epilepsy'
    ],
    dosage: {
      amount: '5-10g',
      frequency: 'Twice daily',
      duration: '3-6 months'
    },
    anupana: ['Warm milk', 'Warm water'],
    contraindications: ['High cholesterol', 'Obesity'],
    categories: ['Mental Health', 'Nervous System']
  },
  {
    id: 'triphala-guggulu',
    name: 'Triphala Guggulu',
    sanskritName: 'त्रिफला गुग्गुलु',
    type: 'vati',
    category: 'Metabolic Disorders',
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
      duration: '2-3 months'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    categories: ['Metabolic Disorders', 'Musculoskeletal']
  },
  {
    id: 'saraswatarishta',
    name: 'Saraswatarishta',
    sanskritName: 'सारस्वतारिष्ट',
    type: 'arishta',
    category: 'Mental Health',
    ingredients: [
      { herb: 'Brahmi', quantity: '2.4 kg', part: 'whole plant' },
      { herb: 'Vacha', quantity: '1.2 kg', part: 'rhizome' },
      { herb: 'Ashwagandha', quantity: '1.2 kg', part: 'root' },
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
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Alcoholism'],
    categories: ['Mental Health', 'Nervous System']
  },
  {
    id: 'pushyanuga-churna',
    name: 'Pushyanuga Churna',
    sanskritName: 'पुष्यानुग चूर्ण',
    type: 'churna',
    category: 'Women\'s Health',
    ingredients: [
      { herb: 'Lodhra', quantity: '1 part', part: 'bark' },
      { herb: 'Mocharasa', quantity: '1 part', part: 'resin' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Nagakesara', quantity: '1 part', part: 'flower' }
    ],
    indications: [
      'Menorrhagia',
      'Leucorrhea',
      'PCOS',
      'Uterine bleeding',
      'Vaginal infections'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily',
      duration: 'As needed'
    },
    anupana: ['Rice water', 'Honey'],
    contraindications: ['Pregnancy'],
    categories: ['Women\'s Health']
  },
  {
    id: 'khadiradi-vati',
    name: 'Khadiradi Vati',
    sanskritName: 'खदिरादि वटी',
    type: 'vati',
    category: 'Respiratory System',
    ingredients: [
      { herb: 'Khadira', quantity: '1 part', part: 'heartwood' },
      { herb: 'Yastimadhu', quantity: '1 part', part: 'root' },
      { herb: 'Ela', quantity: '1 part', part: 'seed' }
    ],
    indications: [
      'Cough',
      'Throat infections',
      'Hoarseness',
      'Bronchitis',
      'Oral ulcers'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: '2-3 times daily',
      duration: 'Until symptoms subside'
    },
    anupana: ['Water', 'Honey'],
    contraindications: ['Peptic ulcer'],
    categories: ['Respiratory System', 'Oral Health']
  },
  {
    id: 'arogyavardhini-vati',
    name: 'Arogyavardhini Vati',
    sanskritName: 'आरोग्यवर्धिनी वटी',
    type: 'vati',
    category: 'Liver',
    ingredients: [
      { herb: 'Kutki', quantity: '1 part', part: 'root' },
      { herb: 'Triphala', quantity: '1 part', part: 'fruit' },
      { herb: 'Tamra Bhasma', quantity: '1/16 part' },
      { herb: 'Abhrak Bhasma', quantity: '1/16 part' }
    ],
    indications: [
      'Liver disorders',
      'Skin diseases',
      'Jaundice',
      'Digestive disorders',
      'Obesity'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: 'Twice daily',
      duration: '2-3 months'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Severe liver disease'],
    categories: ['Liver', 'Skin Health', 'Metabolic Disorders']
  },
  {
    id: 'hingwastaka-churna',
    name: 'Hingwastaka Churna',
    sanskritName: 'हिंग्वष्टक चूर्ण',
    type: 'churna',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Hing', quantity: '1 part' },
      { herb: 'Sonth', quantity: '1 part', part: 'rhizome' },
      { herb: 'Ajwain', quantity: '1 part', part: 'seed' },
      { herb: 'Black Pepper', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Indigestion',
      'Bloating',
      'Gas',
      'Abdominal pain',
      'Loss of appetite'
    ],
    dosage: {
      amount: '1-3g',
      frequency: 'With meals',
      duration: 'As needed'
    },
    anupana: ['Warm water', 'Buttermilk'],
    contraindications: ['Hyperacidity', 'Bleeding disorders'],
    categories: ['Digestive System']
  },
  {
    id: 'yogaraja-guggulu',
    name: 'Yogaraja Guggulu',
    sanskritName: 'योगराज गुग्गुलु',
    type: 'vati',
    category: 'Musculoskeletal',
    ingredients: [
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Triphala', quantity: '1 part' },
      { herb: 'Trikatu', quantity: '1 part' }
    ],
    indications: [
      'Arthritis',
      'Joint pain',
      'Sciatica',
      'Obesity',
      'Skin diseases'
    ],
    dosage: {
      amount: '500mg-1g',
      frequency: 'Thrice daily',
      duration: '2-3 months'
    },
    anupana: ['Warm water', 'Ginger juice'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    categories: ['Musculoskeletal', 'Metabolic Disorders']
  },
  {
    id: 'saptamrita-lauha',
    name: 'Saptamrita Lauha',
    sanskritName: 'सप्तामृत लौह',
    type: 'churna',
    category: 'Blood',
    ingredients: [
      { herb: 'Lauha Bhasma', quantity: '1 part' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Yashtimadhu', quantity: '1 part', part: 'root' }
    ],
    indications: [
      'Anemia',
      'Weakness',
      'Fatigue',
      'Poor immunity',
      'Menstrual disorders'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: 'Twice daily',
      duration: '3-6 months'
    },
    anupana: ['Honey', 'Ghee'],
    contraindications: ['Iron overload conditions'],
    categories: ['Blood', 'Women\'s Health']
  }
];

export const additionalGutHealthFormulations: Formulation[] = [
  {
    id: 'avipattikar-churna',
    name: 'Avipattikar Churna',
    sanskritName: 'अविपत्तिकर चूर्ण',
    type: 'churna',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Triphala', quantity: '3 parts' },
      { herb: 'Trikatu', quantity: '1 part' },
      { herb: 'Musta', quantity: '1 part', part: 'rhizome' }
    ],
    indications: [
      'Hyperacidity',
      'Gastritis',
      'Heartburn',
      'Constipation',
      'Indigestion'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily',
      duration: 'As needed'
    },
    anupana: ['Warm water', 'Honey'],
    contraindications: ['Peptic ulcer'],
    categories: ['Digestive System']
  },
  {
    id: 'kutajarishta',
    name: 'Kutajarishta',
    sanskritName: 'कुटजारिष्ट',
    type: 'arishta',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Kutaja', quantity: '4.8 kg', part: 'bark' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' },
      { herb: 'Musta', quantity: '48 g', part: 'rhizome' }
    ],
    indications: [
      'Diarrhea',
      'Dysentery',
      'IBS',
      'Colitis',
      'Malabsorption'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily',
      duration: 'Until symptoms subside'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Constipation'],
    categories: ['Digestive System']
  }
];
