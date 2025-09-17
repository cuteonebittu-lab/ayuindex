import { Formulation } from '../types/ayurveda';
import { arishtas } from './formulations/arishtas';
import { vatis } from './formulations/vatis';
import { kashayas } from './formulations/kashayas';
import { ghritas } from './formulations/ghritas';
import { churnas } from './formulations/churnas';
import { tailas } from './formulations/tailas';
import { bhasmas } from './formulations/bhasmas';
import { rasas } from './formulations/rasas';

import { 
  mentalHealthFormulations, 
  metabolicFormulations, 
  digestiveFormulations,
  musculoskeletalFormulations,
  bloodFormulations
} from './categories/mental-health-formulations';

// Organize formulations by type
export const formulationsByType = {
  arishtas,
  vatis,
  kashayas,
  ghritas,
  churnas,
  tailas,
  bhasmas,
  rasas
};

// Organize formulations by category
export const formulationsByCategory = {
  mental: mentalHealthFormulations,
  metabolic: metabolicFormulations,
  digestive: digestiveFormulations,
  musculoskeletal: musculoskeletalFormulations,
  blood: bloodFormulations
};

// Combined formulations array
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
