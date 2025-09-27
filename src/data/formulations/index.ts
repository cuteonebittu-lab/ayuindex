import { Formulation } from '../../types/ayurveda';

// Import all individual formulation types
import { arishtas } from './arishtas';
import { vatis } from './vatis';
import { kashayas } from './kashayas';
import { ghritas } from './ghritas';
import { churnas } from './churnas';
import { tailas } from './tailas';
import { bhasmas } from './bhasmas';
import { guggulus } from './guggulus';
import { avalehas } from './avalehas';
import { rasas } from './rasas';
import { syrups } from './syrups';

// Export formulations grouped by type
export const formulationsByType = {
  arishtas,
  vatis,
  kashayas,
  ghritas,
  churnas,
  tailas,
  bhasmas,
  rasas,
  guggulus,
  avalehas,
  syrups,
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
  ...rasas,
  ...guggulus,
  ...avalehas,
  ...syrups
];
