import './App.css'
import Navbar from "./components/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technical-solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
