import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clinicalSystemMap } from '../data/categories/clinical-systems';

interface ClinicalSystemsListProps {
  onClose: () => void;
}

export function ClinicalSystemsList({ onClose }: ClinicalSystemsListProps) {
  const systems = Object.entries(clinicalSystemMap);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Clinical Systems ({systems.length})</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-4">
          <ul className="space-y-2">
            {systems.map(([systemName, systemId]) => (
              <li key={systemId}>
                <Link
                  to={`/clinical-systems/${systemId}`}
                  onClick={onClose}
                  className="block p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {systemName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
