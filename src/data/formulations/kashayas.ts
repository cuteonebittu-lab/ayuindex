import { Formulation } from '../../types/ayurveda.ts';

export const kashayas: Formulation[] = [
  {
    id: 'shadangapaniya',
    name: 'Shadangapaniya',
    sanskritName: 'षडंग पानीय',
    type: 'kashaya',
    clinicalSystems: ['Immune System', 'Urinary System'],
    indicationCategories: ['Fever & Infections', 'General Health & Wellness'],
    traditionalCategories: ['Jwaraghna', 'Pittahara'],
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
    reference: 'Charaka Samhita',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Shadangapaniya', price: 100, quantity: '200ml' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Shadangapaniya', price: 110, quantity: '200ml' }
        ]
      }
    ]
  },
  {
    id: 'guduchyadi-kashaya',
    name: 'Guduchyadi Kashaya',
    sanskritName: 'गुडूच्यादि कषाय',
    type: 'kashaya',
    clinicalSystems: ['Immune System'],
    indicationCategories: ['Fever & Infections', 'General Health & Wellness'],
    traditionalCategories: ['Jwaraghna', 'Rasayana'],
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
    reference: 'Ashtanga Hridaya',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Guduchyadi Kashaya', price: 130, quantity: '200ml' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Guduchyadi Kashaya', price: 140, quantity: '200ml' }
        ]
      }
    ]
  },
  {
    id: 'mahamanjishthadi-kadha',
    name: 'Mahamanjishthadi Kādā',
    sanskritName: 'महामञ्जिष्ठादि काढा',
    type: 'kashaya',
    clinicalSystems: ['Integumentary System', 'Hematopoietic System', 'Immune System'],
    indicationCategories: ['Skin Conditions', 'General Health & Wellness'],
    traditionalCategories: ['Rasayana', 'Shothahara'],
    ingredients: [
      { herb: 'Manjishtha (Rubia cordifolia)', quantity: 'Proprietary' },
      { herb: 'Nagarmotha (Cyperus rotundus)', quantity: 'Proprietary' },
      { herb: 'Kutaja', quantity: 'Proprietary' },
      { herb: 'Giloy (Tinospora cordifolia)', quantity: 'Proprietary' }
    ],
    indications: [
      'Blood purifier',
      'Skin disorders',
      'Detoxification',
      'Liver support',
      'Blood purification'
    ],
    dosage: {
      amount: '1-2 tola (approx)',
      frequency: 'Morning & evening after food',
      duration: 'As directed',
      form: {
        liquid: '1-2 tola (approx)'
      }
    },
    anupana: ['Equal volume water'],
    contraindications: [],
    preparation: 'Decoction (Kadha) prepared from the herbs',
    reference: 'mohtaayurved.com',
    brands: []
  },
  {
    id: 'mahasudarshan-kadha',
    name: 'Mahasudarshan Kāḍa',
    sanskritName: 'महासुदर्शन काढा',
    type: 'kashaya',
    clinicalSystems: ['Immune System', 'Digestive System', 'Respiratory System'],
    indicationCategories: ['Fever & Infections', 'Digestive Disorders', 'Respiratory Conditions'],
    traditionalCategories: ['Jwaraghna', 'Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Haritaki (Terminalia chebula)', quantity: '10 g' },
      { herb: 'Bahera (Terminalia bellirica)', quantity: '10 g' },
      { herb: 'Amla (Emblica officinalis)', quantity: '10 g' },
      { herb: 'Turmeric (Curcuma longa)', quantity: '2 g' },
      { herb: 'Daruharidra (Berberis aristata)', quantity: '2 g' },
      { herb: 'Shunthi / Ginger (Zingiber officinalis)', quantity: '2 g' },
      { herb: 'Pippali, Maricha, other supportive herbs (Piper longum / Piper nigrum)', quantity: 'small qty' }
    ],
    indications: [
      'Fever',
      'Acute infections',
      'Digestive issues',
      'Hepatoprotective adjunct',
      'Detoxification',
      'Respiratory conditions'
    ],
    dosage: {
      amount: '10–20 ml',
      frequency: 'twice daily',
      duration: 'adult'
    },
    anupana: ['Honey', 'Warm water'],
    contraindications: ['Pregnancy'],
    generalConsiderations: 'Use per physician in pregnant women. Some formulas may be strong for children; adjust dose.',
    preparation: 'Boil herbs in water (e.g., 400 ml for 10 g total herbs) reduce to 1/4 volume, filter — serve warm. For concentrated use, reduce further per classical instruction.',
    reference: 'AyurMedInfo / AyurTimes Mahasudarshan kadha summaries',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Mahasudarshan Kadha', price: 150, quantity: '200ml' }
        ]
      }
    ]
  },
  {
    id: 'trikuta-kshirapaka',
    name: 'Trikuta Kṣīrapāka',
    sanskritName: 'त्रिकूट क्षीरपाक',
    type: 'kashaya',
    clinicalSystems: ['Digestive System'],
    indicationCategories: ['Digestive Disorders'],
    traditionalCategories: ['Deepana', 'Pachana'],
    ingredients: [
      { herb: 'Black pepper, long pepper, ginger (Trikatu)', quantity: '1 part' },
      { herb: 'Milk', quantity: '8 parts' },
      { herb: 'Water', quantity: '32 parts' }
    ],
    indications: [
      'Digestion support with moderated pungency'
    ],
    dosage: {
      amount: '~50 ml',
      frequency: 'as directed',
      duration: 'as directed'
    },
    anupana: ['Itself (milk)', 'Water'],
    contraindications: [],
    reference: 'Classical Ayurvedic Text',
    adultDosage: '~50 ml (or as classical texts direct)',
    modeOfAction: 'Milk-based decoction to moderate the hot/pungent action of Trikatu.',
    generalConsiderations: 'Used when digestion support is needed with a milk basis, to calm irritative effect in some patients.',
    brands: []
  }
];
