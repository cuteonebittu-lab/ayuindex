// Clinical System Categories
export type ClinicalSystem =
  | 'Respiratory System'
  | 'Cardiovascular System'
  | 'Digestive System'
  | 'Nervous System'
  | 'Endocrine System'
  | 'Musculoskeletal System'
  | 'Integumentary System'
  | 'Urinary System'
  | 'Reproductive System'
  | 'Immune System'
  | 'Hematopoietic System';

// Disease/Condition Categories
export type IndicationCategory =
  | 'Respiratory Conditions'     // Includes cough, asthma, bronchitis
  | 'Cardiovascular Conditions'  // Includes hypertension, heart diseases
  | 'Digestive Disorders'        // Includes indigestion, constipation
  | 'Neurological Disorders'     // Includes headache, paralysis
  | 'Mental Health'             // Includes anxiety, depression
  | 'Metabolic Disorders'        // Includes diabetes, obesity
  | 'Musculoskeletal Issues'    // Includes arthritis, joint pain
  | 'Skin Conditions'           // Includes eczema, psoriasis
  | 'Urinary Disorders'         // Includes UTI, kidney stones
  | 'Women\'s Health'           // Includes menstrual disorders, PCOS
  | 'Men\'s Health'             // Includes prostate issues, ED
  | 'Pediatric Conditions'      // Includes children's diseases
  | 'Geriatric Conditions'      // Includes age-related issues
  | 'Fever & Infections'        // Includes various types of fever
  | 'Eye Disorders'             // Includes conjunctivitis, glaucoma
  | 'ENT Conditions'            // Includes sinusitis, tonsillitis
  | 'Dental & Oral Health'      // Includes dental issues
  | 'General Health & Wellness'; // Includes rejuvenation, immunity

// Traditional Ayurvedic Categories
export type TraditionalCategory = 
  | 'Rasayana'      // Rejuvenative
  | 'Deepana'       // Digestive stimulant
  | 'Pachana'       // Digestive
  | 'Anulomana'     // Carminative
  | 'Virechana'     // Purgative
  | 'Vatahara'      // Vata pacifying
  | 'Pittahara'     // Pitta pacifying
  | 'Kaphahara'     // Kapha pacifying
  | 'Tridoshahara'  // Balances all doshas
  | 'Balya'         // Strength promoting
  | 'Medhya'        // Intellect promoting
  | 'Chakshushya'   // Good for eyes
  | 'Hridya'        // Cardiac tonic
  | 'Jwaraghna'     // Antipyretic
  | 'Shothahara'    // Anti-inflammatory
  | 'Vedanasthapana' // Analgesic
  | 'Am Pachak';    // Toxin digester

// Standard Ayurvedic formulation types
export type FormulationType = 
  | 'churna'   // Powder
  | 'vati'     // Tablet
  | 'ghrita'   // Medicated Ghee
  | 'taila'    // Medicated Oil
  | 'asava'    // Fermented Liquid
  | 'arishta'  // Fermented Decoction
  | 'bhasma'   // Calcined Mineral
  | 'rasa'     // Mineral/Herbo-mineral
  | 'kashaya'  // Decoction
  | 'kadha'    // Decoction (alternative term)
  | 'guggulu'  // Guggulu-based preparations
  | 'avaleha'  // Linctus/Confection
  | 'syrup';   // Syrup

// Dosage forms and their standard measurements
export type DosageForm = {
  powder?: string;   // in grams
  tablet?: string;   // in mg or number
  liquid?: string;   // in ml
  oil?: string;      // in ml
  ghee?: string;     // in grams
};

// Extended Formulation interface with standardized fields
export interface Formulation {
  id: string;
  name: string;
  sanskritName: string;
  type: FormulationType;
  clinicalSystems: ClinicalSystem[];
  indicationCategories: IndicationCategory[];
  traditionalCategories: TraditionalCategory[];
  ingredients: {
    herb: string;
    quantity: string;
    part?: string;
  }[];
  indications: string[];
  dosage: {
    amount: string;
    frequency: string;
    duration: string;
    form?: DosageForm;
  };
  anupana: string[];
  contraindications: string[];
  preparation?: string;
  seasonalUsage?: string;
  reference: string;
  adultDosage?: string;
  paediatricDosage?: string;
  doseAdjustment?: {
    hepatic?: string;
    renal?: string;
    diabetes?: string;
    hypertension?: string;
    [key: string]: string | undefined;
  };
  pregnancyLactation?: string;
  modeOfAction?: string;
  adverseDrugReactions?: string;
  interactions?: string;
  contraindicationsWarnings?: string;
  generalConsiderations?: string;
  image?: string;
  brands?: Brand[];
}

export interface Brand {
  name: string;
  products: {
    name: string;
    price: number;
    quantity: string;
  }[];
}

export interface Herb {
  id: string;
  name: string;
  sanskritName: string;
  botanicalName: string;
  family: string;
  parts: string[];
  rasa: string[];
  guna: string[];
  virya: string;
  vipaka: string;
  prabhava?: string;
  indications: string[];
  dosage: DosageForm;
  anupana: string[];
  contraindications: string[];
  image?: string;
  brands?: Brand[];
}

export type SearchCategory = 'all' | 'herbs' | 'formulations';
export type FilterType = 'rasa' | 'guna' | 'virya' | 'type' | 'category';
