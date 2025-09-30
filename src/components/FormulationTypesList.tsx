import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { formulationApi } from '../services/api';
import { Link } from 'react-router-dom';

interface FormulationTypesListProps {
  onClose: () => void;
}

export function FormulationTypesList({ onClose }: FormulationTypesListProps) {
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

  // Group formulations by type
  const formulationsByType = formulations.reduce((acc, formulation) => {
    if (!acc[formulation.type]) {
      acc[formulation.type] = [];
    }
    acc[formulation.type].push(formulation);
    return acc;
  }, {} as Record<string, any[]>);

  const types = Object.keys(formulationsByType);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Formulation Types</h2>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">⏳</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">Loading...</h3>
            <p className="text-gray-500">Please wait while we load the data</p>
          </div>
        </div>
      </div>
    );
  }

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
