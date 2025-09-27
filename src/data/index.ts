import { Formulation } from '../types/ayurveda';
import { validateUniqueFormulationIds } from './utils/formulation-validation';

// Import all formulations and formulations by type from the centralized formulations index
import { allFormulations, formulationsByType } from './formulations/index';

// Import categorized formulations
import { 
  mentalHealthFormulations, 
  metabolicFormulations, 
  digestiveFormulations,
  musculoskeletalFormulations,
  bloodFormulations 
} from './categories/category-formulations';

// Export formulations by type
export { formulationsByType };

// Export formulations by category
export const formulationsByCategory = {
  mental: mentalHealthFormulations,
  metabolic: metabolicFormulations,
  digestive: digestiveFormulations,
  musculoskeletal: musculoskeletalFormulations,
  blood: bloodFormulations
};

// Validate that there are no duplicate IDs across all formulation types
validateUniqueFormulationIds(formulationsByType);

// Validate that there are no duplicate IDs across all category-based formulations
validateUniqueFormulationIds({
  mentalHealth: mentalHealthFormulations,
  metabolic: metabolicFormulations,
  digestive: digestiveFormulations,
  musculoskeletal: musculoskeletalFormulations,
  blood: bloodFormulations
});

// Combine all formulations into a single array
export const formulations: Formulation[] = [
  ...allFormulations,
  ...mentalHealthFormulations,
  ...metabolicFormulations,
  ...digestiveFormulations,
  ...musculoskeletalFormulations,
  ...bloodFormulations
];
