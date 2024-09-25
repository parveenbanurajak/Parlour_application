import React from 'react';
import product from '../assets/product.png';
import './needforus.css';

const Needforus = () => {
  return (
    <div>
      <div className="Needcontainer">
        <div className="beautyproducts">
          <img src={product} alt="Beauty Products" />
        </div>
        <div className="contentofneed">
          <h2>Why You Need Us?</h2>
          <p>
            At our parlour, we believe that beauty is an art form. Whether it's a flawless makeover or skincare
            that enhances your natural glow, we provide expert services tailored to your needs. Makeup isn’t 
            just about looking good—it’s about feeling confident and empowered.
          </p>
          <p>
            Our products and techniques are carefully chosen to suit your unique style, helping you embrace
            your individuality while feeling radiant. Whether it’s a casual day or a special event, let us 
            transform your look and give you the care you deserve.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Needforus;
