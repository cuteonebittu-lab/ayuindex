import { Formulation } from '../../types/ayurveda';

export const vatis: Formulation[] = [
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
    categories: ['Musculoskeletal', 'Metabolic Disorders'],
    reference: 'Sharangadhara Samhita Madhyama 7/82-83'
  },
  {
    id: 'khadiradi-vati',
    name: 'Khadiradi Vati',
    sanskritName: 'खदिरादि वटी',
    type: 'vati',
    category: 'Respiratory System',
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
      duration: '7-14 days'
    },
    anupana: ['Warm water'],
    contraindications: ['Pitta disorders'],
    categories: ['Respiratory System'],
    reference: 'Sharangadhara Samhita Madhyama 7/22-24'
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
      'Metabolic disorders',
      'Obesity',
      'Diabetes'
    ],
    dosage: {
      amount: '250-500mg',
      frequency: 'Twice daily',
      duration: '1-3 months'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy', 'Lactation'],
    categories: ['Liver', 'Metabolic Disorders'],
    reference: 'Rasaratnasamucchaya 20/87-92'
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
      'Obesity',
      'Metabolic disorders'
    ],
    dosage: {
      amount: '500mg-1g',
      frequency: 'Thrice daily',
      duration: '2-3 months'
    },
    anupana: ['Warm water', 'Ginger juice'],
    contraindications: ['Pregnancy', 'Bleeding disorders'],
    categories: ['Musculoskeletal', 'Metabolic Disorders'],
    reference: 'Sharangadhara Samhita Madhyama 7/70-81'
  },
  {
    id: 'chandraprabha-vati',
    name: 'Chandraprabha Vati',
    sanskritName: 'चन्द्रप्रभा वटी',
    type: 'vati',
    category: 'Urinary System',
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
      duration: 'As prescribed'
    },
    anupana: ['Warm water'],
    contraindications: ['Pregnancy'],
    reference: 'Sharangadhara Samhita',
    categories: ['Urinary System', 'Metabolic Disorders']
  },
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
    reference: 'Rasendra Sara Sangraha',
    categories: ['Digestive System']
  }
];
