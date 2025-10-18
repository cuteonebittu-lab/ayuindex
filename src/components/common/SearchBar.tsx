import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ChevronRight } from 'lucide-react';
import { SearchCategory, Herb, Formulation } from '../../types/ayurveda';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: SearchCategory;
  setCategory: (category: SearchCategory) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  herbs: Herb[];
  formulations: Formulation[];
}

interface SearchSuggestion {
  id: string;
  name: string;
  type: 'herb' | 'formulation';
  sanskritName?: string;
  botanicalName?: string;
}

export function SearchBar({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  showFilters,
  setShowFilters,
  herbs,
  formulations
}: SearchBarProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Generate search suggestions
  useEffect(() => {
    if (searchTerm.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const term = searchTerm.toLowerCase();
    const herbSuggestions: SearchSuggestion[] = herbs
      .filter(herb => 
        herb.name.toLowerCase().includes(term) ||
        herb.sanskritName.toLowerCase().includes(term) ||
        herb.botanicalName.toLowerCase().includes(term)
      )
      .slice(0, 5)
      .map(herb => ({
        id: herb.id,
        name: herb.name,
        type: 'herb' as const,
        sanskritName: herb.sanskritName,
        botanicalName: herb.botanicalName
      }));

    const formulationSuggestions: SearchSuggestion[] = formulations
      .filter(formulation =>
        formulation.name.toLowerCase().includes(term) ||
        formulation.sanskritName.toLowerCase().includes(term)
      )
      .slice(0, 5)
      .map(formulation => ({
        id: formulation.id,
        name: formulation.name,
        type: 'formulation' as const,
        sanskritName: formulation.sanskritName
      }));

    const allSuggestions = [...herbSuggestions, ...formulationSuggestions].slice(0, 8);
    setSuggestions(allSuggestions);
    setShowSuggestions(allSuggestions.length > 0);
    setSelectedIndex(-1);
  }, [searchTerm, herbs, formulations]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionSelect(suggestions[selectedIndex]);
        } else if (searchTerm.trim()) {
          // If no suggestion selected but search term exists, perform regular search
          setShowSuggestions(false);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSuggestionSelect = (suggestion: SearchSuggestion) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    
    // Navigate to the selected item
    if (suggestion.type === 'herb') {
      navigate(`/herbs/${suggestion.id}`);
    } else {
      navigate(`/formulations/${suggestion.id}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = (e: React.FocusEvent) => {
    // Use setTimeout to allow click events on suggestions to register
    setTimeout(() => {
      if (!suggestionsRef.current?.contains(e.relatedTarget as Node)) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    }, 150);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search herbs, formulations, indications..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />
          
          {/* Search Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              ref={suggestionsRef}
              className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
            >
              {suggestions.map((suggestion, index) => (
                <button
                  key={`${suggestion.type}-${suggestion.id}`}
                  type="button"
                  onClick={() => handleSuggestionSelect(suggestion)}
                  className={`w-full text-left p-3 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0 ${
                    index === selectedIndex ? 'bg-emerald-50 border-emerald-200' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          suggestion.type === 'herb' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {suggestion.type === 'herb' ? 'Herb' : 'Formulation'}
                        </span>
                        <span className="font-medium text-gray-900 truncate">
                          {suggestion.name}
                        </span>
                      </div>
                      {suggestion.sanskritName && (
                        <div className="text-sm text-gray-600 truncate">
                          {suggestion.sanskritName}
                        </div>
                      )}
                      {suggestion.botanicalName && (
                        <div className="text-xs text-gray-500 truncate">
                          {suggestion.botanicalName}
                        </div>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          )}
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
