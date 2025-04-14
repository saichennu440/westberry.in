import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import butterflyGif from '../assets/butterfly1.gif';

function About() {
  // Smooth scroll to the element if a hash is present in the URL.
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash;
      const el = document.querySelector(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Section 1: Our School (image on left) */}
      <section id="our-school" className="about-section left-image">
        <h2>Our School</h2>

        {/* Desktop butterfly */}
        <motion.img
          src={butterflyGif}
          alt="Flying Butterfly"
          className="scroll-butterfly desktop"
          initial={{ x: '-80px', opacity: 1 }}
          whileInView={{ x: 'calc(100% - 80px)', opacity: 0 }}
          transition={{ duration: 6, ease: 'linear' }}
          viewport={{ once: true, amount: 0.1 }}
        />

        <div className="section-content">
          <img src="/images/random4.jpg" alt="Our School" className="section-image" />
          <div className="section-text">
            <p>
              Our school is a thriving hub of learning and creativity, offering state-of-the-art facilities and a dynamic
              curriculum that nurtures every student’s unique potential.
            </p>
          </div>
        </div>

        {/* Mobile butterfly */}
        <motion.img
          src={butterflyGif}
          alt="Flying Butterfly"
          className="scroll-butterfly mobile"
          initial={{ x: '100%', opacity: 1 }}
          whileInView={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 6, ease: 'linear' }}
          viewport={{ once: true, amount: 0.1 }}
        />
      </section>

      {/* Section 2: Our Classrooms (image on right) */}
      <section id="our-classrooms" className="about-section right-image">
        <h2>Our Classrooms</h2>

        <motion.img
          src={butterflyGif}
          alt="Flying Butterfly"
          className="scroll-butterfly desktop"
          initial={{ x: '100%', opacity: 1 }}
          whileInView={{ x: '0px', opacity: 0 }}
          transition={{ duration: 6, ease: 'linear' }}
          viewport={{ once: true, amount: 0.1 }}
        />

        <div className="section-content reverse">
          <img src="/images/random5.jpg" alt="Our Classrooms" className="section-image" />
          <div className="section-text">
            <p>
              Our classrooms are designed to inspire innovation and collaboration. Equipped with the latest technology,
              they provide a stimulating environment for academic excellence.
            </p>
          </div>
        </div>

        <motion.img
          src={butterflyGif}
          alt="Flying Butterfly"
          className="scroll-butterfly mobile"
          initial={{ x: '100%', opacity: 1 }}
          whileInView={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 6, ease: 'linear' }}
          viewport={{ once: true, amount: 0.1 }}
        />
      </section>

      {/* Section 3: Our Principal (image on left) */}
      <section id="our-principal" className="about-section left-image">
        <h2>Our Principal</h2>

        <motion.img
          src={butterflyGif}
          alt="Flying Butterfly"
          className="scroll-butterfly desktop"
          initial={{ x: '-80px', opacity: 1 }}
          whileInView={{ x: 'calc(100% - 80px)', opacity: 0 }}
          transition={{ duration: 6, ease: 'linear' }}
          viewport={{ once: true, amount: 0.1 }}
        />

        <div className="section-content">
          <img src="/images/random6.jpg" alt="Our Principal" className="section-image" />
          <div className="section-text">
            <p>
              Our principal brings a wealth of experience and a passion for education. Their leadership is at the heart of our commitment to
              excellence and student well-being.
            </p>
          </div>
        </div>

        <motion.img
          src={butterflyGif}
          alt="Flying Butterfly"
          className="scroll-butterfly mobile"
          initial={{ x: '100%', opacity: 1 }}
          whileInView={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 6, ease: 'linear' }}
          viewport={{ once: true, amount: 0.1 }}
        />
      </section>

      {/* Section 4: Our Teachers (no butterfly here) */}
      <section id="our-teachers" className="about-section">
        <h2>Our Teachers</h2>
        <div className="teachers-container">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="teacher-card">
              <img
                src={`/images/teacher${i + 1}.jpg`}
                alt={`Teacher ${i + 1}`}
                className="teacher-image"
              />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default About;
