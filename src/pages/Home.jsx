import React from 'react'
import { Link } from 'react-router-dom'
import ParliamentImg from '../assets/bgimg.jpg'

const Home = () => {
  return (
    <div className="overflow-hidden">

      <section className="relative min-h-[70vh] flex items-center py-20 bg-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={ParliamentImg} alt="Parliament" className="w-full h-full object-cover object-top" style={{ mixBlendMode: 'multiply' }} />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            Discover Government Schemes <br /> <span className="text-[#FF9933]">Made For You</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Answer a few simple questions and instantly find all central and state government schemes you are eligible for.
          </p>
          <div className="mt-8">
            <Link to="/form" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF9933] text-white text-lg font-bold rounded-xl hover:bg-orange-600 transition-colors">
              Find Your Schemes <span className="ml-1 text-2xl leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🏛", val: "30+", label: "Government Schemes", color: "text-[#FF9933]" },
            { icon: "📄", val: "6", label: "Main Categories", color: "text-[#138808]" },
            { icon: "🌏", val: "All", label: "Indian States Covered", color: "text-blue-600" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl">
              <div className={`text-4xl mb-4 ${item.color}`}>{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800">{item.val}</h3>
              <p className="text-slate-500 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-slate-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { num: "1", icon: "📝", title: "Fill Your Details", desc: "Provide basic info like age and state." },
              { num: "2", icon: "🔍", title: "We Match Schemes", desc: "Our logic finds schemes for you." },
              { num: "3", icon: "✅", title: "View & Apply", desc: "See benefits and apply links." }
            ].map((step, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-2xl hover:border-[#FF9933] transition-colors bg-white">
                <div className="w-10 h-10 bg-[#FF9933] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">{step.num}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
