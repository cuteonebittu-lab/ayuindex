import React from 'react';
import { Beaker, Clock, AlertTriangle } from 'lucide-react';
import { Formulation } from '../types/ayurveda';

interface FormulationCardProps {
  formulation: Formulation;
  onClick: () => void;
}

const typeColors = {
  churna: 'bg-yellow-100 text-yellow-800',
  vati: 'bg-green-100 text-green-800',
  ghrita: 'bg-orange-100 text-orange-800',
  taila: 'bg-purple-100 text-purple-800',
  asava: 'bg-red-100 text-red-800',
  arishta: 'bg-pink-100 text-pink-800',
  bhasma: 'bg-gray-100 text-gray-800',
  rasa: 'bg-indigo-100 text-indigo-800'
};

export function FormulationCard({ formulation, onClick }: FormulationCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
          <Beaker className="w-6 h-6 text-emerald-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
              {formulation.name}
            </h3>
            <span className={`px-2 py-1 text-xs rounded-full capitalize ${typeColors[formulation.type]}`}>
              {formulation.type}
            </span>
          </div>
          
          <p className="text-sm text-gray-500 mb-1">{formulation.sanskritName}</p>
          <p className="text-xs text-gray-400 mb-3">{formulation.ingredients.length} ingredients</p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span className="text-gray-600">
                {formulation.dosage.amount} - {formulation.dosage.frequency}
              </span>
            </div>
            
            <div className="text-sm text-gray-600">
              <strong>For:</strong> {formulation.indications.slice(0, 2).join(', ')}
              {formulation.indications.length > 2 && '...'}
            </div>
            
            {formulation.contraindications.length > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span className="text-gray-600">
                  Avoid: {formulation.contraindications[0]}
                  {formulation.contraindications.length > 1 && '...'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}