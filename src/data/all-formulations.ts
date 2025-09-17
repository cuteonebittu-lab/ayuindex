import { Formulation } from '../types/ayurveda';
import { 
  mentalHealthFormulations, 
  metabolicFormulations, 
  digestiveFormulations,
  musculoskeletalFormulations,
  bloodFormulations
} from './mental-health-formulations';

// Combine all formulations by category
export const categorizedFormulations = {
  mental: mentalHealthFormulations,
  metabolic: metabolicFormulations,
  digestive: digestiveFormulations,
  musculoskeletal: musculoskeletalFormulations,
  blood: bloodFormulations
};

// Export all formulations in a single array
export const allFormulations: Formulation[] = [
  ...mentalHealthFormulations,
  ...metabolicFormulations,
  ...digestiveFormulations,
  ...musculoskeletalFormulations,
  ...bloodFormulations
];
