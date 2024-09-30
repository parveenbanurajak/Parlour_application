import React from 'react';
import './home.css';
import girl from '../assets/girl.jpg';
import Needforus from './Needforus';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="container">
        <div className="quote">
          <h1>
            Enhance your beauty, embrace your confidence. Discover your best self with our personalized care.
          </h1>
        </div>
        <div className="homeimage">
          <img src={girl} alt="Home" />
        </div>
      </div>
      
      {/* Include other sections */}
      <section id="needforus">
        <Needforus />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
