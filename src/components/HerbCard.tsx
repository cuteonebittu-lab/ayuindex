import React from 'react';
import { Leaf, AlertTriangle, Droplets } from 'lucide-react';
import { Herb } from '../types/ayurveda';

interface HerbCardProps {
  herb: Herb;
  onClick: () => void;
}

export function HerbCard({ herb, onClick }: HerbCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
          <Leaf className="w-6 h-6 text-emerald-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
            {herb.name}
          </h3>
          <p className="text-sm text-gray-500 mb-1">{herb.sanskritName}</p>
          <p className="text-xs text-gray-400 italic mb-3">{herb.botanicalName}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {herb.rasa.slice(0, 3).map((rasa) => (
              <span
                key={rasa}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {rasa}
              </span>
            ))}
            {herb.rasa.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">
                +{herb.rasa.length - 3} more
              </span>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Droplets className="w-4 h-4 text-emerald-500" />
              <span className="text-gray-600">
                Primary: {herb.indications.slice(0, 2).join(', ')}
                {herb.indications.length > 2 && '...'}
              </span>
            </div>
            
            {herb.contraindications.length > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span className="text-gray-600">
                  Avoid: {herb.contraindications[0]}
                  {herb.contraindications.length > 1 && '...'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}