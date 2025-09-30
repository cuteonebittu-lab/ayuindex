import React, { useState, useEffect } from 'react';
import { BookOpen, X, Search } from 'lucide-react';
import { herbApi, formulationApi } from '../services/api';

interface IndicationsListProps {
  onClose: () => void;
  onIndicationSelect?: (indication: string) => void;
}

export function IndicationsList({ onClose, onIndicationSelect }: IndicationsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [herbs, setHerbs] = useState<any[]>([]);
  const [formulations, setFormulations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load data from API
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [herbsData, formulationsData] = await Promise.all([
          herbApi.getAll(),
          formulationApi.getAll()
        ]);
        setHerbs(herbsData);
        setFormulations(formulationsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Get all unique indications and sort them alphabetically
  const uniqueIndications = [...new Set([
    ...herbs.flatMap((herb: any) => herb.indications || []),
    ...formulations.flatMap((formulation: any) => formulation.indications || [])
  ])].sort();

  // Filter indications based on search term
  const filteredIndications = uniqueIndications.filter((indication: string) =>
    indication.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group indications by first letter
  const groupedIndications = filteredIndications.reduce((acc: Record<string, string[]>, indication: string) => {
    const firstLetter = indication[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(indication);
    return acc;
  }, {} as Record<string, string[]>);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                All Therapeutic Indications
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">⏳</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">Loading indications...</h3>
            <p className="text-gray-500">Please wait while we load the data</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              All Therapeutic Indications
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Box */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search indications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Found {filteredIndications.length} indications
          </div>
        </div>

        {/* Indications List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedIndications).map(([letter, indications]) => (
              <div key={letter} className="break-inside-avoid">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                    {letter}
                  </span>
                </h3>
                <ul className="space-y-2">
                  {(indications as string[]).map((indication: string, index: number) => (
                    <li
                      key={index}
                      className="text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors"
                      onClick={() => onIndicationSelect?.(indication)}
                    >
                      {indication}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
