import React from 'react';
import { X, Leaf, AlertTriangle, Droplets, Clock, BookOpen } from 'lucide-react';
import { Herb } from '../types/ayurveda';

interface HerbDetailProps {
  herb: Herb;
  onClose: () => void;
}

export function HerbDetail({ herb, onClose }: HerbDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{herb.name}</h2>
              <p className="text-gray-500">{herb.sanskritName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                Basic Information
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Botanical Name:</span>
                  <p className="text-gray-600 italic">{herb.botanicalName}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Family:</span>
                  <p className="text-gray-600">{herb.family}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Parts Used:</span>
                  <p className="text-gray-600">{herb.parts.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Ayurvedic Properties */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Ayurvedic Properties</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Rasa (Taste):</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {herb.rasa.map((rasa) => (
                      <span key={rasa} className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                        {rasa}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Guna (Quality):</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {herb.guna.map((guna) => (
                      <span key={guna} className="px-2 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                        {guna}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Virya (Potency):</span>
                  <span className={`ml-2 px-2 py-1 text-sm rounded-full ${
                    herb.virya === 'Ushna' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {herb.virya}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Vipaka (Post-digestive effect):</span>
                  <p className="text-gray-600">{herb.vipaka}</p>
                </div>
                {herb.prabhava && (
                  <div>
                    <span className="font-medium text-gray-700">Prabhava (Special effect):</span>
                    <p className="text-gray-600">{herb.prabhava}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Indications */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Droplets className="w-5 h-5 text-emerald-600" />
              Therapeutic Indications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {herb.indications.map((indication, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">{indication}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dosage */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-emerald-600" />
              Dosage & Administration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Powder (Churna)</h4>
                <p className="text-gray-600">{herb.dosage.powder}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Decoction (Kwath)</h4>
                <p className="text-gray-600">{herb.dosage.decoction}</p>
              </div>
              {herb.dosage.juice && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Fresh Juice</h4>
                  <p className="text-gray-600">{herb.dosage.juice}</p>
                </div>
              )}
              {herb.dosage.oil && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Oil</h4>
                  <p className="text-gray-600">{herb.dosage.oil}</p>
                </div>
              )}
            </div>
          </div>

          {/* Anupana */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Anupana (Vehicle)</h3>
            <div className="flex flex-wrap gap-2">
              {herb.anupana.map((vehicle) => (
                <span
                  key={vehicle}
                  className="px-3 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200"
                >
                  {vehicle}
                </span>
              ))}
            </div>
          </div>

          {/* Contraindications */}
          {herb.contraindications.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Contraindications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {herb.contraindications.map((contraindication, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">{contraindication}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}