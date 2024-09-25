import React from 'react'
import Home from './Components/Navbar.jsx'
import Navbar from './Components/Home.jsx'
import Services from './Components/Services.jsx'
import Needforus from './Components/Needforus.jsx'
import Contact from './Components/Contact.jsx'

const App = () => {
  return (
    <div>
      <Home/>
      <Navbar/>
      <Needforus/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App
