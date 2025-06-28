import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    { title: "UI/UX Design", desc: "Modern interfaces with smooth UX." },
    { title: "Web Development", desc: "Responsive, scalable web apps." },
    { title: "Branding", desc: "Memorable brand experiences." },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="cards">
          {services.map((s, i) => (
            <div className="card" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
