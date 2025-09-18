import { Formulation } from '../../types/ayurveda';

// Import all individual formulation types
import { arishtas } from './arishtas';
import { vatis } from './vatis';
import { kashayas } from './kashayas';
import { ghritas } from './ghritas';
import { churnas } from './churnas';
import { tailas } from './tailas';
import { bhasmas } from './bhasmas';
import { rasas } from './rasas';

// Export all individual formulation types
export {
  arishtas,
  vatis,
  kashayas,
  ghritas,
  churnas,
  tailas,
  bhasmas,
  rasas
};

// Export a combined array of all formulations
export const allFormulations: Formulation[] = [
  ...arishtas,
  ...vatis,
  ...kashayas,
  ...ghritas,
  ...churnas,
  ...tailas,
  ...bhasmas,
  ...rasas
];
