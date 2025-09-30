import React, { useState } from 'react';

import { Herb, Formulation } from '../types/ayurveda';

interface AddFormProps {
  onAdd: (item: Partial<Herb> | Partial<Formulation>) => void;
  type: 'herb' | 'formulation';
}

export function AddForm({ onAdd, type }: AddFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    onAdd({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg mb-8">
      <h3 className="text-lg font-semibold mb-2">Add New {type === 'herb' ? 'Herb' : 'Formulation'}</h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={`Enter ${type === 'herb' ? 'herb' : 'formulation'} name`}
          className="flex-grow p-2 border rounded-md"
        />
        <button type="submit" className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
          Add
        </button>
      </div>
    </form>
  );
}
