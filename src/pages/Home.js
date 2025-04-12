import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  const [showOverlayText, setShowOverlayText] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Define campus cards data
  const campusCards = [
    { img: "/images/random4.jpg", label: "Our School", hash: "#our-school" },
    { img: "/images/random5.jpg", label: "Our Classrooms", hash: "#our-classrooms" },
    { img: "/images/random6.jpg", label: "Our Principal", hash: "#our-principal" },
    { img: "/images/random7.jpg", label: "Our Teachers", hash: "#our-teachers" },
  ];

  // Initialize AOS and overlay text delay
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    const timer = setTimeout(() => {
      setShowOverlayText(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Detect window resize to update mobile flag
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide carousel for mobile view every 3 seconds
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % campusCards.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, campusCards.length]);

  // Carousel arrow navigation: shift by one card
  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + campusCards.length) % campusCards.length);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % campusCards.length);
  };

  // Determine visible cards:
  // • For mobile: show one card based on currentSlide.
  // • For desktop: show 4 cards (a sliding window of 4, wrapping around).
  let visibleCards = [];
  if (isMobile) {
    visibleCards.push(campusCards[currentSlide]);
  } else {
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % campusCards.length;
      visibleCards.push(campusCards[index]);
    }
  }

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section with Video */}
      <div className="hero-container">
        <video className="hero-video" autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        {showOverlayText && (
          <div className="hero-overlay animate__animated animate__fadeIn">
            <h1>Welcome to West Berry School</h1>
            <p>Shaping the Future, One Student at a Time</p>
          </div>
        )}
      </div>

      {/* Programs Cards Section */}
      <section className="cards-section" data-aos="fade-up">
        <h2>Our Programs</h2>
        <div className="cards-container">
          <motion.div className="card" whileHover={{ scale: 1.05 }} data-aos="fade-up">
            <img src="/images/random1.jpg" alt="Nursery Program" />
            <h3>Nursery</h3>
            <p>Interactive learning for young minds.</p>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }} data-aos="fade-up" data-aos-delay="200">
            <img src="/images/random2.jpg" alt="Primary Program" />
            <h3>Primary</h3>
            <p>Academic excellence with practical experiences.</p>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }} data-aos="fade-up" data-aos-delay="400">
            <img src="/images/random3.jpg" alt="Secondary Program" />
            <h3>Secondary</h3>
            <p>Develop critical thinking and problem solving.</p>
          </motion.div>
        </div>
      </section>

      {/* Explore Our Campus Carousel Section */}
      <section className="carousel-section" data-aos="fade-up">
        <h2>Explore Our Campus</h2>
        <div className="carousel-container">
          <button className="carousel-arrow left-arrow" onClick={handlePrev}>
            &#9664;
          </button>
          <div className="carousel-cards">
            {visibleCards.map((card, index) => (
              <a key={index} href={`/about${card.hash}`}>
                <motion.div className="hover-image" whileHover={{ scale: 1.1 }} data-aos="zoom-in">
                  <img src={card.img} alt={card.label} />
                  <div className="hover-info">{card.label}</div>
                </motion.div>
              </a>
            ))}
          </div>
          <button className="carousel-arrow right-arrow" onClick={handleNext}>
            &#9654;
          </button>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="latest-events-section" data-aos="fade-up">
        <h2>Latest Events</h2>
        <div className="events-container">
          <motion.div className="event-card" whileHover={{ scale: 1.05 }} data-aos="flip-left">
            <img src="/images/event1.jpg" alt="Event 1" />
            <div className="event-info">
              <h3>Annual Sports Day</h3>
              <p>Join us for a day of fun, games, and competitions!</p>
            </div>
          </motion.div>
          <motion.div className="event-card" whileHover={{ scale: 1.05 }} data-aos="flip-left" data-aos-delay="150">
            <img src="/images/event2.jpg" alt="Event 2" />
            <div className="event-info">
              <h3>Science Fair</h3>
              <p>Experience innovative projects by our talented students.</p>
            </div>
          </motion.div>
          <motion.div className="event-card" whileHover={{ scale: 1.05 }} data-aos="flip-left" data-aos-delay="300">
            <img src="/images/event3.jpg" alt="Event 3" />
            <div className="event-info">
              <h3>Cultural Fest</h3>
              <p>Immerse yourself in vibrant cultural performances.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Text + Image Sets Section with Single Sun Image on the Right */}
      <section className="text-image-sets" data-aos="fade-up">
        {/* Left Column: Three Sets */}
        <div className="ti-left">
          <motion.div className="ti-set" whileHover={{ x: 10 }}>
            <img src="/images/random8.jpg" alt="Holistic Education" />
            <div className="ti-text">
              <h3>Holistic Education</h3>
              <p>Integrating academics with extracurricular activities.</p>
            </div>
          </motion.div>
          <motion.div className="ti-set" whileHover={{ x: 10 }}>
            <img src="/images/random9.jpg" alt="STEM Initiatives" />
            <div className="ti-text">
              <h3>STEM Initiatives</h3>
              <p>Inspiring scientific exploration and innovation.</p>
            </div>
          </motion.div>
          <motion.div className="ti-set" whileHover={{ x: 10 }}>
            <img src="/images/random10.jpg" alt="Community Service" />
            <div className="ti-text">
              <h3>Community Service</h3>
              <p>Fostering empathy and social responsibility in students.</p>
            </div>
          </motion.div>
        </div>
        {/* Right Column: Single Sun Image */}
        <div className="ti-right">
          <img src="/images/sun.png" alt="Sun Icon" className="sun-icon" />
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
