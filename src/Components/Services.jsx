import React from "react";
import eyebrow from "../assets/eyebrow.png"; 
import haircut from "../assets/haircut.png";
import facial from "../assets/facial.png";
import pedicure from "../assets/pedicure.png";
import medicure from "../assets/medicure.png";
import haircolor from "../assets/haircolor.png";
import hairextension from "../assets/hairextension.png";
import waxing from "../assets/waxing.png";
import Blowdry from "../assets/Blowdry.jpg";
import Keratin from "../assets/Keratin.jpg";
import earlobe from "../assets/earlobe.jpg";
import Smoothening from "../assets/Smoothening.jpg";
import './services.css';

// Reusable service card component
const ServiceCard = ({ image, title, customStyle }) => {
  return (
    <div className="card" style={customStyle}>
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const serviceData1 = [
    { image: eyebrow, title: "Eyebrow Threading" },
    { image: facial, title: "Facial Treatment" },
    { image: haircut, title: "Haircut" },
    { image: hairextension, title: "Hair Extension" },
  ];

  const serviceData2 = [
    { image: Blowdry, title: "Permanent Blowdry" },
    { image: medicure, title: "Manicure" },
    { image: Keratin, title: "Keratin" },
    { image: haircolor, title: "Haircolor" },
  ];

  const serviceData3 = [
    { image: Smoothening, title: "Smoothening" },
    { image: pedicure, title: "Pedicure" },
    { image: earlobe, title: "Earlobe" },
    { image: waxing, title: "Waxing" },
  ];

  return (
    <div>
      <div className="services">
        <h1>Providing Services for the client</h1>
      </div>

      {/* First row of services */}
      <div className="servicecontainer">
        {serviceData1.map((service, index) => (
          <div key={index} className="service1">
            <ServiceCard image={service.image} title={service.title} />
          </div>
        ))}
      </div>

      {/* Second row of services */}
      <div className="servicecontainer">
        {serviceData2.map((service, index) => (
          <div key={index} className={`service${index === 3 ? '3' : '1'}`}>
            <ServiceCard image={service.image} title={service.title} />
          </div>
        ))}
      </div>

      {/* Third row of services */}
      <div className="servicecontainer">
        {serviceData3.map((service, index) => (
          <div key={index} className={`service${index === 3 ? '3' : '1'}`}>
            <ServiceCard image={service.image} title={service.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
