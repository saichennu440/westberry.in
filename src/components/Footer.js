import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>West Berry School</h3>
          <p>© {new Date().getFullYear()} West Berry School. All rights reserved.</p>
          <p>Empowering future leaders through quality education.</p>
        </div>
        <div className="footer-right">
          <div className="footer-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
          <div className="footer-contact">
            <a href="tel:+15551234567"><FaPhoneAlt /> +1 (555) 123-4567</a>
            <a href="mailto:info@westberryschool.com"><FaEnvelope /> info@westberryschool.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
