import { Formulation } from '../../types/ayurveda.ts';

// Import all individual formulation types
import { arishtas } from './arishtas.ts';
import { vatis } from './vatis.ts';
import { kashayas } from './kashayas.ts';
import { ghritas } from './ghritas.ts';
import { churnas } from './churnas.ts';
import { tailas } from './tailas.ts';
import { bhasmas } from './bhasmas.ts';
import { guggulus } from './guggulus.ts';
import { avalehas } from './avalehas.ts';
import { rasas } from './rasas.ts';
import { syrups } from './syrups.ts';
import { commercialProducts } from './commercial-products.ts';

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
  commercialProducts,
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
  ...syrups,
  ...commercialProducts
];
