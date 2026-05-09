import { Link } from 'react-router-dom';

// isDark and toggleDark are passed from App.jsx
const Navbar = ({ isDark, toggleDark }) => (
  <nav className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-[100] h-20 border-b border-slate-100 dark:border-gray-700 transition-colors duration-300">
    <div className="w-full px-8 h-full flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="bg-[#FF9933]/15 p-2 rounded-xl text-xl">🏛</div>
        <span className="text-2xl font-black text-slate-900 dark:text-white">Adhikar</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        <Link to="/form" className="font-bold text-slate-700 dark:text-gray-300 hover:text-[#FF9933] transition-colors">User Info</Link>
        <Link to="/schemes" className="font-bold text-slate-700 dark:text-gray-300 hover:text-[#138808] transition-colors">Schemes</Link>
      </div>

      {/* Right side: Dark mode toggle + CTA */}
      <div className="flex items-center gap-3">

        {/* Dark mode toggle button */}
        <button
          onClick={toggleDark}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-800 text-xl transition-colors hover:bg-slate-100 dark:hover:bg-gray-700"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <Link to="/form" className="px-8 py-2.5 rounded-xl bg-[#FF9933] text-white font-bold hover:bg-orange-600 transition-colors">
          Get Started
        </Link>
      </div>

    </div>
  </nav>
);

export default Navbar;