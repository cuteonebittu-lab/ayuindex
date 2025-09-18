// Standard categories for Ayurvedic formulations
export type FormulationCategory = 
  | 'Digestive System'
  | 'Respiratory System'
  | 'Mental Health'
  | 'Women\'s Health'
  | 'Rejuvenative'
  | 'Fever'
  | 'Nervous System'
  | 'Urinary System'
  | 'Liver'
  | 'Blood'
  | 'Musculoskeletal'
  | 'Skin Health'
  | 'Metabolic Disorders'
  | 'Oral Health'
  | 'General Tonic';

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
  | 'kashaya'; // Decoction

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
  category: FormulationCategory;
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
  categories: FormulationCategory[];
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
}

export type SearchCategory = 'all' | 'herbs' | 'formulations';
export type FilterType = 'rasa' | 'guna' | 'virya' | 'type' | 'category';