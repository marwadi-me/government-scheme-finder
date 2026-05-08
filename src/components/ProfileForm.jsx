import React, { useState } from 'react';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  age: '',
  gender: '',
  district: '',
  annualIncome: '', // Added annual income field
  casteCategory: '', // Added caste/category field
};

const ProfileForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email) {
      alert('Please fill in required fields.');
      return;
    }
    setSubmitted(true);
    console.log('Profile data:', form);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 p-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">User Profile Information</h2>
        <p className="text-slate-500 mb-8">Please provide your details to see eligible schemes.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91-9876543210"
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                min="0"
                placeholder="30"
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">District</label>
              <input
                type="text"
                name="district"
                value={form.district}
                onChange={handleChange}
                placeholder="Your district"
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
  <label className="block text-sm font-medium text-slate-700 mb-1">Annual Family Income</label>
  <input
    type="text"
    name="annualIncome"
    list="incomeRanges"
    value={form.annualIncome}
    onChange={handleChange}
    placeholder="Select or type income"
    className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
  />
  <datalist id="incomeRanges">
    <option value="Below ₹1,00,000" />
    <option value="₹1,00,001 - ₹3,00,000" />
    <option value="₹3,00,001 - ₹5,00,000" />
    <option value="₹5,00,001 - ₹10,00,000" />
    <option value="Above ₹10,00,000" />
  </datalist>
</div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Caste / Category</label>
              <select
                name="casteCategory"
                value={form.casteCategory}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option value="">Select</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105"
          >
            Find Schemes
          </button>
        </form>
        {submitted && (
          <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-xl text-green-800">
            🎉 Profile saved! Check the console for submitted data.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
