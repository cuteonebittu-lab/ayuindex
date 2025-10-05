import React from 'react';
import { Leaf, BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <a href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
            <Leaf className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AyuIndex</h1>
            <p className="text-emerald-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Comprehensive Ayurvedic Drug Database
            </p>
          </div>
        </a>
      </div>
    </header>
  );
}
