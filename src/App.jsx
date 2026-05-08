import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Schemes from './pages/Schemes'
import ProfileForm from './components/ProfileForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
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