// Export all clinical system categorized formulations
export * from './respiratory';
export * from './cardiovascular';
export * from './digestive';

// Index file for clinical system categories
import { ClinicalSystem } from '../../../types/ayurveda';

// Map of clinical systems to their formulations
export const clinicalSystemMap = {
  'Respiratory System': 'respiratory',
  'Cardiovascular System': 'cardiovascular',
  'Digestive System': 'digestive',
  // Add other systems as they are implemented
} as const;