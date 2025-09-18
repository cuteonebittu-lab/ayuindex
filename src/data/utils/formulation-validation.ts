import { Formulation } from '../../types/ayurveda';

/**
 * Checks for duplicate formulation IDs across different formulation arrays
 * @param formulations Object containing arrays of formulations to check
 * @returns Array of duplicate IDs found, empty if no duplicates
 */
export function findDuplicateFormulationIds(formulations: Record<string, Formulation[]>): string[] {
  const idMap = new Map<string, string[]>();
  const duplicates = new Set<string>();

  // First pass: collect all IDs and their sources
  Object.entries(formulations).forEach(([source, formulationArray]) => {
    formulationArray.forEach(formulation => {
      const sources = idMap.get(formulation.id) || [];
      sources.push(source);
      idMap.set(formulation.id, sources);
    });
  });

  // Second pass: find duplicates
  idMap.forEach((sources, id) => {
    if (sources.length > 1) {
      duplicates.add(`ID '${id}' found in: ${sources.join(', ')}`);
    }
  });

  return Array.from(duplicates);
}

/**
 * Throws an error if duplicate formulation IDs are found
 * @param formulations Object containing arrays of formulations to validate
 * @throws Error if duplicates are found
 */
export function validateUniqueFormulationIds(formulations: Record<string, Formulation[]>): void {
  const duplicates = findDuplicateFormulationIds(formulations);
  if (duplicates.length > 0) {
    throw new Error('Duplicate formulation IDs found:\n' + duplicates.join('\n'));
  }
}
