import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contactcontainer">
        {/* Embed Google Maps iframe here */}
        <div className="mapforlocation">
          <iframe
            title="map-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.819329641176!2d80.1004125!3d13.1108728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52607e33f55555%3A0x58cc7a6ab0d2b0ea!2sGandhi%20Nagar%2C%20Avadi%2C%20Tamil%20Nadu%20600054!5e0!3m2!1sen!2sin!4v1695783490642!5m2!1sen!2sin"
          ></iframe>
        </div>

        {/* Contact form */}
        <section className="contact-section">
          <div className="contact-intro">
            <h2 className="contact-title">Get in Touch</h2>
          </div>

          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="163e395e-e3cb-46aa-9ba9-6b25bcaf8894" />
            <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
            <input type="hidden" name="from_name" value="My Website" />

            <div className="form-group-container">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" name="name" className="form-input" placeholder="Your name" type="text" required/>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Mobile Number</label>
                <input id="email" name="email" className="form-input" placeholder="Your number" type="tel"  required/>
              </div>
              <div className="form-group">
                <label htmlFor="service" className="form-label">Select Service</label>
                <select id="service" name="service" className="form-select" required>
                  <option value="">Select a service</option>
                  <option value="eyebrow_threading">Eyebrow Threading</option>
                  <option value="hair_cut">Hair Cut</option>
                  <option value="hair_coloring">Hair Coloring</option>
                  <option value="facial">Facial</option>
                  <option value="manicure">Manicure</option>
                  <option value="pedicure">Pedicure</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-textarea" id="message" name="message" placeholder="Payment details will be initimated by the owner"></textarea>
              </div>
            </div>
            <button className="form-submit" type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;