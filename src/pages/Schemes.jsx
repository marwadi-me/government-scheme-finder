import React, { useState, useEffect } from 'react';
import SchemeCard from '../components/SchemeCard';
import FilterBar from '../components/FilterBar';

const Schemes = () => {
  const [schemes, setSchemes]   = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive]     = useState('All');
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState('');

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => { setSchemes(data.schemes); setFiltered(data.schemes); })
      .catch(err => console.error('Error fetching schemes:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = (cat) => {
    setActive(cat);
    setSearch('');
    setFiltered(cat === 'All' ? schemes : schemes.filter(s => s.category === cat));
  };

  const visibleSchemes = filtered.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-4 text-slate-900 dark:text-white">Government Schemes</h1>

      <input
        type="text"
        placeholder="Search schemes by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="input-field mb-6"
      />

      <FilterBar activeCategory={active} onCategoryChange={handleFilter} schemes={filtered} />

      {loading && <p className="text-center text-muted mt-10">Loading schemes...</p>}

      {!loading && visibleSchemes.length === 0 && (
        <p className="text-center text-muted mt-10">No schemes match your search.</p>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {visibleSchemes.map(s => <SchemeCard key={s.id} scheme={s} />)}
        </div>
      )}
    </div>
  );
};

export default Schemes;