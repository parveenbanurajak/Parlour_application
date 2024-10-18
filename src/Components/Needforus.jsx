import React from 'react';
import './needforus.css';
import since from '../assets/since.png';

const Needforus = () => {
  return (
    <div>
      <div className="Needcontainer">
        <div className="beautyproducts">
          <img src={since} alt="Mayuri Parlour Since 2000" />
        </div>
        <div className="contentofneed">
          <h2>Why you need to choose us</h2>
          <p>
            With over 24+ years of experience, Mayuri Parlour has been enhancing beauty and confidence since 2000. Whether it's a flawless makeover or skincare that brings out your natural glow, our expert services are tailored to meet your individual needs. Beauty isn't just about looking great—it's about feeling empowered and radiant from within.
          </p>
          <p>
            Our carefully selected products and cutting-edge techniques reflect our dedication to quality. Whether it’s a casual day or a special event, trust our decades of experience to transform your look and provide the care you deserve, making us your trusted choice for over two decades.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Needforus;
