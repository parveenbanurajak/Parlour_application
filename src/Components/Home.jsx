import React from 'react';
import './home.css';
import girl from '../assets/girl.jpg';

const Home = () => {
  return (
    <div>
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
    </div>
  );
}

export default Home;
