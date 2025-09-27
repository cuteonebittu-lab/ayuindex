import { Formulation } from '../../types/ayurveda';

export const tailas: Formulation[] = [
  {
    id: 'ksheerbala-taila',
    name: 'Ksheerbala Taila',
    sanskritName: 'क्षीरबला तैल',
    type: 'taila',
    clinicalSystems: ['Nervous System', 'Musculoskeletal System'],
    indicationCategories: ['Neurological Disorders', 'Musculoskeletal Issues'],
    traditionalCategories: ['Vatahara', 'Balya'],
    ingredients: [
      { herb: 'Bala', quantity: '4.8 kg', part: 'root' },
      { herb: 'Cow\'s Milk', quantity: '12.288 L' },
      { herb: 'Sesame Oil', quantity: '768 ml' }
    ],
    indications: [
      'Facial paralysis',
      'Muscular dystrophy',
      'Neuromuscular disorders',
      'Rheumatoid arthritis'
    ],
    dosage: {
      amount: 'As needed',
      frequency: 'Once or twice daily',
      duration: 'As prescribed'
    },
    anupana: ['Not applicable (external use)'],
    contraindications: ['None for external application'],
    reference: 'Ashtanga Hridaya',
    brands: [
      {
        name: 'Kottakkal Arya Vaidya Sala',
        products: [
          { name: 'Ksheerbala Thailam (101)', price: 300, quantity: '200ml' }
        ]
      },
      {
        name: 'Nagarjuna',
        products: [
          { name: 'Ksheerabala Thailam', price: 280, quantity: '200ml' }
        ]
      }
    ]
  },
  {
    id: 'dashamool-tailam',
    name: 'Dashamoola Taila',
    sanskritName: 'दशमूल तैल',
    type: 'taila',
    clinicalSystems: ['Nervous System', 'Musculoskeletal System'],
    indicationCategories: ['Neurological Disorders', 'Musculoskeletal Issues'],
    traditionalCategories: ['Vatahara', 'Shothahara', 'Vedanasthapana'],
    ingredients: [
      { herb: 'Bilva (Aegle marmelos) root', quantity: '240 g' },
      { herb: 'Shyonaka (Oroxylum indicum) root', quantity: '240 g' },
      { herb: 'Gambhari / Gmelina arborea root', quantity: '240 g' },
      { herb: 'Patala (Stereospermum suaveolens) root', quantity: '240 g' },
      { herb: 'Agnimantha (Premna corymbosa) root', quantity: '240 g' },
      { herb: 'Shalaparni (Desmodium gangeticum)', quantity: '240 g' },
      { herb: 'Prishniparni (Uraria picta)', quantity: '240 g' },
      { herb: 'Brihati (Solanum indicum)', quantity: '240 g' },
      { herb: 'Kantakari (Solanum xanthocarpum)', quantity: '240 g' },
      { herb: 'Gokshura (Tribulus terrestris) root', quantity: '240 g' },
      { herb: 'Sesame oil (Til tail base) (oil quantity scaled to herb mass)', quantity: '3000 ml' }
    ],
    indications: [
      'Vata disorders',
      'Osteoarthritis',
      'Joint pain',
      'Sciatica',
      'Muscle spasm',
      'Low back pain',
      'Neuropathic pain adjunct'
    ],
    dosage: {
      amount: '10–50 ml',
      frequency: 'per session',
      duration: 'as practitioner prescribes'
    },
    anupana: ['Not applicable (external use)'],
    contraindications: ['None for external application'],
    preparation: 'Classical oil-paka: prepare decoction of dashamoola roots (sufficient water reduced by boiling), filter; boil decoction with sesame oil and herbal paste (kalka) repeatedly (10× boiling cycles) until desired reduction; cool and store. Commercial methods use herbal decoction per kg oil ratios.',
    reference: 'Classical taila preparation methods, PlanetAyurveda / AyurMedInfo practical summaries',
    generalConsiderations: 'External only (unless a product permits internal use per therapist). Avoid on inflamed open wounds without clinician guidance.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Dashamool Tailam', price: 120, quantity: '100ml' }
        ]
      },
      {
        name: 'Baidyanath',
        products: [
          { name: 'Baidyanath Dashamool Tailam', price: 130, quantity: '100ml' }
        ]
      }
    ]
  },
  {
    id: 'anu-taila',
    name: 'Anu Taila',
    sanskritName: 'अणु तैल',
    type: 'taila',
    clinicalSystems: ['Nervous System', 'Respiratory System'],
    indicationCategories: ['Neurological Disorders', 'Respiratory Conditions', 'ENT Conditions'],
    traditionalCategories: ['Vatahara', 'Kaphahara'],
    ingredients: [
      { herb: 'Holostemma (root/whole) and other nasal herbs (classical list varies)', quantity: 'proportionate' },
      { herb: 'Sesame oil (til tail)', quantity: 'bulk' },
      { herb: 'Goat\'s milk (added at final stage in classical method)', quantity: 'equal to oil' }
    ],
    indications: [
      'Nasal congestion',
      'Sinusitis',
      'Recurrent headaches',
      'Dryness of nasal passages',
      'ENT disorders (nasya therapy)'
    ],
    dosage: {
      amount: '2-4 drops',
      frequency: 'daily',
      duration: 'as directed'
    },
    anupana: ['Not applicable (nasya)'],
    contraindications: ['Acute high fever', 'Active major nasal bleed'],
    preparation: 'Boil herbs in 100× quantity of water until reduced to 1/10; the decoction is used to boil sesame oil repeatedly (10×) in the oil-paka method; final stage add goat\'s milk (classical technique), filter and bottle.',
    reference: 'Classical samhitas referenced in planetary ayurveda / EasyAyurveda summaries, PlanetAyurveda Anu Taila product literature',
    generalConsiderations: 'Use only under practitioner supervision for nasya. Ensure sterile container for nasal application.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Anu Taila', price: 80, quantity: '10ml' }
        ]
      }
    ]
  },
  {
    id: 'mahanarayana-taila',
    name: 'Mahānārāyaṇa Taila',
    sanskritName: 'महानारायण तैल',
    type: 'taila',
    clinicalSystems: ['Nervous System', 'Musculoskeletal System'],
    indicationCategories: ['Neurological Disorders', 'Musculoskeletal Issues'],
    traditionalCategories: ['Vatahara', 'Balya', 'Vedanasthapana'],
    ingredients: [
      { herb: 'Large multi-herb mash (classical list up to 50 herbs) including Bala, Ashwagandha, Rasna, etc.', quantity: 'various' },
      { herb: 'Sesame oil', quantity: 'bulk' },
      { herb: 'Ghee (sometimes used)', quantity: 'small' }
    ],
    indications: [
      'Vata disorders',
      'Chronic pain',
      'Neuromuscular disorders',
      'Paralysis rehabilitation adjunct'
    ],
    dosage: {
      amount: '20–50 ml',
      frequency: 'per session',
      duration: 'as practitioner prescribes'
    },
    anupana: ['Not applicable (external use)'],
    contraindications: [],
    preparation: 'Classical oil-paka process: prepare herbal decoction, add herbal kalka and oil, perform repeated boiling cycles until the decoction is absorbed into oil; filter and store.',
    reference: 'Classical taila formulations in Bhaishajya Kalpana literature / product monographs',
    generalConsiderations: 'External use only; avoid on broken skin without clinician advice. Store away from direct sunlight.',
    brands: [
      {
        name: 'Dabur',
        products: [
          { name: 'Dabur Mahanarayana Taila', price: 250, quantity: '200ml' }
        ]
      }
    ]
  },
  {
    id: 'anu-taila-alternate',
    name: 'Anu Taila (alternate classical note)',
    sanskritName: 'अणु तैल (वैकल्पिक)',
    type: 'taila',
    clinicalSystems: ['Nervous System', 'Respiratory System'],
    indicationCategories: ['Neurological Disorders', 'Respiratory Conditions', 'ENT Conditions'],
    traditionalCategories: ['Vatahara', 'Kaphahara'],
    ingredients: [
      { herb: 'Sthirasinna type herbs (example: Haridra, Devadaru, Yavani, etc)', quantity: 'proportional' },
      { herb: 'Sesame oil', quantity: 'bulk' }
    ],
    indications: [
      'Chronic sinusitis',
      'Headache',
      'Vata disorders of head region'
    ],
    dosage: {
      amount: '2-4 drops',
      frequency: 'daily',
      duration: 'as directed by practitioner'
    },
    anupana: ['Not applicable (nasya)'],
    contraindications: ['Active high fever (without advice)'],
    preparation: 'Decoction-paka with milk final stage (classical method); filter and bottle.',
    reference: 'Classical samhitas referenced in planetary ayurveda / EasyAyurveda summaries',
    generalConsiderations: 'Use sterile containers for nasal oils. Do not use in active high fever without advice.',
    brands: []
  }
];
