import React, { useState, useEffect } from 'react';
import SchemeCard from '../components/SchemeCard';
import FilterBar from '../components/FilterBar';

const Schemes = () => {
  const [schemes, setSchemes]   = useState([]);   // all schemes from the file
  const [filtered, setFiltered] = useState([]);   // schemes after category filter
  const [active, setActive]     = useState('All');
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState('');   // what user types in search box

  // Fetch schemes once when the page loads
  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => { setSchemes(data.schemes); setFiltered(data.schemes); })
      .catch(err => console.error('Error fetching schemes:', err))
      .finally(() => setLoading(false));
  }, []);

  // When user clicks a category tab
  const handleFilter = (cat) => {
    setActive(cat);
    setSearch(''); // clear search when changing category
    if (cat === 'All') {
      setFiltered(schemes);
    } else {
      setFiltered(schemes.filter(s => s.category === cat));
    }
  };

  // Filter by search — show only schemes whose name contains the search text
  const visibleSchemes = filtered.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Government Schemes</h1>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search schemes by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 transition"
      />

      {/* Category filter tabs — pass schemes so it shows counts */}
      <FilterBar activeCategory={active} onCategoryChange={handleFilter} schemes={filtered} />

      {/* Loading message */}
      {loading && <p className="text-center text-slate-500 mt-10">Loading schemes...</p>}

      {/* No results message */}
      {!loading && visibleSchemes.length === 0 && (
        <p className="text-center text-slate-400 mt-10">No schemes match your search.</p>
      )}

      {/* Show the scheme cards */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {visibleSchemes.map(s => <SchemeCard key={s.id} scheme={s} />)}
        </div>
      )}
    </div>
  );
};

export default Schemes;