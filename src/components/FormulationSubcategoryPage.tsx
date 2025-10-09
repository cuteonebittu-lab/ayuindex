import { useParams, useLocation } from 'react-router-dom';
import { FormulationCard } from './FormulationCard';
import { Formulation } from '../types/ayurveda';
import { useState, useEffect } from 'react';
import { clinicalSystemMap } from '../data/categories/clinical-systems';
import { formulationApi } from '../services/api';

export function FormulationSubcategoryPage() {
  const { subcategory } = useParams<{ subcategory: string }>();
  const location = useLocation();
  const [formulations, setFormulations] = useState<Formulation[]>([]);
  const [loading, setLoading] = useState(true);

  const isClinicalSystem = location.pathname.startsWith('/clinical-systems');

  // Load formulations from API
  useEffect(() => {
    const loadFormulations = async () => {
      try {
        setLoading(true);
        const formulationsData = await formulationApi.getAll();
        setFormulations(formulationsData);
      } catch (error) {
        console.error('Error loading formulations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFormulations();
  }, []);

  const filteredFormulations = formulations.filter((formulation: Formulation) => {
    if (isClinicalSystem) {
      const systemName = Object.keys(clinicalSystemMap).find(
        key => clinicalSystemMap[key as keyof typeof clinicalSystemMap] === subcategory
      );
      return formulation.clinicalSystems.includes(systemName as keyof typeof clinicalSystemMap);
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
      
      {loading ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-gray-400 text-2xl">⏳</span>
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">Loading formulations...</h3>
          <p className="text-gray-500">Please wait while we load the data</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFormulations.map((formulation) => (
              <FormulationCard
                key={formulation.id}
                formulation={formulation}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
