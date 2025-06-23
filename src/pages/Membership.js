// src/components/Membership.jsx
import React, { useState } from 'react';
import '../styles/Membership.css';
import Navbar from '../components/Navbar';

const plans = [
  {
    name: '60-Minute Membership',
    price: '$90/mo',
    description:
      'Includes one 60-minute facial per month, 10% off any waxing, and two guest facial certificates at member rate.',
  },
  {
    name: '30-Minute Membership',
    price: '$55/mo',
    description:
      'Includes one 30-minute facial per month, 10% off any waxing, and two guest facial certificates at member rate.',
  },
];

export default function Membership() {
  const [popup, setPopup] = useState(null);

  return (
    <div className="facial membership">
      <Navbar />

      <header className="facial-header">
        <h1 className="facials-title">Membership Program</h1>
        <p className="facials-subtitle">
          Exclusive perks designed for your glowing journey
        </p>
      </header>

      <main className="facial-list">
        <div className="column">
          <h2 className="section-heading">Our Plans & Benefits</h2>
          <ul className="glam-list">
            {plans.map((plan, i) => (
              <li
                key={i}
                className="glam-item"
                onClick={() => setPopup(plan)}
              >
                <span className="glam-name">{plan.name}</span>
                <span className="glam-price">{plan.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {popup && (
        <div
          className="popup-overlay"
          onClick={() => setPopup(null)}
        >
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setPopup(null)}
            >
              ×
            </button>
            <h2>{popup.name}</h2>
            <p>{popup.description}</p>
            <p className="price">{popup.price}</p>
          </div>
        </div>
      )}
    </div>
);
}
