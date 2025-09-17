import { Formulation } from '../types/ayurveda';
import { arishtas, vatis, kashayas, ghritas } from './additional-formulations';
import { 
  additionalArishtas, 
  additionalVatis, 
  additionalKashayas, 
  additionalGhritas 
} from './classical-formulations-2';
import { allFormulations, categorizedFormulations as newFormulations } from './all-formulations';

// Categorized formulations for easy access
export const categorizedFormulations = {
  ...newFormulations,
  arishtas: [...arishtas, ...additionalArishtas],
  vatis: [...vatis, ...additionalVatis],
  kashayas: [...kashayas, ...additionalKashayas],
  ghritas: [...ghritas, ...additionalGhritas],
};

// Main formulations array including all categories
export const formulations: Formulation[] = [
  ...arishtas,
  ...vatis,
  ...kashayas,
  ...ghritas,
  ...additionalArishtas,
  ...additionalVatis,
  ...additionalKashayas,
  ...additionalGhritas,
  ...allFormulations,
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

        'Sexual weakness',
        'Nervous disorders',
        'Insomnia',
        'Arthritis',
        'Skin diseases',
        'Anemia',
        'Chronic fatigue',
        'Stress disorders'
      ],
    categories: ['Anti-microbial', 'Anti-inflammatory', 'Respiratory System', 'Hepatoprotective agents', 'Gastro Intestinal Tract', 'Blood', 'Kidney and Uro-genital'],
    adultDosage: '15-30ml twice daily after meals',
  paediatricDosage: '7-15ml twice daily after meals',
  doseAdjustment: {},
  pregnancyLactation: '',
  modeOfAction: '',
  adverseDrugReactions: '',
  interactions: '',
  contraindicationsWarnings: '',
  generalConsiderations: '',
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '3-6 months'
    },
  anupana: ['Equal quantity of water'],
  contraindications: ['Diabetes', 'Acute fever'],
  reference: 'Bhaishajya Ratnavali Vajikarana 74/78-85',
  image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
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
      { herb: 'Shunthi', quantity: '1 part', part: 'rhizome' }
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
    categories: ['Anti-microbial', 'Anti-inflammatory', 'Respiratory System', 'Hepatoprotective agents', 'Gastro Intestinal Tract', 'Blood', 'Kidney and Uro-genital'],
    adultDosage: '12-24g once or twice daily',
    paediatricDosage: '6-12g once or twice daily',
    doseAdjustment: {
      hepatic: 'Use with caution, reduce dose if hepatic impairment is severe',
      renal: 'No specific adjustment required',
      diabetes: 'Use sugar-free version',
      hypertension: 'No specific adjustment required'
    },
    pregnancyLactation: 'Generally considered safe, but consult physician',
    modeOfAction: 'Acts as a rejuvenative, immunomodulator, and antioxidant',
    adverseDrugReactions: 'Rare; may cause mild GI upset in sensitive individuals',
    interactions: 'May interact with immunosuppressants; monitor if on such therapy',
    contraindicationsWarnings: 'Diabetes (use sugar-free version), acute fever',
    generalConsiderations: 'Best taken with milk or warm water; long-term use is safe',
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
  categories: ['Musculoskeletal', 'Nervous System', 'General debility', 'Digestive'],
    indications: [
      'Vata disorders',
      'Joint pain',
      'Backache',
      'Sciatica',
      'Postpartum care',
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
  // categories property already present above, removed duplicate
    adultDosage: '3-6g once daily at bedtime',
    paediatricDosage: '1-3g once daily at bedtime',
    doseAdjustment: {
      hepatic: 'Reduce dose if severe hepatic impairment',
      renal: 'Use with caution in renal impairment',
      diabetes: 'Safe',
      hypertension: 'Safe'
    },
    pregnancyLactation: 'Avoid in pregnancy due to laxative effect',
    modeOfAction: 'Regulates digestion, acts as mild laxative and antioxidant',
    adverseDrugReactions: 'May cause loose stools or abdominal cramps in high doses',
    interactions: 'May enhance effects of other laxatives',
  // removed duplicate contraindications
    generalConsiderations: 'Best taken at bedtime; ensure adequate hydration',
    dosage: {
      amount: '3-6g',
      frequency: 'Twice daily before meals',
      duration: '1-2 months'
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
      'Arthritis',
      'Skin diseases',
      'Anemia',
      'Chronic fatigue',
      'Stress disorders'
    ],
    categories: ['Cardiovascular', 'Anti-hypertensive', 'Blood', 'Nervous System', 'Anti-migraine', 'Anti-inflammatory', 'Gastro Intestinal Tract', 'General debility'],
    adultDosage: '15-30ml twice daily after meals',
    paediatricDosage: '7-15ml twice daily after meals',
    doseAdjustment: {},
    pregnancyLactation: '',
    modeOfAction: '',
    adverseDrugReactions: '',
    interactions: '',
    contraindicationsWarnings: '',
    generalConsiderations: '',
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '3-6 months'
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
      { herb: 'Kharjura', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Heart diseases',
      'Cardiac weakness',
      'Hypertension',
      'Angina',
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
    categories: ['Cardiovascular', 'Respiratory System', 'General debility', 'Blood', 'Gastro Intestinal Tract', 'Kidney and Uro-genital'],
    adultDosage: '15-30ml twice daily after meals',
    paediatricDosage: '7-15ml twice daily after meals',
    doseAdjustment: {},
    pregnancyLactation: '',
    modeOfAction: '',
    adverseDrugReactions: '',
    interactions: '',
    contraindicationsWarnings: '',
    generalConsiderations: '',
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
    categories: ['Liver', 'Digestive', 'Blood', 'Skin'],
    adultDosage: '15-30ml twice daily after meals',
    paediatricDosage: '7-15ml twice daily after meals',
    doseAdjustment: {},
    pregnancyLactation: '',
    modeOfAction: '',
    adverseDrugReactions: '',
    interactions: '',
    contraindicationsWarnings: '',
    generalConsiderations: '',
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
  categories: ['Digestive', 'Liver', 'Blood', 'General debility'],
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
  categories: ['Nervous System', 'General debility', 'Musculoskeletal', 'Urinary'],
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
  categories: ['Urinary', 'Metabolic', 'Reproductive', 'Musculoskeletal', 'Skin', 'Digestive'],
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
  categories: ['Endocrine', 'Lymphatic', 'Skin', 'Reproductive', 'Metabolic', 'Musculoskeletal'],
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
  categories: ['Musculoskeletal', 'Nervous System', 'Urinary', 'Skin', 'Digestive', 'Metabolic'],
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
  categories: ['Blood', 'Liver', 'Digestive', 'Skin', 'General debility'],
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
  categories: ['Digestive', 'Gastro Intestinal Tract', 'Liver'],
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
  // categories replaced below with correct values
    adultDosage: '3-6g once daily at bedtime',
    paediatricDosage: '1-3g once daily at bedtime',
    doseAdjustment: {
      hepatic: 'Reduce dose if severe hepatic impairment',
      renal: 'Use with caution in renal impairment',
      diabetes: 'Safe',
      hypertension: 'Safe'
    },
    pregnancyLactation: 'Avoid in pregnancy due to laxative effect',
    modeOfAction: 'Regulates digestion, acts as mild laxative and antioxidant',
    adverseDrugReactions: 'May cause loose stools or abdominal cramps in high doses',
    interactions: 'May enhance effects of other laxatives',
    contraindicationsWarnings: 'Diarrhea, pregnancy, severe dehydration',
    generalConsiderations: 'Best taken at bedtime; ensure adequate hydration',
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
  categories: ['Respiratory System', 'Digestive', 'Infectious', 'General debility'],
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
  categories: ['Respiratory System', 'ENT', 'Infectious', 'Digestive'],
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
  categories: ['Liver', 'Digestive', 'Skin', 'Blood', 'Metabolic'],
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
      frequency: 'Twice daily after meals',
      duration: '1-3 months'
    },
    categories: ['Respiratory System', 'Anti-inflammatory', 'Anti-rheumatic', 'Kidney and Uro-genital', 'Nervous System'],
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
  categories: ['Skin', 'Liver', 'Infectious', 'General debility'],
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
  categories: ['Skin', 'Liver', 'Blood', 'Nervous System', 'Infectious'],
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
  categories: ['Reproductive', 'Nervous System', 'General debility', 'Digestive'],
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
    name: 'Brahmi Ghrita',
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
  categories: ['Nervous System', 'Mental Health', 'General debility'],
  adultDosage: '3-6g once daily at bedtime',
  paediatricDosage: '1-3g once daily at bedtime',
  doseAdjustment: {
    hepatic: 'Reduce dose if severe hepatic impairment',
    renal: 'Use with caution in renal impairment',
    diabetes: 'Safe',
    hypertension: 'Safe'
  },
  pregnancyLactation: 'Avoid in pregnancy due to laxative effect',
  modeOfAction: 'Regulates digestion, acts as mild laxative and antioxidant',
  adverseDrugReactions: 'May cause loose stools or abdominal cramps in high doses',
  interactions: 'May enhance effects of other laxatives',
  contraindicationsWarnings: 'Diarrhea, pregnancy, severe dehydration',
  generalConsiderations: 'Best taken at bedtime; ensure adequate hydration',
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
  categories: ['Musculoskeletal', 'Nervous System', 'General debility', 'Pain'],
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
  categories: ['Nervous System', 'Musculoskeletal', 'General debility'],
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
  categories: ['Nervous System', 'Musculoskeletal', 'General debility', 'Pediatric', 'Digestive', 'Respiratory System', 'Skin'],
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
  categories: ['Digestive', 'Liver', 'Gastro Intestinal Tract'],
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
  categories: ['Digestive', 'Liver', 'Metabolic', 'Musculoskeletal'],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily before meals',
      duration: '1-2 months'
    },
    anupana: ['Buttermilk', 'Warm water'],
    contraindications: ['Pregnancy', 'Pitta disorders', 'Peptic ulcer'],
    reference: 'Bhaishajya Ratnavali Agnimandya 6/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
    },
  {
    id: 'saraswatarishta',
    name: 'Saraswatarishta',
    sanskritName: 'सारस्वतारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Brahmi', quantity: '1 part', part: 'whole plant' },
      { herb: 'Shankhpushpi', quantity: '1 part', part: 'whole plant' },
      { herb: 'Vacha', quantity: '1/2 part', part: 'rhizome' },
      { herb: 'Ashwagandha', quantity: '1/2 part', part: 'root' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Memory disorders',
      'Mental fatigue',
      'Speech disorders',
      'Learning disabilities',
      'Anxiety',
      'Insomnia',
      'Nervous weakness',
      'Epilepsy',
      'ADHD',
      'Cognitive decline'
    ],
    categories: ['Nervous System', 'Mental Health', 'Cognitive'],
    adultDosage: '15-30ml twice daily after meals',
    paediatricDosage: '7-15ml twice daily after meals',
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '3-6 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes', 'Obesity'],
    reference: 'Bhaishajya Ratnavali Unmada Chikitsa 25/45-52',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'dashamularishta',
    name: 'Dashamularishta',
    sanskritName: 'दशमूलारिष्ट',
    type: 'arishta',
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
      { herb: 'Gokshura', quantity: '1 part', part: 'root' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Vata disorders',
      'Joint pain',
      'Backache',
      'Sciatica',
      'Postpartum care',
      'General debility',
      'Nervous disorders',
      'Arthritis',
      'Muscle weakness',
      'Chronic fatigue'
    ],
    categories: ['Musculoskeletal', 'Nervous System', 'General debility'],
    adultDosage: '15-30ml twice daily after meals',
    paediatricDosage: '7-15ml twice daily after meals',
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Diabetes', 'Acute fever'],
    reference: 'Bhaishajya Ratnavali Vatavyadhi 28/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'triphala-guggulu',
    name: 'Triphala Guggulu',
    sanskritName: 'त्रिफला गुग्गुलु',
    type: 'vati',
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Shunthi', quantity: '1/4 part', part: 'rhizome' },
      { herb: 'Maricha', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Pippali', quantity: '1/4 part', part: 'fruit' }
    ],
    indications: [
      'Piles',
      'Constipation',
      'Digestive disorders',
      'Obesity',
      'Arthritis',
      'Skin diseases',
      'Wound healing',
      'Diabetes',
      'Liver disorders',
      'Blood purification'
    ],
    categories: ['Digestive', 'Metabolic', 'Musculoskeletal', 'Skin'],
    adultDosage: '1-2 tablets twice daily after meals',
    paediatricDosage: '1/2-1 tablet twice daily after meals',
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily after meals',
      duration: '1-3 months'
    },
    anupana: ['Warm water', 'Honey water'],
    contraindications: ['Pregnancy', 'Diarrhea', 'Severe weakness'],
    reference: 'Bhaishajya Ratnavali Arsha Chikitsa 9/45-52',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'kaishore-guggulu',
    name: 'Kaishore Guggulu',
    sanskritName: 'कैशोर गुग्गुलु',
    type: 'vati',
    ingredients: [
      { herb: 'Guggulu', quantity: '1 part' },
      { herb: 'Guduchi', quantity: '1 part', part: 'stem' },
      { herb: 'Triphala', quantity: '1 part' },
      { herb: 'Ginger', quantity: '1/4 part', part: 'rhizome' },
      { herb: 'Black pepper', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Long pepper', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Vidanga', quantity: '1/4 part', part: 'fruit' }
    ],
    indications: [
      'Skin diseases',
      'Acne',
      'Boils',
      'Abscesses',
      'Joint inflammation',
      'Gout',
      'Rheumatism',
      'Blood disorders',
      'Liver disorders',
      'Metabolic disorders'
    ],
    categories: ['Skin', 'Musculoskeletal', 'Blood', 'Liver'],
    adultDosage: '1-2 tablets twice daily after meals',
    paediatricDosage: '1/2-1 tablet twice daily after meals',
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Twice daily after meals',
      duration: '2-4 months'
    },
    anupana: ['Warm water', 'Honey'],
    contraindications: ['Pregnancy', 'Lactation', 'Severe anemia'],
    reference: 'Bhaishajya Ratnavali Kushtha Roga 55/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'dasamoola-kashaya',
    name: 'Dasamoola Kashaya',
    sanskritName: 'दशमूल कषाय',
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
      'Respiratory conditions',
      'Fever',
      'General debility',
      'Postpartum care',
      'Nervous disorders',
      'Chronic inflammation'
    ],
    categories: ['Musculoskeletal', 'Respiratory System', 'General debility'],
    adultDosage: '50-100ml twice daily',
    paediatricDosage: '25-50ml twice daily',
    dosage: {
      amount: '50-100ml',
      frequency: 'Twice daily',
      duration: '2-4 weeks'
    },
    anupana: ['Honey', 'Ghee', 'Warm water'],
    contraindications: ['Pregnancy', 'Severe Pitta conditions'],
    reference: 'Charaka Samhita Chikitsa Sthana 3/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'triphala-kashaya',
    name: 'Triphala Kashaya',
    sanskritName: 'त्रिफला कषाय',
    type: 'churna',
    ingredients: [
      { herb: 'Haritaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Bibhitaki', quantity: '1 part', part: 'fruit' },
      { herb: 'Amalaki', quantity: '1 part', part: 'fruit' }
    ],
    indications: [
      'Digestive disorders',
      'Constipation',
      'Eye diseases',
      'Skin problems',
      'Diabetes',
      'Liver disorders',
      'Immune boosting',
      'Detoxification',
      'Weight management',
      'Anti-aging'
    ],
    categories: ['Digestive', 'Ophthalmology', 'Skin', 'Metabolic'],
    adultDosage: '50-100ml twice daily',
    paediatricDosage: '25-50ml twice daily',
    dosage: {
      amount: '50-100ml',
      frequency: 'Twice daily',
      duration: '1-2 months'
    },
    anupana: ['Honey', 'Ghee', 'Warm water'],
    contraindications: ['Diarrhea', 'Severe weakness'],
    reference: 'Charaka Samhita Sutra Sthana 4/8',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'ashokarishta',
    name: 'Ashokarishta',
    sanskritName: 'अशोकारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Ashoka', quantity: '1 part', part: 'bark' },
      { herb: 'Lodhra', quantity: '1/2 part', part: 'bark' },
      { herb: 'Dhataki', quantity: '1/4 part', part: 'flower' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Menstrual disorders',
      'Menorrhagia',
      'Dysmenorrhea',
      'Leucorrhea',
      'Uterine disorders',
      'PCOS',
      'Infertility',
      'Postpartum care',
      'Hormonal imbalance',
      'Pelvic inflammatory disease'
    ],
    categories: ['Gynecological', 'Reproductive', 'Hormonal'],
    adultDosage: '15-30ml twice daily after meals',
    paediatricDosage: '7-15ml twice daily after meals',
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '3-6 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Diabetes'],
    reference: 'Bhaishajya Ratnavali Yonivyapat 61/45-52',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
  {
    id: 'punarnavarishta',
    name: 'Punarnavarishta',
    sanskritName: 'पुनर्नवारिष्ट',
    type: 'arishta',
    ingredients: [
      { herb: 'Punarnava', quantity: '1 part', part: 'root' },
      { herb: 'Guduchi', quantity: '1/2 part', part: 'stem' },
      { herb: 'Shunthi', quantity: '1/4 part', part: 'rhizome' },
      { herb: 'Maricha', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Pippali', quantity: '1/4 part', part: 'fruit' },
      { herb: 'Jaggery', quantity: '4 parts' },
      { herb: 'Water', quantity: '16 parts' }
    ],
    indications: [
      'Edema',
      'Ascites',
      'Kidney disorders',
      'Liver disorders',
      'Heart diseases',
      'Anemia',
      'Obesity',
      'Respiratory disorders',
      'General debility',
      'Chronic inflammation'
    ],
    categories: ['Renal', 'Hepatic', 'Cardiovascular', 'Metabolic'],
    adultDosage: '15-30ml twice daily after meals',
    paediatricDosage: '7-15ml twice daily after meals',
    dosage: {
      amount: '15-30ml',
      frequency: 'Twice daily after meals',
      duration: '2-3 months'
    },
    anupana: ['Equal quantity of water'],
    contraindications: ['Pregnancy', 'Severe dehydration'],
    reference: 'Bhaishajya Ratnavali Shotha Chikitsa 33/78-85',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
  },
];
