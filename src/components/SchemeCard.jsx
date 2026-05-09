import React from 'react';

const SchemeCard = ({ scheme }) => {
  if (!scheme) return null;
  return (
    <div className="card p-6 hover:shadow-md">
      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-2 py-1 rounded">
        {scheme.category}
      </span>
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-3 mb-1">{scheme.name}</h3>
      <p className="text-body text-sm mb-3">{scheme.benefit}</p>
      <p className="text-xs text-muted">✔ Age: {scheme.min_age}–{scheme.max_age} yrs</p>
      <p className="text-xs text-muted mb-4">
        ✔ Income: {scheme.max_income >= 99999999 ? 'No limit' : `Below ₹${scheme.max_income.toLocaleString('en-IN')}`}
      </p>
      <a href={scheme.apply_url} target="_blank" rel="noopener noreferrer"
        className="block text-center bg-[#FF9933] text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors">
        Apply Now
      </a>
    </div>
  );
};

export default SchemeCard;