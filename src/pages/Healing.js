// src/components/Healing.jsx
import React, { useState } from 'react';
import '../styles/Healing.css';
import Navbar from '../components/Navbar';

const services = [
  { name: 'Aromatherapy', description: 'Holistic scent therapy using essential oils.' },
  { name: 'Reiki Healing', description: 'Energy balancing through gentle touch.' },
  { name: 'Sound Bath', description: 'Deep relaxation using healing sounds.' },
  { name: 'Herbal Steam', description: 'Detoxifying steam infused with soothing herbs.' },
  { name: 'Crystal Therapy', description: 'Chakra alignment with healing crystals.' },
  { name: 'Guided Meditation', description: 'Mindfulness session for stress relief.' },
];

export default function Healing() {
  const [popup, setPopup] = useState(null);

  return (
    <div className="facial healing-page">
      <Navbar />

      <header className="facial-header">
        <h1 className="facials-title">Healing</h1>
        <p className="facials-subtitle">Holistic Therapies for Mind &amp; Body</p>
      </header>

      <main className="facial-list">
        <div className="column">
          <h2 className="section-heading">Our Healing Services</h2>
          <ul className="glam-list">
            {services.map((s,i) => (
              <li
                key={i}
                className="glam-item"
                onClick={() => setPopup(s)}
              >
                <span className="glam-name">{s.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {popup && (
        <div className="popup-overlay" onClick={() => setPopup(null)}>
          <div className="popup" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setPopup(null)}>×</button>
            <h2>{popup.name}</h2>
            <p>{popup.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
