import { X } from 'lucide-react';
import { Formulation } from '../types/ayurveda';

interface FormulationSubcategoryListProps {
  type: string;
  formulations: Formulation[];
  onClose: () => void;
  onFormulationSelect: (formulation: Formulation) => void;
}

export function FormulationSubcategoryList({ type, formulations, onClose, onFormulationSelect }: FormulationSubcategoryListProps) {
  const filteredFormulations = formulations.filter(f => f.type === type);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold capitalize">{type} ({filteredFormulations.length})</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-4">
          <ul className="space-y-2">
            {filteredFormulations.map((formulation) => (
              <li
                key={formulation.id}
                className="p-2 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onFormulationSelect(formulation);
                  onClose();
                }}
              >
                {formulation.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
