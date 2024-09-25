import React from 'react';
import MAYURIS from '../assets/MAYURIS.png';
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="Navcontainer">
        <div className="logo">
          <img src={MAYURIS} alt="Logo" style={{ width: '150px' }} />
        </div>
        <div className="links">
          <a href="/" className="nav-link">Home</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/products" className="nav-link">Products</a>
          <a href="/contact" className="nav-link">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
