import { Formulation } from '../../types/ayurveda';

export const avalehas: Formulation[] = [
  {
    id: 'chyawanprash',
    name: 'Chyawanprash',
    sanskritName: 'च्यवनप्राश',
    type: 'avaleha',
    clinicalSystems: ['Respiratory System', 'Immune System', 'Digestive System'],
    indicationCategories: ['Respiratory Conditions', 'General Health & Wellness', 'Digestive Disorders'],
    traditionalCategories: ['Rasayana', 'Balya', 'Kaphahara'],
    ingredients: [
      { herb: 'Amalaki (Emblica officinalis)', quantity: '1 part' },
      { herb: 'Dashamoola (group of ten roots)', quantity: 'q.s.' },
      { herb: 'Ashtavarga (group of eight herbs)', quantity: 'q.s.' },
      { herb: 'Sharkara (Sugar)', quantity: 'q.s.' },
      { herb: 'Madhu (Honey)', quantity: 'q.s.' },
      { herb: 'Ghrita (Ghee)', quantity: 'q.s.' }
    ],
    indications: [
      'Kasa (Cough)',
      'Shwasa (Asthma)',
      'Kshaya (Tuberculosis/Wasting)',
      'Hridroga (Heart disease)',
      'Vatarakta (Gout)',
      'Pipasa (Thirst)',
      'Mutra Dosha (Urinary disorders)'
    ],
    dosage: {
      amount: '12-24 grams',
      frequency: 'once or twice a day',
      duration: 'as directed by the physician'
    },
    anupana: ['Milk', 'Warm water'],
    contraindications: [
      'Ajirna (Indigestion)',
      'Atisara (Diarrhea)',
      'Uncontrolled Madhumeha (Diabetes Mellitus)'
    ],
    reference: 'Charaka Samhita, Chikitsa Sthana 1/1/62-74',
    
    adultDosage: 'Oral: 12-24 grams once or twice daily, before or after meals.',
    paediatricDosage: 'Oral: 5-10 grams once or twice daily, often mixed with milk.',
    doseAdjustment: {
      hepatic: 'Use with caution in severe liver disease.',
      renal: 'Use with caution in severe kidney disease.'
    },
    pregnancyLactation: 'Consult a physician before use during pregnancy. Generally considered safe during lactation.',
    modeOfAction: 'Acts as a powerful immunomodulator and antioxidant due to its high content of Vitamin C from Amalaki. It supports respiratory health, nourishes body tissues (Dhatu-poshana), and enhances overall vitality (Ojas).',
    adverseDrugReactions: 'Generally safe. Overdosage may cause indigestion, bloating, or loose stools.',
    interactions: 'No known significant interactions. It is advisable to maintain a 30-minute gap with other medications.',
    contraindicationsWarnings: 'Contraindicated in cases of acute indigestion, diarrhea, and high blood sugar levels. Sugar-free versions are recommended for diabetic patients.',
    generalConsiderations: 'A traditional rejuvenative tonic suitable for all ages to maintain health and vitality. Its taste profile is a mix of sweet, sour, and spicy.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Chyawanprash', price: 350, quantity: '1kg' },
          { name: 'Dabur Chyawanprash Sugar-Free', price: 400, quantity: '1kg' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Chyawanprash Special', price: 370, quantity: '1kg' }
        ]
      },
      {
        name: 'Patanjali',
        products: [
          { name: 'Patanjali Chyawanprash', price: 250, quantity: '1kg' }
        ]
      }
    ]
  }
];
