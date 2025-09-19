import { X } from 'lucide-react';
import { formulationsByType } from '../data/index';
import { FormulationType } from '../types/ayurveda';

interface FormulationTypesListProps {
  onClose: () => void;
  onTypeSelect: (type: string) => void;
}

// Mapping from formulation group keys to FormulationType
const typeMapping: Record<string, FormulationType> = {
  arishtas: 'arishta',
  vatis: 'vati',
  kashayas: 'kashaya',
  ghritas: 'ghrita',
  churnas: 'churna',
  tailas: 'taila',
  bhasmas: 'bhasma',
  rasas: 'rasa',
  guggulus: 'guggulu',
  avalehas: 'avaleha',
};

export function FormulationTypesList({ onClose, onTypeSelect }: FormulationTypesListProps) {
  const types = Object.keys(formulationsByType);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Formulation Types ({types.length})</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-4">
          <ul className="space-y-2">
            {types.map((type) => (
              <li
                key={type}
                className="p-2 bg-gray-50 rounded-md capitalize cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onTypeSelect(typeMapping[type] || type);
                  onClose();
                }}
              >
                {type} ({formulationsByType[type as keyof typeof formulationsByType].length})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
