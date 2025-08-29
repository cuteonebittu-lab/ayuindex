import React from 'react';
import { Search, Filter } from 'lucide-react';
import { SearchCategory } from '../types/ayurveda';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: SearchCategory;
  setCategory: (category: SearchCategory) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export function SearchBar({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  showFilters,
  setShowFilters
}: SearchBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search herbs, formulations, indications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div className="flex gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as SearchCategory)}
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white min-w-[120px]"
          >
            <option value="all">All</option>
            <option value="herbs">Herbs</option>
            <option value="formulations">Formulations</option>
          </select>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-3 rounded-lg border transition-all duration-200 flex items-center gap-2 ${
              showFilters
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>
    </div>
  );
}