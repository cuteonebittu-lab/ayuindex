import { Formulation } from '../types/ayurveda';
import { validateUniqueFormulationIds } from './utils/formulation-validation';

// Import each formulation type
import { arishtas } from './formulations/arishtas';
import { vatis } from './formulations/vatis';
import { kashayas } from './formulations/kashayas';
import { ghritas } from './formulations/ghritas';
import { churnas } from './formulations/churnas';
import { tailas } from './formulations/tailas';
import { bhasmas } from './formulations/bhasmas';
import { rasas } from './formulations/rasas';

// Import categorized formulations
import { 
  mentalHealthFormulations, 
  metabolicFormulations, 
  digestiveFormulations,
  musculoskeletalFormulations,
  bloodFormulations 
} from './categories/category-formulations';

// Export formulations by type
export const formulationsByType = {
  arishtas,
  vatis,
  kashayas,
  ghritas,
  churnas,
  tailas,
  bhasmas,
  rasas,
};

// Export formulations by category
export const formulationsByCategory = {
  mental: mentalHealthFormulations,
  metabolic: metabolicFormulations,
  digestive: digestiveFormulations,
  musculoskeletal: musculoskeletalFormulations,
  blood: bloodFormulations
};

// Export all formulations in a single array
// Validate that there are no duplicate IDs across all formulation types
validateUniqueFormulationIds({
  arishtas,
  vatis,
  kashayas,
  ghritas,
  churnas,
  tailas,
  bhasmas,
  rasas
});

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
  ...arishtas,
  ...vatis,
  ...kashayas,
  ...ghritas,
  ...churnas,
  ...tailas,
  ...bhasmas,
  ...rasas,
  ...mentalHealthFormulations,
  ...metabolicFormulations,
  ...digestiveFormulations,
  ...musculoskeletalFormulations,
  ...bloodFormulations
];
