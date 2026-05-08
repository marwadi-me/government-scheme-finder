import React, { useState, useEffect } from 'react';
import SchemeCard from '../components/SchemeCard';
import FilterBar from '../components/FilterBar';

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/Marwadi-me/government-scheme-finder/schemes');
        const data = await response.json();
        setSchemes(data);
        setFiltered(data);
      } catch (error) {
        console.error('Error fetching schemes:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSchemes();
  }, []);

  const handleFilter = (cat) => {
    setActive(cat);
    setFiltered(cat === 'All' ? schemes : schemes.filter(s => s.category === cat));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Government Schemes</h1>
      
      <FilterBar activeCategory={active} onCategoryChange={handleFilter} />

      {loading ? (
        <p className="text-center text-slate-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(s => <SchemeCard key={s.id} scheme={s} />)}
        </div>
      )}
    </div>
  );
};

export default Schemes;