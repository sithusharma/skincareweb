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
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="membership-page">
      <Navbar />

      <header className="membership-header">
        <h1 className="membership-title">Membership Program</h1>
        <p className="membership-subtitle">
          Exclusive perks designed for your glowing journey
        </p>
      </header>

      <main className="membership-list">
        <div className="membership-column">
          <h2 className="membership-section-heading">Our Plans & Benefits</h2>
          <ul className="membership-plans-list">
            {plans.map((plan, i) => (
              <li
                key={i}
                className="membership-plan-item"
                onClick={() => setSelectedPlan(plan)}
              >
                <span className="membership-plan-name">{plan.name}</span>
                <span className="membership-plan-price">{plan.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {selectedPlan && (
        <div
          className="membership-popup-overlay"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="membership-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="membership-close-btn"
              onClick={() => setSelectedPlan(null)}
            >
              ×
            </button>
            <h2 className="membership-popup-title">{selectedPlan.name}</h2>
            <p className="membership-popup-description">
              {selectedPlan.description}
            </p>
            <p className="membership-popup-price">{selectedPlan.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}