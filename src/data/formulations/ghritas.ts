import { Formulation } from '../../types/ayurveda';

export const ghritas: Formulation[] = [
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
    reference: 'Sharangadhara Samhita',
    categories: ['Wound Healing', 'Skin Disorders']
  }
];
