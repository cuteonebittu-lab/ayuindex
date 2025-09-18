import { Formulation } from '../../types/ayurveda';

export const ghritas: Formulation[] = [
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
    categories: ['Mental Health', 'Nervous System'],
    reference: 'Charaka Samhita Chikitsa Sthana 9/41-43'
  },
  {
    id: 'panchatikta-ghrita',
    name: 'Panchatikta Ghrita',
    sanskritName: 'पञ्चतिक्त घृत',
    type: 'ghrita',
    category: 'Skin Health',
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
    reference: 'Ashtanga Hridaya',
    categories: ['Skin Health', 'Blood']
  },
  {
    id: 'jatyadi-ghrita',
    name: 'Jatyadi Ghrita',
    sanskritName: 'जात्यादि घृत',
    type: 'ghrita',
    category: 'Skin Health',
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
    reference: 'Sharangadhara Samhita',
    categories: ['Skin Health', 'General Tonic']
  }
];
