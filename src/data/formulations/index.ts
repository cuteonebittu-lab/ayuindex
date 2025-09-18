import { Formulation } from '../../types/ayurveda';

// Import and export all individual formulation types
export { arishtas } from './arishtas';    // Fermented preparations
export { vatis } from './vatis';          // Tablets
export { kashayas } from './kashayas';    // Decoctions
export { ghritas } from './ghritas';      // Medicated ghee preparations
export { churnas } from './churnas';      // Powder preparations
export { tailas } from './tailas';        // Medicated oil preparations
export { bhasmas } from './bhasmas';      // Calcined preparations
export { guggulus } from './guggulus';    // Guggulu-based preparations
export { avalehas } from './avalehas';    // Linctus/Confection preparations
export { rasas } from './rasas';          // Mineral/Herbo-mineral preparations

// Re-import for local use in allFormulations
import { arishtas } from './arishtas';
import { vatis } from './vatis';
import { kashayas } from './kashayas';
import { ghritas } from './ghritas';
import { churnas } from './churnas';
import { tailas } from './tailas';
import { bhasmas } from './bhasmas';
import { rasas } from './rasas';
import { guggulus } from './guggulus';
import { avalehas } from './avalehas';

// Export a combined array of all formulations
export const allFormulations: Formulation[] = [
  ...arishtas,
  ...vatis,
  ...kashayas,
  ...ghritas,
  ...churnas,
  ...tailas,
  ...bhasmas,
  ...rasas,
  ...guggulus,
  ...avalehas
];
