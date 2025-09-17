import { useState } from 'react';
import { Leaf, Beaker, BookOpen, Users } from 'lucide-react';
import { herbs } from '../data/herbs';
import { formulations } from '../data/index';
import { IndicationsList } from './IndicationsList';
import { HerbsList } from './HerbsList';
import { FormulationsList } from './FormulationsList';
import { ClassicalReferencesList } from './ClassicalReferencesList';

interface StatsProps {
  herbCount: number;
  formulationCount: number;
}

export function Stats({ herbCount, formulationCount }: StatsProps) {
  const [showIndications, setShowIndications] = useState(false);
  const [showHerbs, setShowHerbs] = useState(false);
  const [showFormulations, setShowFormulations] = useState(false);
  const [showReferences, setShowReferences] = useState(false);

  // Calculate total unique indications across all herbs and formulations
  const totalIndications = [...new Set([
    ...herbs.flatMap(herb => herb.indications),
    ...formulations.flatMap(formulation => formulation.indications)
  ])].length;

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
      value: [...new Set(formulations.filter(f => f.reference).map(f => f.reference))].length,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => {
              switch (stat.label) {
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
              }
            }}
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
        <HerbsList onClose={() => setShowHerbs(false)} />
      )}
      {showFormulations && (
        <FormulationsList onClose={() => setShowFormulations(false)} />
      )}
      {showIndications && (
        <IndicationsList onClose={() => setShowIndications(false)} />
      )}
      {showReferences && (
        <ClassicalReferencesList onClose={() => setShowReferences(false)} />
      )}
    </>
  );
}