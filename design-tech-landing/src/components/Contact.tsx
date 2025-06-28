import React, { useState, useRef } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Thanks for reaching out!');
    if (formRef.current) {
      formRef.current.reset();
    }
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Let’s Build Something Great</h2>
        <form ref={formRef} onSubmit={handleSubmit} data-aos="zoom-in">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          {message && <p className="confirmation">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
