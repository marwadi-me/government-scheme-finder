import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-600 font-medium">
          Adhikar — Helping every Indian claim what they deserve
        </p>
        <div className="mt-4 flex justify-center gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Adhikar</span>
          <span>•</span>
          <span>Government of India Project</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
