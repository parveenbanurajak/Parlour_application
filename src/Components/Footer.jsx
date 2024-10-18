import React from 'react';
import './footer.css';  // Separate CSS file for footer
import MAYURIS from '../assets/MAYURIS.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={MAYURIS} alt="Logo" style={{ width: '120px' }} />
      </div>

      <div className="footer-nav">
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#whyus">Why You Need Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-content">
        <p>&copy; 2024 MAYURI. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
