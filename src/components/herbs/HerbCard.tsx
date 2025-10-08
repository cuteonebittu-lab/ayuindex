import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, AlertTriangle, Droplets } from 'lucide-react';
import { Herb } from '@/types/ayurveda';

interface HerbCardProps {
  herb: Herb;
  onEdit: () => void;
  onDelete: () => void;
}

export function HerbCard({ herb, onEdit, onDelete }: HerbCardProps) {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <Link
      to={`/herbs/${herb.id}`}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all duration-300 cursor-pointer group relative block"
    >
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={handleEditClick}
          className="p-1.5 bg-gray-100 rounded-md hover:bg-gray-200 text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
          </svg>
        </button>
        <button
          onClick={handleDeleteClick}
          className="p-1.5 bg-red-50 rounded-md hover:bg-red-100 text-red-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
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
            {herb.rasa.slice(0, 3).map((rasa: string) => (
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
            
            {herb.contraindications && herb.contraindications.length > 0 && (
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
    </Link>
  );
}
