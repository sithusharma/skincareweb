import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/facials">Facials</Link></li>
        <li><Link to="/waxing-threading">Waxing/Threading</Link></li>
        <li><Link to="/healing">Healing</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;