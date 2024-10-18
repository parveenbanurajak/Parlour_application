import React, { useState, useEffect } from 'react';
import './home.css';
import homepageImage from '../assets/homepage.png'; 
import Needforus from './Needforus';
import Services from './Services';
import Contact from './Contact';// Import the image
const Home = () => {
  // State for the experience counter
  const [experienceYears, setExperienceYears] = useState(1);

  // Use useEffect to handle the counter logic
  useEffect(() => {
    const maxYears = 24;
    const interval = setInterval(() => {
      setExperienceYears(prev => {
        if (prev < maxYears) {
          return prev + 1; // Increment the counter
        } else {
          clearInterval(interval); // Stop the counter at 24
          return prev; // Keep the count at 24
        }
      });
    }, 100); // Update every 100 milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="containerofhome" style={{ backgroundImage: `url(${homepageImage})` }}>
        <div className="contentofhome">
          <h1>WELCOME TO <span>MAYURI</span></h1>
          <p>Enhance your beauty, embrace your confidence. Discover your best self with our personalized care.</p>
        </div>
      </div>
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
