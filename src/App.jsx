import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Home from './Pages/Home'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSlider from './Components/HeroSlider'


const App = () => {
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <HeroSlider />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App