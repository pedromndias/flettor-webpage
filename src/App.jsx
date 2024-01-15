import './App.css'
import Navbar from "./components/Navbar"
import {Route, Routes, useNavigate} from "react-router-dom"
import HomeCover from './components/HomeCover'
import About from './pages/About'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import TermsCon from './pages/TermsCon'
import { useState } from 'react'
import backToTop from "./assets/back-to-top.png"
import PrivacyPol from './pages/PrivacyPol'

function App() {
  
  // Let's create a state to show the HomeCover overlay:
  const [showCover, setShowCover] = useState(true)
  const navigate = useNavigate()

  const handleEnterClick = () => {
    // Redirect to "/about" when we click the Enter button:
    navigate("about")
    // Change the showCover state:
    setShowCover(false);
  }

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className='app-container'>
  
      {showCover && <HomeCover onEnterClick={handleEnterClick} />}

      <Navbar />

      <button className="back-to-top-btn" onClick={scrollToTop}>
        <img src={backToTop} alt="back-to-top" />
      </button>

      <Routes>
        <Route path="/" element={<HomeCover onEnterClick={handleEnterClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technical-solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsCon />} />
        <Route path="/privacy-policy" element={<PrivacyPol />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
