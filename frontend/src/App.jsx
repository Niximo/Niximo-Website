import { useState } from 'react'
import { BrowserRouter, useRoutes, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Home from './pages/home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
