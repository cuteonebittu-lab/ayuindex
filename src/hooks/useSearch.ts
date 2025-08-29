import { useState, useMemo } from 'react';
import { Herb, Formulation, SearchCategory } from '../types/ayurveda';

interface UseSearchProps {
  herbs: Herb[];
  formulations: Formulation[];
}

export function useSearch({ herbs, formulations }: UseSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [filters, setFilters] = useState({
    rasa: [] as string[],
    guna: [] as string[],
    virya: [] as string[],
    type: [] as string[]
  });

  const filteredResults = useMemo(() => {
    let filteredHerbs = herbs;
    let filteredFormulations = formulations;

    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      
      filteredHerbs = herbs.filter(herb =>
        herb.name.toLowerCase().includes(term) ||
        herb.sanskritName.includes(term) ||
        herb.botanicalName.toLowerCase().includes(term) ||
        herb.indications.some(indication => indication.toLowerCase().includes(term)) ||
        herb.rasa.some(rasa => rasa.toLowerCase().includes(term)) ||
        herb.guna.some(guna => guna.toLowerCase().includes(term))
      );

      filteredFormulations = formulations.filter(formulation =>
        formulation.name.toLowerCase().includes(term) ||
        formulation.sanskritName.includes(term) ||
        formulation.indications.some(indication => indication.toLowerCase().includes(term)) ||
        formulation.ingredients.some(ingredient => ingredient.herb.toLowerCase().includes(term))
      );
    }

    // Apply filters
    if (filters.rasa.length > 0) {
      filteredHerbs = filteredHerbs.filter(herb =>
        filters.rasa.some(rasa => herb.rasa.includes(rasa))
      );
    }

    if (filters.guna.length > 0) {
      filteredHerbs = filteredHerbs.filter(herb =>
        filters.guna.some(guna => herb.guna.includes(guna))
      );
    }

    if (filters.virya.length > 0) {
      filteredHerbs = filteredHerbs.filter(herb =>
        filters.virya.includes(herb.virya)
      );
    }

    if (filters.type.length > 0) {
      filteredFormulations = filteredFormulations.filter(formulation =>
        filters.type.includes(formulation.type)
      );
    }

    // Apply category filter
    switch (category) {
      case 'herbs':
        return { herbs: filteredHerbs, formulations: [] };
      case 'formulations':
        return { herbs: [], formulations: filteredFormulations };
      default:
        return { herbs: filteredHerbs, formulations: filteredFormulations };
    }
  }, [herbs, formulations, searchTerm, category, filters]);

  return {
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    filters,
    setFilters,
    filteredResults
  };
}