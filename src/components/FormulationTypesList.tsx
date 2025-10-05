import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Formulation } from '../types/ayurveda';

interface FormulationTypesListProps {
  formulations: Formulation[];
  onClose: () => void;
}

export function FormulationTypesList({ formulations, onClose }: FormulationTypesListProps) {
  // Group formulations by type
  const formulationsByType = formulations.reduce((acc, formulation) => {
    if (!acc[formulation.type]) {
      acc[formulation.type] = [];
    }
    acc[formulation.type].push(formulation);
    return acc;
  }, {} as Record<string, any[]>);

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
              >
                <Link to={`/formulations/${type}`} onClick={onClose}>
                  {type} ({formulationsByType[type].length})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
