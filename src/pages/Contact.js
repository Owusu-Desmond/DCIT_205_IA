
import React from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import '../css/Contact.css';
import bg from '../assets/images/header_images/contact_header_image.jpeg';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header title="Contact" currentPage="Contact" backgroundImage={bg} />
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptatibus.
              </p>
              <div className="c-info">
                <div className="c-info-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="c-info-text">
                  <h4>Address</h4>
                  <p>Legon, Accra, Ghana</p>
                </div>
              </div>
              <div className="c-info">
                <div className="c-info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="c-info-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:dcs@ug.edu.gh">
                      <span>
                      dcs@ug.edu.gh
                      </span>
                    </a>
                  </p>
                </div>

              </div>
              <div className="c-info">
                <div className="c-info-icon">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="c-info-text">
                  <h4>Call Us</h4>
                  <p>+233 302 500 171</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.081925053944!2d-0.1856548852325962!3d5.650240795966216!2m3!1f0!2f39.99999899999999!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1e3!2sUniversity%20of%20Ghana%20Computer%20Science%20Department!5e0!3m2!1sen!2sgh!4v1629783826513!5m2!1sen!2sgh" width="100%" height="450" allowfullscreen="" loading="lazy" title="map"></iframe>
        </div>     
      </section>
    <Footer />
    </>
  );
};

export default Contact;
