import React from 'react';
import { motion } from 'framer-motion';
import './PageStyles.css';

function Admissions() {
  return (
    <motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Admissions</h1>
      <p>
        Welcome to our admissions page. Here you'll find detailed information about enrollment, criteria, and upcoming events.
      </p>
      <div className="card-container">
        <div className="info-card">
          <img src="/images/admission1.jpg" alt="Enrollment Process" />
          <h3>Enrollment Process</h3>
          <p>Step-by-step guide to complete your admission.</p>
        </div>
        <div className="info-card">
          <img src="/images/admission2.jpg" alt="Scholarships" />
          <h3>Scholarships</h3>
          <p>Discover available scholarships and financial aid options.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Admissions;
