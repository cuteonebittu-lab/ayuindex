import { Formulation } from '../../types/ayurveda';

// Mental Health formulations that aren't already in type-based files
export const mentalHealthFormulations: Formulation[] = [];

// Metabolic formulations that aren't already in type-based files
export const metabolicFormulations: Formulation[] = [];

// Digestive formulations that aren't already in type-based files
export const digestiveFormulations: Formulation[] = [];

// Musculoskeletal formulations that aren't already in type-based files
export const musculoskeletalFormulations: Formulation[] = [];

// Blood formulations that aren't already in type-based files
export const bloodFormulations: Formulation[] = [
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
    categories: ['Blood', 'Women\'s Health'],
    reference: 'Bhaishajya Ratnavali 12/45-48',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  }
];
