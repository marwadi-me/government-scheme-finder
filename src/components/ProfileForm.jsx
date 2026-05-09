import React, { useState, useEffect } from "react";
import SchemeCard from "./SchemeCard";
import FilterBar from "./FilterBar";

// Reusable field wrapper so we don't repeat label + input layout every time
const Field = ({ label, children }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    {children}
  </div>
);

// Shared className for every input / select
const inputClass = "w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:border-indigo-500 transition";

const ProfileForm = () => {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "",
    age: "", gender: "", district: "",
    annualIncome: "", casteCategory: "",
  });

  const [allSchemes, setAllSchemes] = useState([]); // fetched once on mount
  const [schemes, setSchemes]       = useState([]); // eligible results
  const [filtered, setFiltered]     = useState([]); // after category filter
  const [active, setActive]         = useState("All");
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);

  // Fetch all schemes once when the page loads
  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setAllSchemes(data.schemes))
      .catch(err => console.error("Failed to load schemes:", err));
  }, []);

  // Update a single form field
  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  // Filter schemes when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Safety check: if schemes haven't loaded yet, show a message and stop
    if (allSchemes.length === 0) {
      alert("Schemes are still loading. Please wait a moment and try again.");
      return;
    }

    setLoading(true);

    const age    = parseInt(form.age);      // convert age to a number
    const income = parseInt(form.annualIncome); // income is now a clean number from <select>

    // Go through every scheme and keep only the ones that match the user
    const eligible = allSchemes.filter(s => {
      const ageOk      = age >= s.min_age && age <= s.max_age;
      const incomeOk   = income <= s.max_income;
      const genderOk   = s.gender === "All" || s.gender.toLowerCase() === form.gender.toLowerCase();
      const categoryOk = s.eligible_categories.some(
        c => c.toLowerCase() === "all" || c.toLowerCase() === form.casteCategory.toLowerCase()
      );
      return ageOk && incomeOk && genderOk && categoryOk;
    });

    setSchemes(eligible);
    setFiltered(eligible);
    setSubmitted(true);
    setLoading(false);
  };

  // Filter results by category tab
  const handleFilter = (cat) => {
    setActive(cat);
    setFiltered(cat === "All" ? schemes : schemes.filter(s => s.category === cat));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Eligibility Check</h2>
        <p className="text-slate-500 mb-8">Provide your details to find eligible schemes.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Field label="Full Name">
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
            </Field>

            <Field label="Email">
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
            </Field>

            <Field label="Phone">
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91-9876543210" className={inputClass} />
            </Field>

            <Field label="Age">
              <input type="number" name="age" value={form.age} onChange={handleChange} min="0" required placeholder="30" className={inputClass} />
            </Field>

            <Field label="Gender">
              <select name="gender" value={form.gender} onChange={handleChange} className={`${inputClass} bg-white`}>
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </Field>

            <Field label="District">
              <input type="text" name="district" value={form.district} onChange={handleChange} placeholder="Your district" className={inputClass} />
            </Field>

            <Field label="Annual Family Income">
              {/* Each option value is the actual number — easy to parse correctly */}
              <select name="annualIncome" value={form.annualIncome} onChange={handleChange} required className={`${inputClass} bg-white`}>
                <option value="">Select income range</option>
                <option value="100000">Below ₹1,00,000</option>
                <option value="300000">₹1,00,001 – ₹3,00,000</option>
                <option value="500000">₹3,00,001 – ₹5,00,000</option>
                <option value="1000000">₹5,00,001 – ₹10,00,000</option>
                <option value="99999999">Above ₹10,00,000</option>
              </select>
            </Field>

            <Field label="Caste / Category">
              <select name="casteCategory" value={form.casteCategory} onChange={handleChange} className={`${inputClass} bg-white`}>
                <option value="">Select</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="other">Other</option>
              </select>
            </Field>

          </div>

          <button type="submit" disabled={loading} className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition hover:scale-105">
            {loading ? "Searching..." : "Check Eligibility"}
          </button>
        </form>

        {submitted && (
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Eligible Schemes Found: {schemes.length}
            </h3>
            {schemes.length === 0 ? (
              <p className="text-slate-500 text-center py-8">
                No schemes found for your profile. Try adjusting your details.
              </p>
            ) : (
              <>
                {/* Pass schemes so FilterBar can show count per category */}
                <FilterBar activeCategory={active} onCategoryChange={handleFilter} schemes={schemes} />
                <div className="grid grid-cols-1 gap-6 mt-6">
                  {filtered.map(s => <SchemeCard key={s.id} scheme={s} />)}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
