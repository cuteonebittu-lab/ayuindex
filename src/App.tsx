import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { FormulationSubcategoryList } from './components/FormulationSubcategoryList';
import { SearchBar } from './components/SearchBar';
import { FilterPanel } from './components/FilterPanel';
import { Stats } from './components/Stats';
import { HerbCard } from './components/HerbCard';
import { FormulationCard } from './components/FormulationCard';
import { HerbDetail } from './components/HerbDetail';
import { FormulationDetail } from './components/FormulationDetail';
import { useSearch } from './hooks/useSearch';
import { herbs as herbsData } from './data/herbs';
import { formulations as formulationsData } from './data/index';
import { Herb, Formulation, FormulationType } from './types/ayurveda';
import { FormulationSubcategoryPage } from './components/FormulationSubcategoryPage';
import { AddForm } from './components/AddForm';
import { EditForm } from './components/EditForm';

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [selectedFormulation, setSelectedFormulation] = useState<Formulation | null>(null);
  const [editingItem, setEditingItem] = useState<Herb | Formulation | null>(null);
  const [selectedFormulationType, setSelectedFormulationType] = useState<string | null>(null);
  const [herbs, setHerbs] = useState<Herb[]>(herbsData);
  const [formulations, setFormulations] = useState<Formulation[]>(formulationsData);

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
  }, [setFilters]);

  const handleFormulationTypeSelect = (type: string) => {
    setCategory('formulations');
    setFilters({
      rasa: [],
      guna: [],
      virya: [],
      type: [type as FormulationType],
      category: []
    });
    setSearchTerm('');
  };

  const handleSubcategorySelect = (type: string) => {
    setSelectedFormulationType(type);
  };

  const handleEditHerb = (herb: Herb) => {
    setEditingItem(herb);
  };

  const handleDeleteHerb = (herbToDelete: Herb) => {
    setHerbs(herbs.filter(herb => herb.id !== herbToDelete.id));
  };

  const handleEditFormulation = (formulation: Formulation) => {
    setEditingItem(formulation);
  };

  const handleDeleteFormulation = (formulationToDelete: Formulation) => {
    setFormulations(formulations.filter(formulation => formulation.id !== formulationToDelete.id));
  };

  const handleAddHerb = (herb: Partial<Herb>) => {
    const newHerb: Herb = {
      id: `herb-${Date.now()}`,
      name: herb.name || 'New Herb',
      sanskritName: '',
      botanicalName: '',
      family: '',
      parts: [],
      rasa: [],
      guna: [],
      virya: '',
      vipaka: '',
      indications: [],
    };
    setHerbs([newHerb, ...herbs]);
  };

  const handleAddFormulation = (formulation: Partial<Formulation>) => {
    const newFormulation: Formulation = {
      id: `formulation-${Date.now()}`,
      name: formulation.name || 'New Formulation',
      sanskritName: '',
      type: 'churna',
      clinicalSystems: [],
      indicationCategories: [],
      traditionalCategories: [],
      ingredients: [],
      indications: [],
      dosage: {
        amount: '',
        frequency: '',
        duration: '',
      },
      anupana: [],
      contraindications: [],
      reference: '',
    };
    setFormulations([newFormulation, ...formulations]);
  };

  const handleSaveItem = (item: Herb | Formulation) => {
    if ('botanicalName' in item) {
      setHerbs(herbs.map(h => h.id === item.id ? item : h));
    } else {
      setFormulations(formulations.map(f => f.id === item.id ? item : f));
    }
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Routes>
        <Route path="/formulations/:subcategory" element={<FormulationSubcategoryPage />} />
        <Route path="/clinical-systems/:subcategory" element={<FormulationSubcategoryPage />} />
        <Route path="/" element={
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Stats
          herbCount={herbs.length}
          formulationCount={formulations.length}
          onFormulationTypeSelect={handleSubcategorySelect}
          onHerbSelect={setSelectedHerb}
          onIndicationSelect={(indication) => {
            setSearchTerm(indication);
            setCategory('all');
          }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <AddForm onAdd={handleAddHerb} type="herb" />
          <AddForm onAdd={handleAddFormulation} type="formulation" />
        </div>

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
                    onEdit={() => handleEditHerb(herb)}
                    onDelete={() => handleDeleteHerb(herb)}
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
                          onEdit={() => handleEditFormulation(formulation)}
                          onDelete={() => handleDeleteFormulation(formulation)}
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
        } />
      </Routes>

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

      {selectedFormulationType && (
        <FormulationSubcategoryList
          type={selectedFormulationType}
          onClose={() => setSelectedFormulationType(null)}
          onFormulationSelect={setSelectedFormulation}
        />
      )}

      <EditForm
        item={editingItem}
        onSave={handleSaveItem}
        onClose={() => setEditingItem(null)}
      />
    </div>
  );
}

export default App;
