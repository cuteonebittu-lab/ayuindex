import React from 'react';
import { Leaf, Beaker, BookOpen, Users } from 'lucide-react';

interface StatsProps {
  herbCount: number;
  formulationCount: number;
}

export function Stats({ herbCount, formulationCount }: StatsProps) {
  const stats = [
    {
      icon: Leaf,
      label: 'Single Herbs',
      value: herbCount,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Beaker,
      label: 'Formulations',
      value: formulationCount,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: BookOpen,
      label: 'Total Indications',
      value: '800+',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: Users,
      label: 'Classical References',
      value: '100+',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}