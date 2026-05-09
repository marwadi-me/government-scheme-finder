import React from 'react';

const categories = ['All', 'Education', 'Health', 'Agriculture', 'Employment', 'Women', 'Housing', 'General'];

const FilterBar = ({ activeCategory, onCategoryChange, schemes }) => {

  const getCount = (cat) => {
    if (!schemes) return '';
    return cat === 'All' ? schemes.length : schemes.filter(s => s.category === cat).length;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-colors ${
            activeCategory === cat
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'card text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700'
          }`}
        >
          {cat} {schemes ? `(${getCount(cat)})` : ''}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;