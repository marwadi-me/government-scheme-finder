import React, { useState } from "react";
import SchemeCard from "./SchemeCard";
import FilterBar from "./FilterBar";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  district: "",
  annualIncome: "",
  casteCategory: "",
};

const ProfileForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [schemes, setSchemes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("All");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://my-json-server.typicode.com/Marwadi-me/government-scheme-finder/schemes");
      const data = await response.json();

      const eligible = data.filter((s) => {
        const age = parseInt(form.age);
        const income = parseInt(form.annualIncome.replace(/[^\d]/g, "")) || 10000000;
        return (
          age >= s.min_age &&
          age <= s.max_age &&
          (s.gender === "All" || s.gender.toLowerCase() === form.gender.toLowerCase()) &&
          income <= s.max_income &&
          s.eligible_categories.some(c => c === "All" || c.toLowerCase() === form.casteCategory.toLowerCase())
        );
      });

      setSchemes(eligible);
      setFiltered(eligible);
      setSubmitted(true);
    } catch (error) {
      console.error("Error finding schemes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (cat) => {
    setActive(cat);
    setFiltered(cat === "All" ? schemes : schemes.filter((s) => s.category === cat));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Eligibility Check
        </h2>
        <p className="text-slate-500 mb-8">
          Please provide your details to see eligible schemes.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="John Doe" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone
              </label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91-9876543210" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Age
              </label>
              <input type="number" name="age" value={form.age} onChange={handleChange} min="0" placeholder="30" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Gender
              </label>
              <select name="gender" value={form.gender} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-2 bg-white focus:outline-none focus:border-indigo-500 transition">
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                District
              </label>
              <input type="text" name="district" value={form.district} onChange={handleChange} placeholder="Your district" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Annual Family Income
              </label>
              <input type="text" name="annualIncome" list="incomeRanges" value={form.annualIncome} onChange={handleChange} placeholder="Select or type income" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:border-indigo-500 transition" />
              <datalist id="incomeRanges">
                <option value="Below ₹1,00,000" />
                <option value="₹1,00,001 - ₹3,00,000" />
                <option value="₹3,00,001 - ₹5,00,000" />
                <option value="₹5,00,001 - ₹10,00,000" />
                <option value="Above ₹10,00,000" />
              </datalist>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Caste / Category
              </label>
              <select name="casteCategory" value={form.casteCategory} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-2 bg-white focus:outline-none focus:border-indigo-500 transition">
                <option value="">Select</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105">
            {loading ? "Searching..." : "Check Eligibility"}
          </button>
        </form>

        {submitted && (
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Eligible Schemes Found: {schemes.length}
            </h3>
            <FilterBar activeCategory={active} onCategoryChange={handleFilter} />
            <div className="grid grid-cols-1 gap-6 mt-6">
              {filtered.map((s) => (
                <SchemeCard key={s.id} scheme={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;