import React from 'react';
import { motion } from 'framer-motion';
import './PageStyles.css';

function Contact() {
  return (
    <motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or need further information, please reach out to us. We're here to help!
      </p>
      <div className="contact-info">
        <div className="info-card">
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="info-card">
          <h3>Email</h3>
          <p>info@westberryschool.com</p>
        </div>
        <div className="info-card">
          <h3>Address</h3>
          <p>123 School Lane, Education City</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
