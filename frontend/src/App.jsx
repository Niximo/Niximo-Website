import { useState } from 'react'
import { BrowserRouter, useRoutes, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import Career from './pages/Career'
import OurWorks from './pages/OurWorks'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact-Us" element={<ContactUs/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/our-works" element={<OurWorks/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
