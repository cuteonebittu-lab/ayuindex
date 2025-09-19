import { X } from 'lucide-react';
import React from 'react';
import { FormulationType, IndicationCategory } from '../types/ayurveda';

interface FilterTypes {
  rasa: string;
  guna: string;
  virya: string;
  type: FormulationType;
  category: IndicationCategory;
}

type FilterOptions = {
  [K in keyof FilterTypes]: FilterTypes[K][];
};

interface FilterPanelProps {
  show: boolean;
  onClose: () => void;
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
}

interface FilterGroupProps<K extends keyof FilterTypes> {
  label: string;
  options: FilterTypes[K][];
  selectedValues: FilterTypes[K][];
  onChange: (value: FilterTypes[K]) => void;
}

const filterGroups: Array<{
  key: keyof FilterTypes;
  label: string;
  options: FilterTypes[keyof FilterTypes][];
}> = [
  {
    key: 'rasa',
    label: 'Rasa (Taste)',
    options: ['Madhura', 'Amla', 'Lavana', 'Katu', 'Tikta', 'Kashaya']
  },
  {
    key: 'guna',
    label: 'Guna (Quality)',
    options: ['Laghu', 'Guru', 'Sheeta', 'Ushna', 'Snigdha', 'Ruksha']
  },
  {
    key: 'virya',
    label: 'Virya (Potency)',
    options: ['Sheeta', 'Ushna']
  },
  {
    key: 'type',
    label: 'Formulation Type',
    options: ['churna', 'vati', 'ghrita', 'taila', 'asava', 'arishta', 'bhasma', 'rasa', 'kashaya'] as FormulationType[]
  }
];

const healthCategories: {
  key: 'category';
  label: string;
  options: IndicationCategory[];
} = {
  key: 'category',
  label: 'Health Category',
  options: [
    'Digestive Disorders',
    'Respiratory Conditions',
    'Mental Health',
    'Women\'s Health',
    'Metabolic Disorders',
    'Fever & Infections',
    'Neurological Disorders',
    'Urinary Disorders',
    'Skin Conditions',
    'Musculoskeletal Issues',
    'Cardiovascular Conditions',
    'Eye Disorders',
    'ENT Conditions',
    'Dental & Oral Health',
    'General Health & Wellness'
  ] as IndicationCategory[]
};

function FilterGroup<K extends keyof FilterTypes>({
  label,
  options,
  selectedValues,
  onChange
}: FilterGroupProps<K>): React.ReactElement {
  return (
    <div>
      <h4 className="font-medium text-gray-700 mb-3">{label}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={String(option)} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={() => onChange(option)}
              className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="ml-2 text-sm text-gray-600">{String(option)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ show, onClose, filters, setFilters }) => {
  if (!show) return null;

  function handleFilterChange<K extends keyof FilterTypes>(
    category: K,
    value: FilterTypes[K]
  ) {
    const currentValues = filters[category];
    const valueExists = currentValues.includes(value as FilterTypes[K]);
    
    setFilters({
      ...filters,
      [category]: valueExists
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
    });
  }

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
          <FilterGroup<keyof FilterTypes>
            key={group.key}
            label={group.label}
            options={group.options}
            selectedValues={filters[group.key]}
            onChange={(value) => handleFilterChange(group.key, value as FilterTypes[typeof group.key])}
          />
        ))}

        <div className="col-span-2">
          <FilterGroup<'category'>
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
