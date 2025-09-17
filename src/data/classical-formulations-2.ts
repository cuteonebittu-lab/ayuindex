import { Formulation } from '../types/ayurveda';

export const additionalArishtas: Formulation[] = [
  {
    id: 'dashmularishta',
    name: 'Dashmularishta',
    sanskritName: 'दशमूलारिष्ट',
    type: 'arishta',
    category: 'Respiratory System',
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
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Peptic ulcer'],
    preparation: 'Traditional fermentation process for 30-45 days',
    seasonalUsage: 'Best in winter and rainy seasons',
    reference: 'Bhaishajya Ratnavali',
    categories: ['Respiratory System', 'Musculoskeletal']
  },
  {
    id: 'lodhrasava',
    name: 'Lodhrasava',
    sanskritName: 'लोध्रासव',
    type: 'arishta',
    category: 'Women\'s Health',
    ingredients: [
      { herb: 'Lodhra', quantity: '4.8 kg', part: 'bark' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' },
      { herb: 'Musta', quantity: '48 g', part: 'rhizome' }
    ],
    indications: [
      'Menorrhagia',
      'Leucorrhea',
      'Uterine disorders',
      'Bleeding disorders'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: 'As prescribed'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Constipation'],
    preparation: 'Traditional fermentation process for 30-45 days',
    seasonalUsage: 'Can be used in all seasons',
    reference: 'Bhaishajya Ratnavali',
    categories: ['Women\'s Health']
  }
];

export const additionalVatis: Formulation[] = [
  {
    id: 'kamadugha-rasa',
    name: 'Kamadugha Rasa',
    sanskritName: 'कामदुघा रस',
    type: 'vati',
    category: 'Digestive System',
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
      duration: 'As needed'
    },
    anupana: ['Cold water', 'Honey'],
    contraindications: ['Low gastric acid'],
    preparation: 'Complex preparation involving bhasma processing',
    seasonalUsage: 'Can be used in all seasons, especially summer',
    reference: 'Rasendra Sara Sangraha',
    categories: ['Digestive System']
  }
];

export const additionalKashayas: Formulation[] = [
  {
    id: 'shadangapaniya',
    name: 'Shadangapaniya',
    sanskritName: 'षडंग पानीय',
    type: 'kashaya',
    category: 'Fever',
    ingredients: [
      { herb: 'Musta', quantity: '1 part', part: 'rhizome' },
      { herb: 'Parpataka', quantity: '1 part', part: 'whole plant' },
      { herb: 'Ushira', quantity: '1 part', part: 'root' },
      { herb: 'Chandana', quantity: '1 part', part: 'heartwood' },
      { herb: 'Udichya', quantity: '1 part', part: 'rhizome' },
      { herb: 'Nagara', quantity: '1 part', part: 'rhizome' }
    ],
    indications: [
      'Fever',
      'Thirst',
      'Burning sensation',
      'Heat stroke',
      'Summer disorders'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: '3-4 times daily',
      duration: 'As needed'
    },
    anupana: ['Cool water'],
    contraindications: ['Cold and cough'],
    preparation: 'Decoction prepared by boiling herbs in water',
    seasonalUsage: 'Best in summer season',
    reference: 'Charaka Samhita',
    categories: ['Fever', 'Summer Disorders']
  },
  {
    id: 'guduchyadi-kashaya',
    name: 'Guduchyadi Kashaya',
    sanskritName: 'गुडूच्यादि कषाय',
    type: 'kashaya',
    category: 'Fever',
    ingredients: [
      { herb: 'Guduchi', quantity: '1 part', part: 'stem' },
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Chronic fever',
      'General debility',
      'Loss of appetite',
      'Weakness after fever'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily before food',
      duration: '7-14 days'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    preparation: 'Decoction prepared by boiling herbs in water',
    seasonalUsage: 'Can be used in all seasons',
    reference: 'Ashtanga Hridaya',
    categories: ['Fever', 'General Tonic']
  }
];

export const additionalGhritas: Formulation[] = [
  {
    id: 'panchatikta-ghrita',
    name: 'Panchatikta Ghrita',
    sanskritName: 'पञ्चतिक्त घृत',
    type: 'ghrita',
    category: 'Skin Disorders',
    ingredients: [
      { herb: 'Nimba', quantity: '1 part', part: 'bark' },
      { herb: 'Patola', quantity: '1 part', part: 'leaves' },
      { herb: 'Vasa', quantity: '1 part', part: 'leaves' },
      { herb: 'Guduchi', quantity: '1 part', part: 'stem' },
      { herb: 'Kantakari', quantity: '1 part', part: 'whole plant' },
      { herb: 'Cow Ghee', quantity: '4 parts' }
    ],
    indications: [
      'Skin diseases',
      'Psoriasis',
      'Eczema',
      'Chronic dermatitis',
      'Blood disorders'
    ],
    dosage: {
      amount: '10-20ml',
      frequency: 'Twice daily',
      duration: '1-3 months'
    },
    anupana: ['Warm water', 'Warm milk'],
    contraindications: ['High cholesterol', 'Obesity'],
    preparation: 'Traditional ghrita preparation with decoction',
    seasonalUsage: 'Best in winter and spring',
    reference: 'Ashtanga Hridaya',
    categories: ['Skin Disorders', 'Blood Disorders']
  },
  {
    id: 'jatyadi-ghrita',
    name: 'Jatyadi Ghrita',
    sanskritName: 'जात्यादि घृत',
    type: 'ghrita',
    category: 'Wound Healing',
    ingredients: [
      { herb: 'Jati', quantity: '1 part', part: 'leaves' },
      { herb: 'Nimbapatra', quantity: '1 part', part: 'leaves' },
      { herb: 'Patola', quantity: '1 part', part: 'leaves' },
      { herb: 'Karanja', quantity: '1 part', part: 'seeds' },
      { herb: 'Cow Ghee', quantity: '4 parts' }
    ],
    indications: [
      'Wounds',
      'Ulcers',
      'Burns',
      'Surgical wounds',
      'Diabetic ulcers'
    ],
    dosage: {
      amount: 'External application',
      frequency: '2-3 times daily',
      duration: 'Until healing'
    },
    anupana: ['Not applicable (external use)'],
    contraindications: ['None for external application'],
    preparation: 'Traditional ghrita preparation with herbs',
    seasonalUsage: 'Can be used in all seasons',
    reference: 'Sharangadhara Samhita',
    categories: ['Wound Healing', 'Skin Disorders']
  }
];
