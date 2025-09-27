import React from 'react';
import { X, Beaker, AlertTriangle, Droplets, Clock, Users, ShoppingCart } from 'lucide-react';
import { Formulation } from '../types/ayurveda';

interface FormulationDetailProps {
  formulation: Formulation;
  onClose: () => void;
}

const typeColors: Record<string, string> = {
  churna: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  vati: 'bg-green-100 text-green-800 border-green-200',
  ghrita: 'bg-orange-100 text-orange-800 border-orange-200',
  taila: 'bg-purple-100 text-purple-800 border-purple-200',
  asava: 'bg-red-100 text-red-800 border-red-200',
  arishta: 'bg-pink-100 text-pink-800 border-pink-200',
  bhasma: 'bg-gray-100 text-gray-800 border-gray-200',
  rasa: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  kashaya: 'bg-blue-100 text-blue-800 border-blue-200',
  kadha: 'bg-blue-100 text-blue-800 border-blue-200',
  guggulu: 'bg-teal-100 text-teal-800 border-teal-200',
  avaleha: 'bg-amber-100 text-amber-800 border-amber-200'
};

export function FormulationDetail({ formulation, onClose }: FormulationDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Beaker className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-800">{formulation.name}</h2>
                <span className={`px-3 py-1 text-sm rounded-full capitalize border ${typeColors[formulation.type]}`}>
                  {formulation.type}
                </span>
              </div>
              <p className="text-gray-500">{formulation.sanskritName}</p>
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
          {/* Ingredients */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-emerald-600" />
              Ingredients
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {formulation.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-700">{ingredient.herb}</span>
                    {ingredient.part && (
                      <span className="text-sm text-gray-500 ml-2">({ingredient.part})</span>
                    )}
                  </div>
                  <span className="text-sm text-emerald-600 font-medium">{ingredient.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Indications */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Droplets className="w-5 h-5 text-emerald-600" />
              Therapeutic Indications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {formulation.indications.map((indication, index) => (
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Amount</h4>
                <p className="text-blue-700">{formulation.dosage.amount}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Frequency</h4>
                <p className="text-green-700">{formulation.dosage.frequency}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-2">Duration</h4>
                <p className="text-purple-700">{formulation.dosage.duration}</p>
              </div>
            </div>
          </div>

          {/* Anupana */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Anupana (Vehicle)</h3>
            <div className="flex flex-wrap gap-2">
              {formulation.anupana.map((vehicle) => (
                <span
                  key={vehicle}
                  className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200"
                >
                  {vehicle}
                </span>
              ))}
            </div>
          </div>

          {/* Preparation */}
          {formulation.preparation && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparation Method</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{formulation.preparation}</p>
              </div>
            </div>
          )}

          {/* Reference */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Classical Reference</h3>
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <p className="text-indigo-700 font-medium">{formulation.reference}</p>
            </div>
          </div>

          {/* Contraindications */}
          {formulation.contraindications.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Contraindications & Precautions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {formulation.contraindications.map((contraindication, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">{contraindication}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Brands */}
          {formulation.brands && formulation.brands.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-emerald-600" />
                Marketed Brands
              </h3>
              <div className="space-y-4">
                {formulation.brands.map((brand) => (
                  <div key={brand.name} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">{brand.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {brand.products.map((product) => (
                        <div key={product.name} className="p-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-800">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.quantity}</p>
                          </div>
                          <p className="font-semibold text-emerald-600">₹{product.price}</p>
                        </div>
                      ))}
                    </div>
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
