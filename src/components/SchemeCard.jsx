import React from 'react';

const SchemeCard = ({ scheme }) => {
  if (!scheme) return null;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
          {scheme.category}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-2">{scheme.name}</h3>
      <p className="text-slate-600 text-sm mb-4">{scheme.benefit}</p>

      <div className="text-xs text-slate-500 mb-6">
        <p>✔ Age: {scheme.min_age}-{scheme.max_age} years</p>
        <p>✔ Income: Below ₹{scheme.max_income}</p>
      </div>

      <a
        href={scheme.apply_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700"
      >
        Apply Now
      </a>
    </div>
  );
};

export default SchemeCard;