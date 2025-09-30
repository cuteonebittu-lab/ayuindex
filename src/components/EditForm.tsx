import React, { useState, useEffect } from 'react';
import { Herb, Formulation } from '../types/ayurveda';

interface EditFormProps {
  item: Herb | Formulation | null;
  onSave: (item: Herb | Formulation) => void;
  onClose: () => void;
}

export function EditForm({ item, onSave, onClose }: EditFormProps) {
  const [formData, setFormData] = useState<Partial<Herb | Formulation>>({});

  useEffect(() => {
    if (item) {
      setFormData(item);
    }
  }, [item]);

  if (!item) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field: string, value: string) => {
    const values = value.split(',').map(v => v.trim()).filter(v => v);
    setFormData(prev => ({ ...prev, [field]: values }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData as Herb | Formulation);
  };

  const isHerb = 'botanicalName' in item;
  const isFormulation = 'type' in item;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Edit { 'name' in item ? item.name : ''}</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="sanskritName" className="block text-sm font-medium text-gray-700">Sanskrit Name</label>
              <input
                type="text"
                id="sanskritName"
                name="sanskritName"
                value={formData.sanskritName || ''}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Herb-specific fields */}
            {isHerb && (
              <>
                <div>
                  <label htmlFor="botanicalName" className="block text-sm font-medium text-gray-700">Botanical Name</label>
                  <input
                    type="text"
                    id="botanicalName"
                    name="botanicalName"
                    value={(formData as Partial<Herb>).botanicalName || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="family" className="block text-sm font-medium text-gray-700">Family</label>
                  <input
                    type="text"
                    id="family"
                    name="family"
                    value={(formData as Partial<Herb>).family || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="parts" className="block text-sm font-medium text-gray-700">Parts Used (comma separated)</label>
                  <input
                    type="text"
                    id="parts"
                    name="parts"
                    value={Array.isArray((formData as Partial<Herb>).parts) ? (formData as Partial<Herb>).parts?.join(', ') : ''}
                    onChange={(e) => handleArrayChange('parts', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="rasa" className="block text-sm font-medium text-gray-700">Rasa (comma separated)</label>
                  <input
                    type="text"
                    id="rasa"
                    name="rasa"
                    value={Array.isArray((formData as Partial<Herb>).rasa) ? (formData as Partial<Herb>).rasa?.join(', ') : ''}
                    onChange={(e) => handleArrayChange('rasa', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="guna" className="block text-sm font-medium text-gray-700">Guna (comma separated)</label>
                  <input
                    type="text"
                    id="guna"
                    name="guna"
                    value={Array.isArray((formData as Partial<Herb>).guna) ? (formData as Partial<Herb>).guna?.join(', ') : ''}
                    onChange={(e) => handleArrayChange('guna', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="virya" className="block text-sm font-medium text-gray-700">Virya</label>
                  <input
                    type="text"
                    id="virya"
                    name="virya"
                    value={(formData as Partial<Herb>).virya || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="vipaka" className="block text-sm font-medium text-gray-700">Vipaka</label>
                  <input
                    type="text"
                    id="vipaka"
                    name="vipaka"
                    value={(formData as Partial<Herb>).vipaka || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="indications" className="block text-sm font-medium text-gray-700">Indications (comma separated)</label>
                  <textarea
                    id="indications"
                    name="indications"
                    rows={3}
                    value={Array.isArray((formData as Partial<Herb>).indications) ? (formData as Partial<Herb>).indications?.join(', ') : ''}
                    onChange={(e) => handleArrayChange('indications', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </>
            )}

            {/* Formulation-specific fields */}
            {isFormulation && (
              <>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    id="type"
                    name="type"
                    value={(formData as Partial<Formulation>).type || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="churna">Churna</option>
                    <option value="vati">Vati</option>
                    <option value="ghrita">Ghrita</option>
                    <option value="taila">Taila</option>
                    <option value="arishta">Arishta</option>
                    <option value="bhasma">Bhasma</option>
                    <option value="rasa">Rasa</option>
                    <option value="kashaya">Kashaya</option>
                    <option value="guggulu">Guggulu</option>
                    <option value="avaleha">Avaleha</option>
                    <option value="syrup">Syrup</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (JSON format)</label>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    rows={5}
                    value={JSON.stringify((formData as Partial<Formulation>).ingredients || [], null, 2)}
                    onChange={(e) => {
                      try {
                        const parsed = JSON.parse(e.target.value);
                        setFormData(prev => ({ ...prev, ingredients: parsed }));
                      } catch (error) {
                        console.error("Invalid JSON for ingredients");
                      }
                    }}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 font-mono text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="indications" className="block text-sm font-medium text-gray-700">Indications (comma separated)</label>
                  <textarea
                    id="indications"
                    name="indications"
                    rows={3}
                    value={Array.isArray((formData as Partial<Formulation>).indications) ? (formData as Partial<Formulation>).indications?.join(', ') : ''}
                    onChange={(e) => handleArrayChange('indications', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="contraindications" className="block text-sm font-medium text-gray-700">Contraindications (comma separated)</label>
                  <textarea
                    id="contraindications"
                    name="contraindications"
                    rows={2}
                    value={Array.isArray((formData as Partial<Formulation>).contraindications) ? (formData as Partial<Formulation>).contraindications?.join(', ') : ''}
                    onChange={(e) => handleArrayChange('contraindications', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="dosage.amount" className="block text-sm font-medium text-gray-700">Dosage Amount</label>
                  <input
                    type="text"
                    id="dosage.amount"
                    name="dosage.amount"
                    value={(formData as Partial<Formulation>).dosage?.amount || ''}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      dosage: { ...((prev as Partial<Formulation>).dosage || {}), amount: e.target.value } 
                    }))}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="dosage.frequency" className="block text-sm font-medium text-gray-700">Dosage Frequency</label>
                  <input
                    type="text"
                    id="dosage.frequency"
                    name="dosage.frequency"
                    value={(formData as Partial<Formulation>).dosage?.frequency || ''}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      dosage: { ...((prev as Partial<Formulation>).dosage || {}), frequency: e.target.value } 
                    }))}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
