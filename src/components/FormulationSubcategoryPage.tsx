import { useParams, useLocation } from 'react-router-dom';
import { formulations } from '../data/index';
import { FormulationCard } from './FormulationCard';
import { Formulation } from '../types/ayurveda';
import { useState } from 'react';
import { FormulationDetail } from './FormulationDetail';
import { clinicalSystemMap } from '../data/categories/clinical-systems';

export function FormulationSubcategoryPage() {
  const { subcategory } = useParams<{ subcategory: string }>();
  const location = useLocation();
  const [selectedFormulation, setSelectedFormulation] = useState<Formulation | null>(null);

  const isClinicalSystem = location.pathname.startsWith('/clinical-systems');

  const filteredFormulations = formulations.filter((formulation) => {
    if (isClinicalSystem) {
      const systemName = Object.keys(clinicalSystemMap).find(
        key => clinicalSystemMap[key as keyof typeof clinicalSystemMap] === subcategory
      );
      return formulation.clinicalSystems.includes(systemName as any);
    } else {
      return formulation.type.toLowerCase() === subcategory?.toLowerCase().replace(/s$/, '');
    }
  });

  const title = isClinicalSystem
    ? Object.keys(clinicalSystemMap).find(key => clinicalSystemMap[key as keyof typeof clinicalSystemMap] === subcategory)
    : subcategory;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
        {title} ({filteredFormulations.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFormulations.map((formulation) => (
          <FormulationCard
            key={formulation.id}
            formulation={formulation}
            onClick={() => setSelectedFormulation(formulation)}
          />
        ))}
      </div>
      {selectedFormulation && (
        <FormulationDetail
          formulation={selectedFormulation}
          onClose={() => setSelectedFormulation(null)}
        />
      )}
    </div>
  );
}
