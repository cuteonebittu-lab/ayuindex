import { Formulation } from '../types/ayurveda';

export const additionalArishtas: Formulation[] = [
  {
    id: 'ashwagandharishta',
    name: 'Ashwagandharishta',
    sanskritName: 'अश्वगन्धारिष्ट',
    type: 'arishta',
    category: 'Rejuvenative',
    ingredients: [
      { herb: 'Ashwagandha', quantity: '4.8 kg', part: 'root' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' },
      { herb: 'Jaggery', quantity: '4.8 kg' },
      { herb: 'Mustaka', quantity: '48 g', part: 'rhizome' },
    ],
    indications: [
      'General debility',
      'Weakness',
      'Insomnia',
      'Anxiety',
      'Loss of memory',
      'Sexual weakness'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'High blood pressure'],
    preparation: 'Traditional fermentation process for 30-45 days',
    seasonalUsage: 'Best in winter and spring seasons',
    reference: 'Bhaishajya Ratnavali 73/54-57',
    categories: ['Rejuvenative', 'Nervous System']
  },
  {
    id: 'saraswatarishta',
    name: 'Saraswatarishta',
    sanskritName: 'सारस्वतारिष्ट',
    type: 'arishta',
    category: 'Mental Health',
    ingredients: [
      { herb: 'Brahmi', quantity: '2.4 kg', part: 'whole plant' },
      { herb: 'Vacha', quantity: '480 g', part: 'rhizome' },
      { herb: 'Shankhapushpi', quantity: '480 g', part: 'whole plant' },
      { herb: 'Dhataki', quantity: '960 g', part: 'flower' }
    ],
    indications: [
      'Memory enhancement',
      'Mental disorders',
      'Speech disorders',
      'Learning disabilities',
      'ADHD'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '3-6 months'
    },
    anupana: ['Equal quantity of water', 'Honey'],
    contraindications: ['Pregnancy', 'Hyperacidity'],
    preparation: 'Traditional fermentation process for 30-45 days',
    seasonalUsage: 'Can be used in all seasons',
    reference: 'Bhaishajya Ratnavali',
    categories: ['Mental Health', 'Nervous System']
  }
];

export const additionalVatis: Formulation[] = [
  {
    id: 'yogendra-rasa',
    name: 'Yogendra Rasa',
    sanskritName: 'योगेन्द्र रस',
    type: 'vati',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Parada', quantity: '1 part' },
      { herb: 'Gandhaka', quantity: '1 part' },
      { herb: 'Loha Bhasma', quantity: '1 part' },
      { herb: 'Abhrak Bhasma', quantity: '1 part' }
    ],
    indications: [
      'Chronic fever',
      'Digestive disorders',
      'Anemia',
      'General weakness'
    ],
    dosage: {
      amount: '125-250mg',
      frequency: 'Twice daily',
      duration: 'As prescribed'
    },
    anupana: ['Honey', 'Ginger juice'],
    contraindications: ['Pregnancy', 'Kidney disorders'],
    preparation: 'Complex preparation involving purification of minerals',
    seasonalUsage: 'Avoid in extreme summer',
    reference: 'Rasendra Sara Sangraha',
    categories: ['Digestive System', 'Fever']
  },
  {
    id: 'sootshekhar-rasa',
    name: 'Sootshekhar Rasa',
    sanskritName: 'सूतशेखर रस',
    type: 'vati',
    category: 'Respiratory System',
    ingredients: [
      { herb: 'Parada', quantity: '1 part' },
      { herb: 'Gandhaka', quantity: '1 part' },
      { herb: 'Vatsanabha', quantity: '1 part' },
      { herb: 'Tankana', quantity: '1 part' }
    ],
    indications: [
      'Fever',
      'Common cold',
      'Bronchitis',
      'Cough',
      'Sinusitis'
    ],
    dosage: {
      amount: '125mg',
      frequency: 'Twice daily',
      duration: '3-7 days'
    },
    anupana: ['Honey', 'Tulsi leaf juice'],
    contraindications: ['Pregnancy', 'Heart conditions'],
    preparation: 'Requires specialized pharmaceutical process',
    seasonalUsage: 'Particularly useful in winter and rainy season',
    reference: 'Rasa Tarangini',
    categories: ['Respiratory System', 'Fever']
  }
];

export const additionalGhritas: Formulation[] = [
  {
    id: 'indukanta-ghrita',
    name: 'Indukanta Ghrita',
    sanskritName: 'इन्दुकान्त घृत',
    type: 'ghrita',
    category: 'Digestive System',
    ingredients: [
      { herb: 'Cow Ghee', quantity: '1.6 L' },
      { herb: 'Triphala', quantity: '192 g' },
      { herb: 'Musta', quantity: '192 g' },
      { herb: 'Chirayata', quantity: '192 g' }
    ],
    indications: [
      'Digestive disorders',
      'Liver disorders',
      'Loss of appetite',
      'Malabsorption syndrome'
    ],
    dosage: {
      amount: '10-20ml',
      frequency: 'Twice daily before food',
      duration: '1-3 months'
    },
    anupana: ['Warm water', 'Warm milk'],
    contraindications: ['High cholesterol', 'Obesity'],
    preparation: 'Traditional ghrita preparation method with decoction',
    seasonalUsage: 'Best in winter and spring',
    reference: 'Bhaishajya Ratnavali',
    categories: ['Digestive System', 'Liver']
  }
];

export const additionalKashayas: Formulation[] = [
  {
    id: 'amruttothara-kashaya',
    name: 'Amruttothara Kashaya',
    sanskritName: 'अमृतोत्तर कषाय',
    type: 'kashaya',
    category: 'Fever',
    ingredients: [
      { herb: 'Kirata', quantity: '1 part', part: 'whole plant' },
      { herb: 'Guduchi', quantity: '1 part', part: 'stem' },
      { herb: 'Duralabha', quantity: '1 part', part: 'root' }
    ],
    indications: [
      'Fever',
      'Malaria',
      'Viral infections',
      'Loss of appetite'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice to thrice daily before food',
      duration: '7-14 days'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    preparation: 'Decoction prepared by boiling herbs in water',
    seasonalUsage: 'Useful in all seasons, especially during epidemics',
    reference: 'Sahasrayogam',
    categories: ['Fever', 'Infectious Diseases']
  }
];
