import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FilterPanel } from './components/FilterPanel';
import { Stats } from './components/Stats';
import { HerbCard } from './components/HerbCard';
import { FormulationCard } from './components/FormulationCard';
import { HerbDetail } from './components/HerbDetail';
import { FormulationDetail } from './components/FormulationDetail';
import { useSearch } from './hooks/useSearch';
import { herbs } from './data/herbs';
import { formulations } from './data/index';
import { Herb, Formulation, FormulationType } from './types/ayurveda';

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [selectedFormulation, setSelectedFormulation] = useState<Formulation | null>(null);

  const {
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    filters,
    setFilters,
    filteredResults
  } = useSearch({ herbs, formulations });

  // Initialize filters with new category array
  React.useEffect(() => {
    setFilters(prev => ({
      ...prev,
      category: []
    }));
  }, []);

  const handleFormulationTypeSelect = (type: string) => {
    setCategory('formulations');
    setFilters({
      rasa: [],
      guna: [],
      virya: [],
      type: [type as FormulationType],
      category: []
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Stats
          herbCount={herbs.length}
          formulationCount={formulations.length}
          onFormulationTypeSelect={handleFormulationTypeSelect}
        />
        
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <FilterPanel
          show={showFilters}
          onClose={() => setShowFilters(false)}
          filters={filters}
          setFilters={setFilters}
        />

        {/* Results */}
        <div className="space-y-8">
          {/* Herbs Section */}
          {(category === 'all' || category === 'herbs') && filteredResults.herbs.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm">H</span>
                </div>
                Single Herbs ({filteredResults.herbs.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.herbs.map((herb) => (
                  <HerbCard
                    key={herb.id}
                    herb={herb}
                    onClick={() => setSelectedHerb(herb)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Formulations Section */}
          {(category === 'all' || category === 'formulations') && filteredResults.formulations.length > 0 && (
            <section>
              <div>
                {Object.entries(
                  filteredResults.formulations.reduce((acc, formulation) => {
                    if (!acc[formulation.type]) {
                      acc[formulation.type] = [];
                    }
                    acc[formulation.type].push(formulation);
                    return acc;
                  }, {} as Record<string, Formulation[]>)
                ).map(([type, formulationsOfType]) => (
                  <div key={type} className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4 capitalize flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">{type.charAt(0).toUpperCase()}</span>
                      </div>
                      {type} ({formulationsOfType.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {formulationsOfType.map((formulation) => (
                        <FormulationCard
                          key={formulation.id}
                          formulation={formulation}
                          onClick={() => setSelectedFormulation(formulation)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* No Results */}
          {filteredResults.herbs.length === 0 && filteredResults.formulations.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-400 text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      {selectedHerb && (
        <HerbDetail
          herb={selectedHerb}
          onClose={() => setSelectedHerb(null)}
        />
      )}

      {selectedFormulation && (
        <FormulationDetail
          formulation={selectedFormulation}
          onClose={() => setSelectedFormulation(null)}
        />
      )}
    </div>
  );
}

export default App;
