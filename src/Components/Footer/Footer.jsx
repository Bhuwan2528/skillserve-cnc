import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sf-footer-root">

      <div className="sf-footer-container">

        {/* LEFT */}
        <div className="sf-footer-about">

          <img src={logo} alt="SkillServe Logo" className="sf-footer-logo" />

          <p className="sf-footer-desc">
            SkillServe Academy is India’s leading technical skill academy focused
            on practical, job-ready training. We combine classroom learning,
            digital tools, and real industry environments aligned with Industry 4.0,
            LEAN, QMS and modern industrial practices.
          </p>

          <p className="sf-footer-tagline">
            Learn Today. Work Tomorrow.
          </p>

        </div>

        {/* RIGHT */}
        <div className="sf-footer-contact">

          <h3 className="sf-footer-heading">Contact Us</h3>

          <a href="tel:+919484794843" className="sf-contact-item">
            <FaPhoneAlt />
            <span>+91 94847 94843</span>
          </a>

          <a href="mailto:info@skillserve.in" className="sf-contact-item">
            <FaEnvelope />
            <span>info@skillserve.in</span>
          </a>

          <a 
            href="https://www.skillserve.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sf-contact-item"
          >
            <FaGlobe />
            <span>www.skillserve.in</span>
          </a>

          <a 
            href="https://maps.google.com/?q=Udyog Vihar Phase 7 Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="sf-contact-item"
          >
            <FaMapMarkerAlt />
            <span>
              Plot No. 98-C, Udyog Vihar Phase VII, Sector 35, Gurugram
            </span>
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="sf-footer-bottom">
        <p>© 2026 SkillServe Academy | All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;