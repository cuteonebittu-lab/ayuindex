import React from 'react';
import { X } from 'lucide-react';

interface FilterPanelProps {
  show: boolean;
  onClose: () => void;
  filters: {
    rasa: string[];
    guna: string[];
    virya: string[];
    type: string[];
  };
  setFilters: (filters: any) => void;
}

const rasaOptions = ['Madhura', 'Amla', 'Lavana', 'Katu', 'Tikta', 'Kashaya'];
const gunaOptions = ['Laghu', 'Guru', 'Sheeta', 'Ushna', 'Snigdha', 'Ruksha'];
const viryaOptions = ['Sheeta', 'Ushna'];
const typeOptions = ['churna', 'vati', 'ghrita', 'taila', 'asava', 'arishta', 'bhasma', 'rasa'];

export function FilterPanel({ show, onClose, filters, setFilters }: FilterPanelProps) {
  if (!show) return null;

  const handleFilterChange = (category: string, value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item: string) => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      rasa: [],
      guna: [],
      virya: [],
      type: []
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <div className="flex gap-2">
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Rasa (Taste)</h4>
          <div className="space-y-2">
            {rasaOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.rasa.includes(option)}
                  onChange={() => handleFilterChange('rasa', option)}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-3">Guna (Quality)</h4>
          <div className="space-y-2">
            {gunaOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.guna.includes(option)}
                  onChange={() => handleFilterChange('guna', option)}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-3">Virya (Potency)</h4>
          <div className="space-y-2">
            {viryaOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.virya.includes(option)}
                  onChange={() => handleFilterChange('virya', option)}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-3">Formulation Type</h4>
          <div className="space-y-2">
            {typeOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.type.includes(option)}
                  onChange={() => handleFilterChange('type', option)}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}