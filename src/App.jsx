import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Schemes from './pages/Schemes'
import ProfileForm from './components/ProfileForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  // Check if user had dark mode on last time (from localStorage)
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // Every time isDark changes, update the <html> class and save to localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');    // adds .dark to <html>
    } else {
      document.documentElement.classList.remove('dark'); // removes .dark from <html>
    }
    localStorage.setItem('darkMode', isDark); // remember the choice
  }, [isDark]);

  // Toggle between dark and light
  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar isDark={isDark} toggleDark={toggleDark} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<ProfileForm />} />
            <Route path="/schemes" element={<Schemes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App