import React from 'react'
import { Link } from 'react-router-dom'
import { Landmark } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-[100] h-20 transition-all border-b border-slate-100">
      <div className="w-full px-8 h-full flex items-center justify-between relative">
        
        {/* Far Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-[#FF9933]/15 p-2 rounded-xl">
              <Landmark className="w-7 h-7 text-[#FF9933]" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Adhikar
            </span>
          </Link>
        </div>

        {/* Center: Links (Absolute Centered) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
          <Link to="/form" className="group relative py-2 text-base font-bold text-slate-700 hover:text-[#FF9933] transition-colors">
            User Info
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9933] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/form" className="group relative py-2 text-base font-bold text-slate-700 hover:text-[#138808] transition-colors">
            Schemes
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#138808] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Far Right: Gradient Button */}
        <div className="flex-shrink-0">
          <Link 
            to="/form" 
            className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-[#FF9933] to-[#e67e00] text-white text-base font-bold hover:scale-105 transition-all shadow-lg shadow-[#FF9933]/20"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>
    </nav>
  )
}

export default Navbar
