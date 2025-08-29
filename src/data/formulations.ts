import { Formulation } from '../types/ayurveda';

export const formulations: Formulation[] = [
  {
    id: 'chyawanprash',
    name: 'Chyawanprash',
    sanskritName: 'च्यवनप्राश',
    type: 'ghrita',
    ingredients: [
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bilva', quantity: '1/4 part', part: 'root' },
      { herb: 'Agnimantha', quantity: '1/4 part', part: 'root' },
      { herb: 'Shyonaka', quantity: '1/4 part', part: 'root' },
      { herb: 'Patala', quantity: '1/4 part', part: 'root' },
      { herb: 'Ghee', quantity: '1/4 part' },
      { herb: 'Honey', quantity: '1/8 part' }
    ],
    indications: [
      'General weakness',
      'Respiratory disorders',
      'Digestive problems',
      'Immunity enhancement',
      'Anti-aging',
      'Chronic cough',
      'Tuberculosis',
      'Memory disorders',
      'Sexual debility',
      'Chronic fever'
    ],
    dosage: {
      amount: '12-24g',
      frequency: 'Once or twice daily',
      duration: 'As required'
    },
    anupana: ['Milk', 'Warm water'],
    contraindications: ['Diabetes (sugar-free version available)', 'Acute fever'],
    reference: 'Charaka Samhita Chikitsa Sthana 1/1/62-74',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'triphala-churna',
    name: 'Triphala Churna',
    sanskritName: 'त्रिफला चूर्ण',
    type: 'churna',
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Constipation',
      'Eye disorders',
      'Obesity',
      'Diabetes',
      'Digestive disorders',
      'Skin diseases',
      'Hair problems',
      'Liver disorders',
      'Anemia',
      'General debility'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Once daily at bedtime',
      duration: 'As required'
    },
    anupana: ['Warm water', 'Honey water'],
    contraindications: ['Diarrhea', 'Pregnancy', 'Severe dehydration'],
    reference: 'Sushruta Samhita Chikitsa Sthana 33/4',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'saraswatarishta',
    name: 'Saraswatarishta',
    sanskritName: 'सरस्वतारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Brahmi', quantity: '1 part', part: 'whole plant' },
      { herb: 'Mandukaparni', quantity: '1 part', part: 'whole plant' },
      { herb: 'Shankhpushpi', quantity: '1 part', part: 'whole plant' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Memory disorders',
      'Mental retardation',
      'Epilepsy',
      'Insanity',
      'Speech disorders',
      'Learning disabilities',
      'Stress and anxiety',
      'Depression',
      'Insomnia',
      'Hysteria'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '3-6 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes', 'Alcoholism'],
    reference: 'Bhaishajya Ratnavali Unmada Chikitsa 24/179-185',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'mahasudarshan-churna',
    name: 'Mahasudarshan Churna',
    sanskritName: 'महासुदर्शन चूर्ण',
    type: 'churna',
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' },
      { herb: 'Maricha', quantity: '1 part', part: 'fruit' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Guduchi', quantity: '4 parts', part: 'stem' }
    ],
    indications: [
      'Fever of unknown origin',
      'Chronic fever',
      'Malaria',
      'Typhoid',
      'Liver disorders',
      'Spleen enlargement',
      'Loss of appetite',
      'Digestive disorders',
      'Skin diseases',
      'Respiratory infections'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily before meals',
      duration: '15-30 days'
    },
    anupana: ['Honey', 'Warm water', 'Ginger juice'],
    contraindications: ['Acute diarrhea', 'Severe dehydration'],
    reference: 'Sharangdhara Samhita Madhyama Khanda 6/1-15',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'dashmool-kwath',
    name: 'Dashmool Kwath',
    sanskritName: 'दशमूल क्वाथ',
    type: 'churna',
    ingredients: [
      { herb: 'Bilva', quantity: '1 part', part: 'root' },
      { herb: 'Agnimantha', quantity: '1 part', part: 'root' },
      { herb: 'Shyonaka', quantity: '1 part', part: 'root' },
      { herb: 'Patala', quantity: '1 part', part: 'root' },
      { herb: 'Kashmarya', quantity: '1 part', part: 'root' },
      { herb: 'Brihati', quantity: '1 part', part: 'root' },
      { herb: 'Kantakari', quantity: '1 part', part: 'root' },
      { herb: 'Shalaparni', quantity: '1 part', part: 'root' },
      { herb: 'Prishniparni', quantity: '1 part', part: 'root' },
      { herb: 'Gokshura', quantity: '1 part', part: 'root' }
    ],
    indications: [
      'Vata disorders',
      'Joint pain',
      'Backache',
      'Sciatica',
      'Postpartum care',
      'Urinary disorders',
      'Respiratory conditions',
      'Paralysis',
      'Nervous disorders',
      'General debility'
    ],
    dosage: {
      amount: '50-100ml',
      frequency: 'Twice daily',
      duration: 'As required'
    },
    anupana: ['Honey', 'Ghee'],
    contraindications: ['Acute fever', 'Severe Pitta conditions'],
    reference: 'Charaka Samhita Sutra Sthana 4/8',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'ashwagandharishta',
    name: 'Ashwagandharishta',
    sanskritName: 'अश्वगंधारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Ashwagandha', quantity: '1 part', part: 'root' },
      { herb: 'Musali', quantity: '1 part', part: 'root' },
      { herb: 'Manjistha', quantity: '1 part', part: 'root' },
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'General debility',
      'Sexual weakness',
      'Nervous disorders',
      'Insomnia',
      'Memory disorders',
      'Arthritis',
      'Skin diseases',
      'Anemia',
      'Chronic fatigue',
      'Stress disorders'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes', 'Acute fever'],
    reference: 'Bhaishajya Ratnavali Vajikarana 74/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'arjunarishta',
    name: 'Arjunarishta',
    sanskritName: 'अर्जुनारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Arjuna', quantity: '1 part', part: 'bark' },
      { herb: 'Madhuka', quantity: '1/4 part', part: 'flower' },
      { herb: 'Draksha', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Heart diseases',
      'Cardiac weakness',
      'Hypertension',
      'Angina',
      'Palpitations',
      'Chest pain',
      'Breathlessness',
      'Fatigue',
      'Edema',
      'Cough'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '3-6 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Hypotension', 'Bradycardia'],
    reference: 'Bhaishajya Ratnavali Hridroga Chikitsa 26/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'draksharishta',
    name: 'Draksharishta',
    sanskritName: 'द्राक्षारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Draksha', quantity: '1 part', part: 'fruit' },
      { herb: 'Gokshura', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Kharjura', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Jaggery', quantity: '2 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'General debility',
      'Chronic cough',
      'Asthma',
      'Tuberculosis',
      'Anemia',
      'Loss of appetite',
      'Digestive weakness',
      'Urinary disorders',
      'Heart weakness',
      'Chronic fever'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes', 'Obesity'],
    reference: 'Bhaishajya Ratnavali Kasaroga 15/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'kumaryasava',
    name: 'Kumaryasava',
    sanskritName: 'कुमार्यासव',
    type: 'asava',
    ingredients: [
      { herb: 'Kumari', quantity: '1 part', part: 'juice' },
      { herb: 'Haritaki', quantity: '1/8 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1/8 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1/8 part', part: 'fruit' },
      { herb: 'Jaggery', quantity: '1/4 part' }
    ],
    indications: [
      'Liver disorders',
      'Spleen enlargement',
      'Anemia',
      'Jaundice',
      'Loss of appetite',
      'Digestive disorders',
      'Skin diseases',
      'Constipation',
      'Piles',
      'Abdominal tumors'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '1-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes', 'Severe diarrhea'],
    reference: 'Bhaishajya Ratnavali Pliharoga 43/45-52',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'abhayarishta',
    name: 'Abhayarishta',
    sanskritName: 'अभयारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Vidanga', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Chitrak', quantity: '1/8 part', part: 'root' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Constipation',
      'Piles',
      'Digestive disorders',
      'Loss of appetite',
      'Flatulence',
      'Abdominal pain',
      'Liver disorders',
      'Spleen disorders',
      'Anemia',
      'General weakness'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '1-2 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diarrhea', 'Pregnancy'],
    reference: 'Bhaishajya Ratnavali Arsha Chikitsa 8/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'balarishta',
    name: 'Balarishta',
    sanskritName: 'बलारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Bala', quantity: '1 part', part: 'root' },
      { herb: 'Ashwagandha', quantity: '1/2 part', part: 'root' },
      { herb: 'Rasna', quantity: '1/4 part', part: 'root' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Nervous disorders',
      'Paralysis',
      'Facial palsy',
      'Sciatica',
      'General debility',
      'Sexual weakness',
      'Arthritis',
      'Heart diseases',
      'Urinary disorders',
      'Chronic fever'
    ],
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes', 'Acute fever'],
    reference: 'Bhaishajya Ratnavali Vatavyadhi 26/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'chandraprabha-vati',
    name: 'Chandraprabha Vati',
    sanskritName: 'चन्द्रप्रभा वटी',
    type: 'vati',
    ingredients: [
      { herb: 'Shilajit', quantity: '1 part' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Sharkara', quantity: '1 part' },
      { herb: 'Karpoor', quantity: '1/16 part' },
      { herb: 'Vacha', quantity: '1/16 part' },
      { herb: 'Vidanga', quantity: '1/16 part' },
      { herb: 'Chitrak', quantity: '1/16 part' },
      { herb: 'Danti', quantity: '1/16 part' }
    ],
    indications: [
      'Urinary disorders',
      'Diabetes',
      'Kidney stones',
      'Prostate disorders',
      'Sexual weakness',
      'Arthritis',
      'Skin diseases',
      'Digestive problems',
      'Obesity',
      'General debility'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily after meals',
      duration: '1-3 months'
    },
    anupana: ['Warm water', 'Milk', 'Honey water'],
    contraindications: ['Pregnancy', 'Lactation', 'Severe kidney disease'],
    reference: 'Sharangdhara Samhita Madhyama Khanda 7/40-73',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'kanchanar-guggulu',
    name: 'Kanchanar Guggulu',
    sanskritName: 'कांचनार गुग्गुलु',
    type: 'vati',
    ingredients: [
      { herb: 'Kanchanar', quantity: '1 part', part: 'bark' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Triphala', quantity: '1/2 part' },
      { herb: 'Trikatu', quantity: '1/4 part' },
      { herb: 'Varun', quantity: '1/4 part', part: 'bark' },
      { herb: 'Tejpatra', quantity: '1/8 part' },
      { herb: 'Ela', quantity: '1/8 part' },
      { herb: 'Dalchini', quantity: '1/8 part' }
    ],
    indications: [
      'Thyroid disorders',
      'Goiter',
      'Lymphadenitis',
      'Tumors',
      'Cysts',
      'PCOS',
      'Lipoma',
      'Skin diseases',
      'Obesity',
      'Arthritis'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily after meals',
      duration: '3-6 months'
    },
    anupana: ['Warm water', 'Honey water'],
    contraindications: ['Pregnancy', 'Lactation', 'Hyperthyroidism'],
    reference: 'Bhaishajya Ratnavali Granthi Arbuda 44/45-52',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'yograj-guggulu',
    name: 'Yograj Guggulu',
    sanskritName: 'योगराज गुग्गुलु',
    type: 'vati',
    ingredients: [
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Chitrak', quantity: '1/8 part', part: 'root' },
      { herb: 'Pippali', quantity: '1/8 part', part: 'fruit' },
      { herb: 'Jeeraka', quantity: '1/8 part', part: 'seed' },
      { herb: 'Devdaru', quantity: '1/8 part', part: 'heartwood' },
      { herb: 'Ela', quantity: '1/8 part', part: 'seed' },
      { herb: 'Rasna', quantity: '1/8 part', part: 'root' },
      { herb: 'Gokshura', quantity: '1/8 part', part: 'fruit' }
    ],
    indications: [
      'Arthritis',
      'Rheumatism',
      'Gout',
      'Sciatica',
      'Paralysis',
      'Nervous disorders',
      'Urinary disorders',
      'Skin diseases',
      'Digestive problems',
      'Obesity'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily after meals',
      duration: '2-4 months'
    },
    anupana: ['Warm water', 'Milk', 'Honey water'],
    contraindications: ['Pregnancy', 'Lactation', 'Acute fever'],
    reference: 'Bhaishajya Ratnavali Vatavyadhi 29/78-95',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'punarnavadi-mandoor',
    name: 'Punarnavadi Mandoor',
    sanskritName: 'पुनर्नवादि मण्डूर',
    type: 'churna',
    ingredients: [
      { herb: 'Punarnava', quantity: '1 part', part: 'root' },
      { herb: 'Mandoor Bhasma', quantity: '1 part' },
      { herb: 'Shunthi', quantity: '1/4 part', part: 'rhizome' },
      { herb: 'Maricha', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Pippali', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Vidanga', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Chitrak', quantity: '1/4 part', part: 'root' }
    ],
    indications: [
      'Anemia',
      'Liver disorders',
      'Spleen enlargement',
      'Edema',
      'Ascites',
      'Jaundice',
      'Loss of appetite',
      'Digestive weakness',
      'Skin diseases',
      'General debility'
    ],
    dosage: {
      amount: '1-3g',
      frequency: 'Twice daily after meals',
      duration: '2-3 months'
    },
    anupana: ['Buttermilk', 'Honey water', 'Warm water'],
    contraindications: ['Pregnancy', 'Severe dehydration'],
    reference: 'Bhaishajya Ratnavali Pandu Roga 12/78-95',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'avipattikar-churna',
    name: 'Avipattikar Churna',
    sanskritName: 'अविपत्तिकर चूर्ण',
    type: 'churna',
    ingredients: [
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' },
      { herb: 'Maricha', quantity: '1 part', part: 'fruit' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Nagarmotha', quantity: '1 part', part: 'rhizome' },
      { herb: 'Vidlavana', quantity: '1 part' }
    ],
    indications: [
      'Hyperacidity',
      'Peptic ulcer',
      'Heartburn',
      'Constipation',
      'Loss of appetite',
      'Indigestion',
      'Flatulence',
      'Nausea',
      'Vomiting',
      'Liver disorders'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily before meals',
      duration: '1-2 months'
    },
    anupana: ['Cold water', 'Milk', 'Coconut water'],
    contraindications: ['Diarrhea', 'Severe weakness'],
    reference: 'Sharangdhara Samhita Madhyama Khanda 6/19-22',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'sitopaladi-churna',
    name: 'Sitopaladi Churna',
    sanskritName: 'सितोपलादि चूर्ण',
    type: 'churna',
    ingredients: [
      { herb: 'Mishri', quantity: '16 parts' },
      { herb: 'Vanshlochan', quantity: '8 parts' },
      { herb: 'Pippali', quantity: '4 parts', part: 'fruit' },
      { herb: 'Ela', quantity: '2 parts', part: 'seed' },
      { herb: 'Dalchini', quantity: '1 part', part: 'bark' }
    ],
    indications: [
      'Cough',
      'Cold',
      'Asthma',
      'Bronchitis',
      'Tuberculosis',
      'Fever',
      'Loss of appetite',
      'Digestive weakness',
      'Voice disorders',
      'Respiratory infections'
    ],
    dosage: {
      amount: '3-6g',
      frequency: '3-4 times daily',
      duration: '15-30 days'
    },
    anupana: ['Honey', 'Warm water', 'Milk'],
    contraindications: ['Diabetes', 'Severe Pitta disorders'],
    reference: 'Sharangdhara Samhita Madhyama Khanda 6/18',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'talisadi-churna',
    name: 'Talisadi Churna',
    sanskritName: 'तालीसादि चूर्ण',
    type: 'churna',
    ingredients: [
      { herb: 'Talispatra', quantity: '1 part', part: 'leaves' },
      { herb: 'Mishri', quantity: '1 part' },
      { herb: 'Vanshlochan', quantity: '1 part' },
      { herb: 'Ela', quantity: '1 part', part: 'seed' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Maricha', quantity: '1 part', part: 'fruit' },
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' },
      { herb: 'Dalchini', quantity: '1 part', part: 'bark' }
    ],
    indications: [
      'Cough',
      'Asthma',
      'Bronchitis',
      'Tuberculosis',
      'Fever',
      'Loss of appetite',
      'Indigestion',
      'Respiratory infections',
      'Voice disorders',
      'Chest congestion'
    ],
    dosage: {
      amount: '3-6g',
      frequency: '3-4 times daily',
      duration: '15-30 days'
    },
    anupana: ['Honey', 'Warm water', 'Milk'],
    contraindications: ['Diabetes', 'Hyperacidity'],
    reference: 'Sharangdhara Samhita Madhyama Khanda 6/17',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'lavangadi-vati',
    name: 'Lavangadi Vati',
    sanskritName: 'लवंगादि वटी',
    type: 'vati',
    ingredients: [
      { herb: 'Lavanga', quantity: '1 part', part: 'flower bud' },
      { herb: 'Karpoor', quantity: '1 part' },
      { herb: 'Jatiphala', quantity: '1 part', part: 'seed' },
      { herb: 'Javitri', quantity: '1 part', part: 'aril' },
      { herb: 'Akarkara', quantity: '1 part', part: 'root' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Cough',
      'Cold',
      'Sore throat',
      'Voice disorders',
      'Respiratory infections',
      'Asthma',
      'Bronchitis',
      'Loss of taste',
      'Dental problems',
      'Bad breath'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: '3-4 times daily',
      duration: '7-15 days'
    },
    anupana: ['Honey', 'Warm water'],
    contraindications: ['Hyperacidity', 'Pregnancy'],
    reference: 'Bhaishajya Ratnavali Kasaroga 15/45-52',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'arogyavardhini-vati',
    name: 'Arogyavardhini Vati',
    sanskritName: 'आरोग्यवर्धिनी वटी',
    type: 'vati',
    ingredients: [
      { herb: 'Parada', quantity: '1 part' },
      { herb: 'Gandhaka', quantity: '1 part' },
      { herb: 'Loha Bhasma', quantity: '1 part' },
      { herb: 'Abhrak Bhasma', quantity: '1 part' },
      { herb: 'Tamra Bhasma', quantity: '1 part' },
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Liver disorders',
      'Jaundice',
      'Hepatitis',
      'Skin diseases',
      'Fever',
      'Spleen disorders',
      'Anemia',
      'Digestive disorders',
      'Obesity',
      'Diabetes'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily after meals',
      duration: '1-3 months'
    },
    anupana: ['Warm water', 'Buttermilk', 'Honey water'],
    contraindications: ['Pregnancy', 'Lactation', 'Severe weakness'],
    reference: 'Rasa Ratna Samucchaya 25/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'mahamanjisthadi-kwath',
    name: 'Mahamanjisthadi Kwath',
    sanskritName: 'महामञ्जिष्ठादि क्वाथ',
    type: 'churna',
    ingredients: [
      { herb: 'Manjistha', quantity: '1 part', part: 'root' },
      { herb: 'Sariva', quantity: '1 part', part: 'root' },
      { herb: 'Khadira', quantity: '1 part', part: 'heartwood' },
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Daruhaldi', quantity: '1 part', part: 'stem' },
      { herb: 'Katuki', quantity: '1 part', part: 'rhizome' }
    ],
    indications: [
      'Skin diseases',
      'Blood disorders',
      'Eczema',
      'Psoriasis',
      'Urticaria',
      'Acne',
      'Boils',
      'Wounds',
      'Liver disorders',
      'Spleen disorders'
    ],
    dosage: {
      amount: '50-100ml',
      frequency: 'Twice daily before meals',
      duration: '1-3 months'
    },
    anupana: ['Honey', 'Warm water'],
    contraindications: ['Pregnancy', 'Severe anemia'],
    reference: 'Bhaishajya Ratnavali Kushtha Roga 54/78-95',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'panchatikta-ghrita',
    name: 'Panchatikta Ghrita',
    sanskritName: 'पञ्चतिक्त घृत',
    type: 'ghrita',
    ingredients: [
      { herb: 'Neem', quantity: '1 part', part: 'leaves' },
      { herb: 'Patola', quantity: '1 part', part: 'leaves' },
      { herb: 'Vasa', quantity: '1 part', part: 'leaves' },
      { herb: 'Kantakari', quantity: '1 part', part: 'whole plant' },
      { herb: 'Nimba', quantity: '1 part', part: 'bark' },
      { herb: 'Ghee', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Skin diseases',
      'Wounds',
      'Burns',
      'Eczema',
      'Psoriasis',
      'Fever',
      'Liver disorders',
      'Eye diseases',
      'Ear diseases',
      'Poisoning'
    ],
    dosage: {
      amount: '6-12g',
      frequency: 'Twice daily before meals',
      duration: '1-2 months'
    },
    anupana: ['Warm water', 'Milk'],
    contraindications: ['Severe cold', 'Excessive Kapha'],
    reference: 'Sushruta Samhita Chikitsa Sthana 17/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'mahatiktaka-ghrita',
    name: 'Mahatiktaka Ghrita',
    sanskritName: 'महातिक्तक घृत',
    type: 'ghrita',
    ingredients: [
      { herb: 'Patola', quantity: '1 part', part: 'leaves' },
      { herb: 'Nimba', quantity: '1 part', part: 'leaves' },
      { herb: 'Vasa', quantity: '1 part', part: 'leaves' },
      { herb: 'Saptaparna', quantity: '1 part', part: 'bark' },
      { herb: 'Kutaja', quantity: '1 part', part: 'bark' },
      { herb: 'Ghee', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Skin diseases',
      'Fever',
      'Liver disorders',
      'Spleen disorders',
      'Wounds',
      'Poisoning',
      'Eye diseases',
      'Epilepsy',
      'Mental disorders',
      'Blood disorders'
    ],
    dosage: {
      amount: '6-12g',
      frequency: 'Twice daily before meals',
      duration: '1-3 months'
    },
    anupana: ['Warm water', 'Milk'],
    contraindications: ['Severe cold', 'Excessive Kapha'],
    reference: 'Sushruta Samhita Chikitsa Sthana 18/78-95',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'kalyanaka-ghrita',
    name: 'Kalyanaka Ghrita',
    sanskritName: 'कल्याणक घृत',
    type: 'ghrita',
    ingredients: [
      { herb: 'Ghee', quantity: '1 part' },
      { herb: 'Haritaki', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Pippali', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Kakoli', quantity: '1/4 part', part: 'root' },
      { herb: 'Kshirakakoli', quantity: '1/4 part', part: 'root' },
      { herb: 'Jeevanti', quantity: '1/4 part', part: 'root' },
      { herb: 'Madhuka', quantity: '1/4 part', part: 'root' }
    ],
    indications: [
      'Infertility',
      'Sexual weakness',
      'General debility',
      'Memory disorders',
      'Nervous disorders',
      'Epilepsy',
      'Mental retardation',
      'Speech disorders',
      'Chronic fever',
      'Digestive weakness'
    ],
    dosage: {
      amount: '6-12g',
      frequency: 'Twice daily before meals',
      duration: '2-6 months'
    },
    anupana: ['Milk', 'Warm water'],
    contraindications: ['Obesity', 'High cholesterol'],
    reference: 'Sushruta Samhita Chikitsa Sthana 31/78-95',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'brahmi-ghrita',
    name: 'Brahmi Ghrita',
    sanskritName: 'ब्राह्मी घृत',
    type: 'ghrita',
    ingredients: [
      { herb: 'Brahmi', quantity: '1 part', part: 'whole plant' },
      { herb: 'Mandukaparni', quantity: '1 part', part: 'whole plant' },
      { herb: 'Shankhpushpi', quantity: '1 part', part: 'whole plant' },
      { herb: 'Jyotishmati', quantity: '1 part', part: 'seeds' },
      { herb: 'Ghee', quantity: '4 parts' },
      { herb: 'Milk', quantity: '16 parts' }
    ],
    indications: [
      'Memory disorders',
      'Mental retardation',
      'Epilepsy',
      'Insanity',
      'Speech disorders',
      'Learning disabilities',
      'Anxiety',
      'Depression',
      'Insomnia',
      'Nervous weakness'
    ],
    dosage: {
      amount: '6-12g',
      frequency: 'Twice daily before meals',
      duration: '3-6 months'
    },
    anupana: ['Milk', 'Warm water'],
    contraindications: ['Obesity', 'High cholesterol'],
    reference: 'Bhaishajya Ratnavali Unmada Chikitsa 24/45-52',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'mahanarayana-taila',
    name: 'Mahanarayana Taila',
    sanskritName: 'महानारायण तैल',
    type: 'taila',
    ingredients: [
      { herb: 'Bala', quantity: '1 part', part: 'root' },
      { herb: 'Ashwagandha', quantity: '1 part', part: 'root' },
      { herb: 'Shatavari', quantity: '1 part', part: 'root' },
      { herb: 'Rasna', quantity: '1 part', part: 'root' },
      { herb: 'Sesame oil', quantity: '4 parts' },
      { herb: 'Milk', quantity: '16 parts' }
    ],
    indications: [
      'Joint pain',
      'Arthritis',
      'Muscle weakness',
      'Paralysis',
      'Sciatica',
      'Back pain',
      'Nervous disorders',
      'General debility',
      'Sports injuries',
      'Chronic pain'
    ],
    dosage: {
      amount: 'For external massage',
      frequency: 'Once or twice daily',
      duration: 'As required'
    },
    anupana: ['External application only'],
    contraindications: ['Open wounds', 'Acute inflammation'],
    reference: 'Bhaishajya Ratnavali Vatavyadhi 29/145-165',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'kshirabala-taila',
    name: 'Kshirabala Taila',
    sanskritName: 'क्षीरबला तैल',
    type: 'taila',
    ingredients: [
      { herb: 'Bala', quantity: '1 part', part: 'root' },
      { herb: 'Sesame oil', quantity: '4 parts' },
      { herb: 'Milk', quantity: '16 parts' }
    ],
    indications: [
      'Nervous disorders',
      'Paralysis',
      'Facial palsy',
      'Joint pain',
      'Muscle weakness',
      'General debility',
      'Insomnia',
      'Anxiety',
      'Headache',
      'Chronic fatigue'
    ],
    dosage: {
      amount: '5-10ml for internal use, external massage',
      frequency: 'Once or twice daily',
      duration: 'As required'
    },
    anupana: ['Milk', 'Warm water'],
    contraindications: ['Acute fever', 'Severe Kapha disorders'],
    reference: 'Bhaishajya Ratnavali Vatavyadhi 29/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'dhanwantaram-taila',
    name: 'Dhanwantaram Taila',
    sanskritName: 'धन्वन्तरम् तैल',
    type: 'taila',
    ingredients: [
      { herb: 'Bala', quantity: '1 part', part: 'root' },
      { herb: 'Kulatha', quantity: '1 part', part: 'seeds' },
      { herb: 'Yava', quantity: '1 part', part: 'seeds' },
      { herb: 'Tila', quantity: '1 part', part: 'seeds' },
      { herb: 'Sesame oil', quantity: '4 parts' },
      { herb: 'Milk', quantity: '16 parts' }
    ],
    indications: [
      'Postpartum care',
      'Nervous disorders',
      'Joint pain',
      'Muscle weakness',
      'General debility',
      'Paralysis',
      'Pediatric disorders',
      'Digestive weakness',
      'Respiratory conditions',
      'Skin diseases'
    ],
    dosage: {
      amount: 'For external massage and internal use',
      frequency: 'Once or twice daily',
      duration: 'As required'
    },
    anupana: ['Milk', 'Warm water'],
    contraindications: ['Acute fever', 'Severe indigestion'],
    reference: 'Ashtanga Hridaya Uttara Sthana 2/78-95',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'hingwashtak-churna',
    name: 'Hingwashtak Churna',
    sanskritName: 'हिंग्वष्टक चूर्ण',
    type: 'churna',
    ingredients: [
      { herb: 'Hingu', quantity: '1 part' },
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' },
      { herb: 'Maricha', quantity: '1 part', part: 'fruit' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Ajmoda', quantity: '1 part', part: 'seeds' },
      { herb: 'Jeeraka', quantity: '1 part', part: 'seeds' },
      { herb: 'Krishna Jeeraka', quantity: '1 part', part: 'seeds' },
      { herb: 'Saindhava Lavana', quantity: '1 part' }
    ],
    indications: [
      'Loss of appetite',
      'Indigestion',
      'Flatulence',
      'Abdominal pain',
      'Constipation',
      'Irritable bowel syndrome',
      'Malabsorption',
      'Sprue',
      'Liver disorders',
      'Spleen disorders'
    ],
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily after meals',
      duration: '1-2 months'
    },
    anupana: ['Buttermilk', 'Warm water'],
    contraindications: ['Hyperacidity', 'Pitta disorders'],
    reference: 'Sharangdhara Samhita Madhyama Khanda 6/12',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'chitrakadi-vati',
    name: 'Chitrakadi Vati',
    sanskritName: 'चित्रकादि वटी',
    type: 'vati',
    ingredients: [
      { herb: 'Chitrak', quantity: '1 part', part: 'root' },
      { herb: 'Pippali', quantity: '1 part', part: 'fruit' },
      { herb: 'Maricha', quantity: '1 part', part: 'fruit' },
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' },
      { herb: 'Ajmoda', quantity: '1 part', part: 'seeds' },
      { herb: 'Saindhava Lavana', quantity: '1 part' }
    ],
    indications: [
      'Loss of appetite',
      'Indigestion',
      'Flatulence',
      'Constipation',
      'Obesity',
      'Liver disorders',
      'Spleen disorders',
      'Ascites',
      'Edema',
      'Arthritis'
    ],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily before meals',
      duration: '1-2 months'
    },
    anupana: ['Buttermilk', 'Warm water'],
    contraindications: ['Pregnancy', 'Pitta disorders', 'Peptic ulcer'],
    reference: 'Bhaishajya Ratnavali Agnimandya 6/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  }
];