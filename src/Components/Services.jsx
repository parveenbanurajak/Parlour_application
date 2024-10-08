import React from "react";
import "./services.css";
import eyebrow from '../assets/eyebrow.png'; // Importing the eye image
import haircut from '../assets/haircut.png';
import facial from '../assets/facial.png';
import pedicure from '../assets/pedicure.png';
import medicure from '../assets/medicure.png';
import haircolor from '../assets/haircolor.png';
import hairextension from '../assets/hairextension.png';
import earlobe from '../assets/earlobe.png';
import waxing from '../assets/waxing.png';
const Services = () => {
  return ( 
    <div>
      <div className="services">
        {/* <h1>Services</h1> */}
      </div>
      <div className="servicecontainer">
        <div className="service1">
          <div className="card" style={{ width: "18rem" }}>
            <img src={eyebrow} className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Eyebrow Threading</p>
            </div>
          </div>
        </div>
        <div className="service2">
          <div className="card" style={{ width: "18rem" }}>
            <img src={facial} className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Facial treatment</p>
            </div>
          </div>
        </div>
        <div className="service3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={haircut} className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Haircut</p>
            </div>
          </div>
        </div>
      </div>
      <div className="servicecontainer">
        <div className="service1">
          <div className="card" style={{ width: "18rem" }}>
            <img src={pedicure} className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Pedicure</p>
            </div>
          </div>
        </div>
        <div className="service2">
          <div className="card" style={{ width: "18rem" }}>
            <img src={haircolor} className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Hair color</p>
            </div>
          </div>
        </div>
        <div className="service3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={medicure}className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Manicure</p>
            </div>
          </div>
        </div>
      </div>
      <div className="servicecontainer">
        <div className="service1">
          <div className="card" style={{ width: "18rem" }}>
            <img src={earlobe} className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Hair Extension</p>
            </div>
          </div>
        </div>
        <div className="service2">
          <div className="card" style={{ width: "18rem" }}>
            <img src={hairextension} className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Earlobe</p>
            </div>
          </div>
        </div>
        <div className="service3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={waxing}className="card-img-top" alt="eye image" />
            <div className="card-body">
              <p className="card-text">Manicure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
