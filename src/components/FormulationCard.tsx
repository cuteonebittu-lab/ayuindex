import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Clock, AlertTriangle } from 'lucide-react';
import { Formulation } from '@/types/ayurveda';

interface FormulationCardProps {
  formulation: Formulation;
  onEdit: () => void;
  onDelete: () => void;
}

const typeColors: Record<Formulation['type'], string> = {
  churna: 'bg-yellow-100 text-yellow-800',
  vati: 'bg-green-100 text-green-800',
  ghrita: 'bg-orange-100 text-orange-800',
  taila: 'bg-purple-100 text-purple-800',
  asava: 'bg-red-100 text-red-800',
  arishta: 'bg-pink-100 text-pink-800',
  bhasma: 'bg-gray-100 text-gray-800',
  rasa: 'bg-indigo-100 text-indigo-800',
  kashaya: 'bg-cyan-100 text-cyan-800',
  kadha: 'bg-lime-100 text-lime-800',
  guggulu: 'bg-amber-100 text-amber-800',
  avaleha: 'bg-rose-100 text-rose-800',
  syrup: 'bg-teal-100 text-teal-800',
  lehyam: 'bg-fuchsia-100 text-fuchsia-800',
  kashayam: 'bg-sky-100 text-sky-800',
  'commercial-product': 'bg-gray-200 text-gray-800',
};

export function FormulationCard({ formulation, onEdit, onDelete }: FormulationCardProps) {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  // Safe handling for indications array
  const indicationsText = Array.isArray(formulation.indications) && formulation.indications.length > 0 
    ? `${formulation.indications.slice(0, 2).join(', ')}${formulation.indications.length > 2 ? '...' : ''}`
    : 'No indications specified';

  return (
    <Link
      to={`/formulations/${formulation.id}`}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all duration-300 cursor-pointer group relative block"
    >
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
              <strong>For:</strong> {indicationsText}
            </div>
            
            {Array.isArray(formulation.contraindications) && formulation.contraindications.length > 0 && (
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
    </Link>
  );
}
