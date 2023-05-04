import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
