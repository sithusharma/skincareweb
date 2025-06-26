// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="nav-container">
        {/* Left‐hand links */}
        <ul className="nav-links nav-links--left">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/facials">Facials</Link></li>
          <li><Link to="/waxing-threading">Waxing & Threading</Link></li>
        </ul>

        {/* Centered logo/title */}
        <Link to="/" className="nav-title">
          <span className="nav-header-top">SkinCare</span>
          <span className="nav-header-bottom">Beauty Spa</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >☰</button>

        {/* Right‐hand links */}
        <ul className={`nav-links nav-links--right ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(false)}>
          <li><Link to="/healing">Healing</Link></li>
          <li><Link to="/membership">Membership</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}