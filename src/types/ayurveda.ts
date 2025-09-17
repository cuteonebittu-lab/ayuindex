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
  dosage: {
    powder: string;
    decoction: string;
    juice?: string;
    oil?: string;
  };
  anupana: string[];
  contraindications: string[];
  image?: string;
}

export type FormulationType = 'churna' | 'vati' | 'ghrita' | 'taila' | 'asava' | 'arishta' | 'bhasma' | 'rasa' | 'kashaya';

export interface Formulation {
  id: string;
  name: string;
  sanskritName: string;
  type: FormulationType;
  category?: string;
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
  };
  anupana: string[];
  contraindications: string[];
  preparation?: string;
  seasonalUsage?: string;
  reference: string;
  categories: string[];
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

export type SearchCategory = 'all' | 'herbs' | 'formulations';
export type FilterType = 'rasa' | 'guna' | 'virya' | 'type' | 'indication';