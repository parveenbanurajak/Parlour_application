import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Needforus from './Components/Needforus';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/needforus" element={<Needforus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/>
    </Router>
  );
};

export default App;
