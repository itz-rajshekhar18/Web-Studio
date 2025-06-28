import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => (
  <section className="portfolio">
    <div className="container">
      <h2>Portfolio Highlights</h2>
      <div className="projects">
        <div className="project-card" data-aos="fade-right">Project One</div>
        <div className="project-card" data-aos="fade-up">Project Two</div>
        <div className="project-card" data-aos="fade-left">Project Three</div>
      </div>
    </div>
  </section>
);

export default Portfolio;
