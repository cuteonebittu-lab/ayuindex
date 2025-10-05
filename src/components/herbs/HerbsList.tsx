import { X } from 'lucide-react';
import { Herb } from '../../types/ayurveda';

interface HerbsListProps {
  herbs: Herb[];
  onClose: () => void;
  onHerbSelect?: (herb: Herb) => void;
}

export function HerbsList({ herbs, onClose, onHerbSelect }: HerbsListProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Single Herbs ({herbs.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {herbs.map((herb) => (
              <div 
                key={herb.id} 
                className="bg-gray-50 rounded-lg p-4 border cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => onHerbSelect?.(herb)}
              >
                <h3 className="font-semibold text-gray-800">{herb.name}</h3>
                <p className="text-sm text-gray-600">{herb.sanskritName}</p>
                <p className="text-xs text-gray-500 mt-1">{herb.botanicalName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
