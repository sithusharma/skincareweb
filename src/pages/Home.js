import React from 'react';
import '../styles/Home.css';
import { FaFacebookF, FaEnvelope, FaGoogle } from 'react-icons/fa'; // Minimal icons from react-icons

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-image"></div>
      <div className="hero-content">
        <h2 className="subheading">Skincare Beauty Spa</h2>
        <h1 className="main-heading">A Place for Relaxation & Self-Care</h1>
        <p className="description">
          Indulge in luxury treatments designed to rejuvenate your skin and calm your mind.
          From facials to healing therapies, we tailor every experience to your unique needs.
        </p>

        <div className="hero-menu">
          <a href="/facials" className="menu-link">Facials</a>
          <a href="/waxing-threading" className="menu-link">Waxing & Threading</a>
          <a href="/healing" className="menu-link">Healing</a>
          <a href="/membership" className="menu-link">Membership</a>
          <a href="/contact" className="menu-link">Contact</a>
        </div>

        {/* Social Icons at bottom-left */}
        <div className="social-icons">
          <a href="mailto:info@skincarebeautyspa.com" className="icon" aria-label="Email"><FaEnvelope /></a>
          <a href="https://www.facebook.com/SkincareBeautySpa" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.google.com/maps/place/Skincare+Beauty+Spa" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Google"><FaGoogle /></a>
        </div>

      </div>
    </div>
  );
};

export default Home;
