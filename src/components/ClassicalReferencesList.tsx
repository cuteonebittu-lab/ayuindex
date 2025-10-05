import { X } from 'lucide-react';
import { Formulation } from '../types/ayurveda';

interface ClassicalReferencesListProps {
  formulations: Formulation[];
  onClose: () => void;
}

export function ClassicalReferencesList({ formulations, onClose }: ClassicalReferencesListProps) {
  const uniqueReferences = [...new Set(formulations.filter(f => f.reference).map(f => f.reference))];
  
  // Group formulations by reference
  const formulationsByReference = uniqueReferences.reduce((acc, reference) => {
    acc[reference] = formulations.filter(f => f.reference === reference);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Classical References ({uniqueReferences.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            {uniqueReferences.map((reference) => (
              <div key={reference} className="bg-gray-50 rounded-lg p-4 border">
                <h3 className="font-semibold text-gray-800 mb-3">{reference}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {formulationsByReference[reference].map((formulation: any) => (
                    <div key={formulation.id} className="bg-white rounded p-2 text-sm border">
                      {formulation.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
