import { Formulation } from '../../types/ayurveda.ts';

export const syrups: Formulation[] = [
  {
    id: 'trikatu-syrup',
    name: 'Trikatu Syrup',
    sanskritName: 'त्रिकटु सिरप',
    type: 'syrup',
    clinicalSystems: ['Digestive System', 'Respiratory System'],
    indicationCategories: ['Digestive Disorders', 'Respiratory Conditions'],
    traditionalCategories: ['Deepana', 'Pachana', 'Kaphahara'],
    ingredients: [
      { herb: 'Black pepper (Piper nigrum)', quantity: '1 part' },
      { herb: 'Long pepper (Piper longum)', quantity: '1 part' },
      { herb: 'Ginger (Zingiber officinale)', quantity: '1 part' }
    ],
    indications: [
      'Enhances digestion',
      'Stimulates Agni (digestive fire)',
      'Helps with gas, bloating, indigestion, flatulence'
    ],
    dosage: {
      amount: '~5 ml',
      frequency: 'twice a day',
      duration: 'as directed'
    },
    anupana: ['Warm water', 'Lukewarm water'],
    contraindications: ['Hyperacidity', 'Gastritis'],
    reference: 'Classical Ayurvedic Text',
    adultDosage: '~5 ml twice a day (or 1 teaspoon twice daily in many syrup / liquid versions)',
    modeOfAction: 'Stimulates digestive enzymes and improves metabolism.',
    generalConsiderations: 'Classical Trikatu combination in syrup form.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Trikatu Syrup', price: 100, quantity: '200ml' }
        ]
      }
    ]
  }
];
