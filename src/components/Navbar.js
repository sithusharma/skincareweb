import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-title">
          <span className="nav-header-top">SkinCare </span>
          <span className="nav-header-bottom">Beauty Spa</span>
        </Link>

        {/* Dropdown toggle button - elegant spa-like icon */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/facials" onClick={() => setMenuOpen(false)}>Facials</Link></li>
          <li><Link to="/waxing-threading" onClick={() => setMenuOpen(false)}>Waxing/Threading</Link></li>
          <li><Link to="/healing" onClick={() => setMenuOpen(false)}>Healing</Link></li>
          <li><Link to="/membership" onClick={() => setMenuOpen(false)}>Membership</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
