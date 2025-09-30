import { useState, useEffect } from 'react';
import { Leaf, Beaker, BookOpen, Users, Stethoscope } from 'lucide-react';
import { herbApi, formulationApi } from '../services/api';
import { clinicalSystemMap } from '../data/categories/clinical-systems';
import { IndicationsList } from './IndicationsList';
import { HerbsList } from './HerbsList';
import { FormulationTypesList } from './FormulationTypesList';
import { ClassicalReferencesList } from './ClassicalReferencesList';
import { ClinicalSystemsList } from './ClinicalSystemsList';

import { Herb } from '../types/ayurveda';

interface StatsProps {
  herbCount: number;
  formulationCount: number;
  onFormulationTypeSelect: (type: string) => void;
  onHerbSelect: (herb: Herb) => void;
  onIndicationSelect?: (indication: string) => void;
}

export function Stats({ herbCount, formulationCount, onHerbSelect, onIndicationSelect }: StatsProps) {
  const [showIndications, setShowIndications] = useState(false);
  const [showHerbs, setShowHerbs] = useState(false);
  const [showFormulations, setShowFormulations] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showClinicalSystems, setShowClinicalSystems] = useState(false);
  const [herbs, setHerbs] = useState<any[]>([]);
  const [formulations, setFormulations] = useState<any[]>([]);

  // Load data from API
  useEffect(() => {
    const loadData = async () => {
      try {
        const [herbsData, formulationsData] = await Promise.all([
          herbApi.getAll(),
          formulationApi.getAll()
        ]);
        setHerbs(herbsData);
        setFormulations(formulationsData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  // Calculate total unique indications across all herbs and formulations
  const totalIndications = [...new Set([
    ...herbs.flatMap((herb: any) => herb.indications || []),
    ...formulations.flatMap((formulation: any) => formulation.indications || [])
  ])].length;

  // Calculate classical references count
  const classicalReferencesCount = [...new Set(
    formulations.filter((f: any) => f.reference).map((f: any) => f.reference)
  )].length;

  const stats = [
    {
      icon: Leaf,
      label: 'Single Herbs',
      value: herbCount,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Beaker,
      label: 'Formulations',
      value: formulationCount,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: BookOpen,
      label: 'Total Indications',
      value: totalIndications,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: Users,
      label: 'Classical References',
      value: classicalReferencesCount,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      icon: Stethoscope,
      label: 'Clinical Systems',
      value: Object.keys(clinicalSystemMap).length,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    }
  ];

  const handleStatClick = (label: string) => {
    switch (label) {
      case 'Single Herbs':
        setShowHerbs(true);
        break;
      case 'Formulations':
        setShowFormulations(true);
        break;
      case 'Total Indications':
        setShowIndications(true);
        break;
      case 'Classical References':
        setShowReferences(true);
        break;
      case 'Clinical Systems':
        setShowClinicalSystems(true);
        break;
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleStatClick(stat.label)}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {showHerbs && (
        <HerbsList 
          onClose={() => setShowHerbs(false)}
          onHerbSelect={(herb) => {
            onHerbSelect(herb);
            setShowHerbs(false);
          }}
        />
      )}
      {showFormulations && (
        <FormulationTypesList
          onClose={() => setShowFormulations(false)}
        />
      )}
      {showIndications && (
        <IndicationsList 
          onClose={() => setShowIndications(false)}
          onIndicationSelect={(indication) => {
            onIndicationSelect?.(indication);
            setShowIndications(false);
          }}
        />
      )}
      {showReferences && (
        <ClassicalReferencesList onClose={() => setShowReferences(false)} />
      )}
      {showClinicalSystems && (
        <ClinicalSystemsList onClose={() => setShowClinicalSystems(false)} />
      )}
    </>
  );
}
