import React from 'react';
import { Link } from 'react-router-dom';
import MAYURIS from '../assets/MAYURIS.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="Navcontainer">
        <div className="logo">
          {/* Wrap the logo image with the Link component */}
          <Link to="/">
            <img src={MAYURIS} alt="Logo" style={{ width: '120px' }} />
          </Link>
        </div>
        <div className="links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/needforus" className="nav-link">Needforus</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
