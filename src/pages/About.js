import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  // Smooth scroll to the element if a hash is present in the URL.
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash;
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <motion.div className="about-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Section 1: Our School */}
      <section id="our-school" className="about-section">
        <h2>Our School</h2>
        <div className="section-content">
          <img src="/images/school.jpg" alt="Our School" className="section-image" />
          <div className="section-text">
            <p>
              Our school is a thriving hub of learning and creativity, offering state-of-the-art facilities and a dynamic
              curriculum that nurtures every student’s unique potential.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Our Classrooms */}
      <section id="our-classrooms" className="about-section">
        <h2>Our Classrooms</h2>
        <div className="section-content reverse">
          <img src="/images/classroom.jpg" alt="Our Classrooms" className="section-image" />
          <div className="section-text">
            <p>
              Our classrooms are designed to inspire innovation and collaboration. Equipped with the latest technology,
              they provide a stimulating environment for academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Principal */}
      <section id="our-principal" className="about-section">
        <h2>Our Principal</h2>
        <div className="section-content">
          <img src="/images/principal.jpg" alt="Our Principal" className="section-image" />
          <div className="section-text">
            <p>
              Our principal brings a wealth of experience and a passion for education. Their leadership is at the heart of our commitment to
              excellence and student well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Our Teachers */}
      <section id="our-teachers" className="about-section">
        <h2>Our Teachers</h2>
        <div className="teachers-container">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="teacher-card">
              <img src={`/images/teacher${index + 1}.jpg`} alt={`Teacher ${index + 1}`} className="teacher-image" />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default About;
