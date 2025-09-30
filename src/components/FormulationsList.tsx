import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { formulationApi } from '../services/api';

interface FormulationsListProps {
  onClose: () => void;
}

export function FormulationsList({ onClose }: FormulationsListProps) {
  const [formulations, setFormulations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFormulations = async () => {
      try {
        setLoading(true);
        const formulationsData = await formulationApi.getAll();
        setFormulations(formulationsData);
      } catch (error) {
        console.error('Error loading formulations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFormulations();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Formulations</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">⏳</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">Loading formulations...</h3>
            <p className="text-gray-500">Please wait while we load the data</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Formulations ({formulations.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formulations.map((formulation) => (
              <div key={formulation.id} className="bg-gray-50 rounded-lg p-4 border">
                <h3 className="font-semibold text-gray-800">{formulation.name}</h3>
                <p className="text-sm text-gray-600">{formulation.sanskritName}</p>
                <p className="text-xs text-gray-500 mt-1">Type: {formulation.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
