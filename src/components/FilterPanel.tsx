import { X } from 'lucide-react';
import React from 'react';

type FilterOptions = {
  rasa: string[];
  guna: string[];
  virya: string[];
  type: string[];
  category: string[];
};

interface FilterPanelProps {
  show: boolean;
  onClose: () => void;
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
}

interface FilterGroupProps {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (value: string) => void;
}

const filterGroups = [
  {
    key: 'rasa' as const,
    label: 'Rasa (Taste)',
    options: ['Madhura', 'Amla', 'Lavana', 'Katu', 'Tikta', 'Kashaya']
  },
  {
    key: 'guna' as const,
    label: 'Guna (Quality)',
    options: ['Laghu', 'Guru', 'Sheeta', 'Ushna', 'Snigdha', 'Ruksha']
  },
  {
    key: 'virya' as const,
    label: 'Virya (Potency)',
    options: ['Sheeta', 'Ushna']
  },
  {
    key: 'type' as const,
    label: 'Formulation Type',
    options: ['churna', 'vati', 'ghrita', 'taila', 'asava', 'arishta', 'bhasma', 'rasa', 'kashaya']
  }
];

const healthCategories = {
  key: 'category' as const,
  label: 'Health Category',
  options: [
    'Digestive System',
    'Respiratory System',
    'Mental Health',
    'Women\'s Health',
    'Rejuvenative',
    'Fever',
    'Nervous System',
    'Urinary System',
    'Liver',
    'Infectious Diseases'
  ]
};

const FilterGroup: React.FC<FilterGroupProps> = ({
  label,
  options,
  selectedValues,
  onChange
}) => (
  <div>
    <h4 className="font-medium text-gray-700 mb-3">{label}</h4>
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option} className="flex items-center">
          <input
            type="checkbox"
            checked={selectedValues.includes(option)}
            onChange={() => onChange(option)}
            className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="ml-2 text-sm text-gray-600">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

export const FilterPanel: React.FC<FilterPanelProps> = ({ show, onClose, filters, setFilters }) => {
  if (!show) return null;

  const handleFilterChange = (category: keyof FilterOptions, value: string) => {
    setFilters({
      ...filters,
      [category]: filters[category].includes(value)
        ? filters[category].filter(item => item !== value)
        : [...filters[category], value]
    });
  };

  const clearAllFilters = () => {
    setFilters({
      rasa: [],
      guna: [],
      virya: [],
      type: [],
      category: []
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
        {filterGroups.map(group => (
          <FilterGroup
            key={group.key}
            label={group.label}
            options={group.options}
            selectedValues={filters[group.key]}
            onChange={(value) => handleFilterChange(group.key, value)}
          />
        ))}

        <div className="col-span-2">
          <FilterGroup
            label={healthCategories.label}
            options={healthCategories.options}
            selectedValues={filters[healthCategories.key]}
            onChange={(value) => handleFilterChange(healthCategories.key, value)}
          />
        </div>
      </div>
    </div>
  );
};
