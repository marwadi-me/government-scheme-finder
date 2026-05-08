import React from 'react';

const categories = ['All', 'Education', 'Health', 'Agriculture', 'Employment', 'Women', 'Housing', 'General'];

const FilterBar = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-colors ${
            activeCategory === category
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;