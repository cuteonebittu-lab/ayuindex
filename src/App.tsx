import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/common/Header';
import { FormulationSubcategoryList } from './components/FormulationSubcategoryList';
import { SearchBar } from './components/common/SearchBar';
import { FilterPanel } from './components/common/FilterPanel';
import { Stats } from './components/Stats';
import { HerbCard } from './components/herbs/HerbCard';
import { FormulationCard } from './components/FormulationCard';
import { HerbDetail } from './components/herbs/HerbDetail';
import { FormulationDetail } from './components/FormulationDetail';
import { useSearch } from './hooks/useSearch';
import { Herb, Formulation } from './types/ayurveda';
import { FormulationSubcategoryPage } from './components/FormulationSubcategoryPage';
import { AddForm } from './components/AddForm';
import { EditForm } from './components/EditForm';
import HerbUpload from './components/HerbUpload';
import FormulationUpload from './components/FormulationUpload';
import FileUpload from './components/FileUpload';
import { herbApi, formulationApi } from './services/api';

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const [editingItem, setEditingItem] = useState<Herb | Formulation | null>(null);
  const [selectedFormulationType, setSelectedFormulationType] = useState<string | null>(null);
  const [herbs, setHerbs] = useState<Herb[]>([]);
  const [formulations, setFormulations] = useState<Formulation[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    filters,
    setFilters,
    filteredResults
  } = useSearch({ herbs, formulations });

  // Load data from API on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [herbsData, formulationsData] = await Promise.all([
          herbApi.getAll(),
          formulationApi.getAll()
        ]);
        setHerbs(herbsData);
        setFormulations(formulationsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Initialize filters with new category array
  React.useEffect(() => {
    setFilters(prev => ({
      ...prev,
      category: []
    }));
  }, [setFilters]);

  const handleSubcategorySelect = (type: string) => {
    setSelectedFormulationType(type);
  };

  const handleEditHerb = (herb: Herb) => {
    setEditingItem(herb);
  };

  const handleDeleteHerb = async (herbToDelete: Herb) => {
    try {
      await herbApi.delete(herbToDelete.id);
      setHerbs(herbs.filter(herb => herb.id !== herbToDelete.id));
    } catch (error) {
      console.error('Error deleting herb:', error);
    }
  };

  const handleEditFormulation = (formulation: Formulation) => {
    setEditingItem(formulation);
  };

  const handleDeleteFormulation = async (formulationToDelete: Formulation) => {
    try {
      await formulationApi.delete(formulationToDelete.id);
      setFormulations(formulations.filter(formulation => formulation.id !== formulationToDelete.id));
    } catch (error) {
      console.error('Error deleting formulation:', error);
    }
  };

  const handleAddHerb = async (herb: Partial<Herb>) => {
    try {
      const newHerb = await herbApi.create({
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
      });
      setHerbs([newHerb, ...herbs]);
    } catch (error) {
      console.error('Error adding herb:', error);
    }
  };

  const handleAddFormulation = async (formulation: Partial<Formulation>) => {
    try {
      const newFormulation = await formulationApi.create({
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
      });
      setFormulations([newFormulation, ...formulations]);
    } catch (error) {
      console.error('Error adding formulation:', error);
    }
  };

  const handleSaveItem = async (item: Herb | Formulation) => {
    try {
      if ('botanicalName' in item) {
        await herbApi.update(item.id, item);
        setHerbs(herbs.map(h => h.id === item.id ? item : h));
      } else {
        await formulationApi.update(item.id, item);
        setFormulations(formulations.map(f => f.id === item.id ? item : f));
      }
      setEditingItem(null);
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleDataImported = async () => {
    // Reload data after import
    try {
      const [herbsData, formulationsData] = await Promise.all([
        herbApi.getAll(),
        formulationApi.getAll()
      ]);
      setHerbs(herbsData);
      setFormulations(formulationsData);
    } catch (error) {
      console.error('Error reloading data after import:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Routes>
        <Route path="/herbs/:id" element={<HerbDetail />} />
        <Route path="/formulations/:id" element={<FormulationDetail />} />
        <Route path="/formulations/:subcategory" element={<FormulationSubcategoryPage />} />
        <Route path="/clinical-systems/:subcategory" element={<FormulationSubcategoryPage />} />
        <Route path="/" element={
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Stats
              herbs={herbs}
              formulations={formulations}
              onFormulationTypeSelect={handleSubcategorySelect}
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

            {loading ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 text-2xl">⏳</span>
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">Loading data...</h3>
                <p className="text-gray-500">Please wait while we load your Ayurveda data</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <AddForm onAdd={handleAddHerb} type="herb" />
                  <AddForm onAdd={handleAddFormulation} type="formulation" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <HerbUpload onDataImported={handleDataImported} />
                  <FormulationUpload onDataImported={handleDataImported} />
                  <FileUpload onDataImported={handleDataImported} />
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
              </>
            )}
          </main>
        } />
      </Routes>

      {/* Modals */}
      {selectedFormulationType && (
        <FormulationSubcategoryList
          type={selectedFormulationType}
          formulations={formulations}
          onClose={() => setSelectedFormulationType(null)}
          onFormulationSelect={(formulation) => {
            // Use navigate to go to the formulation detail page
            // This will be handled by the new route
          }}
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
