import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  themeToggle?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ themeToggle }) => (
  <section className="hero">
    {themeToggle && <div className="hero-theme-toggle">{themeToggle}</div>}
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Innovative Design Meets Smart Tech
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        We create digital experiences that inspire.
      </motion.p>
      <motion.a
        href="#services"
        className="cta-btn"
        whileHover={{ scale: 1.1 }}
      >
        Explore Our Work
      </motion.a>
    </div>
  </section>
);

export default Hero;
