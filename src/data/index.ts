import { Formulation } from '../types/ayurveda';

// Import all formulation categories
import { arishtas } from './formulations/arishtas';
import { vatis } from './formulations/vatis';
import { kashayas } from './formulations/kashayas';
import { ghritas } from './formulations/ghritas';
import { churnas } from './formulations/churnas';
import { tailas } from './formulations/tailas';
import { bhasmas } from './formulations/bhasmas';
import { rasas } from './formulations/rasas';

// Export categorized formulations for easy access
export const categorizedFormulations = {
  arishtas,
  vatis,
  kashayas,
  ghritas,
  churnas,
  tailas,
  bhasmas,
  rasas,
};

// Export main formulations array including all categories
export const formulations: Formulation[] = [
  ...arishtas,
  ...vatis,
  ...kashayas,
  ...ghritas,
  ...churnas,
  ...tailas,
  ...bhasmas,
  ...rasas,
];
