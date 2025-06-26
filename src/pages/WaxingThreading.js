// src/components/WaxingThreading.jsx
import React, { useState } from 'react';
import '../styles/WaxingThreading.css';
import Navbar from '../components/Navbar';

const waxingThreadingServices = [
  {
    title: 'Waxing',
    items: [
      { name: 'Underarms', price: '$18', description: 'Smooth and clean underarms.' },
      { name: 'Full Arms', price: '$35', description: 'Complete arm waxing.' },
      { name: 'Full Legs', price: '$55', description: 'Complete leg waxing.' },
      { name: 'Half Legs', price: '$35', description: 'Upper or lower leg waxing.' },
      { name: 'Bikini Line', price: '$35', description: 'Gentle bikini area waxing.' },
      { name: 'Brazilian', price: '$55', description: 'Full intimate area waxing.' },
      { name: 'Full Back', price: '$50', description: 'Complete back waxing.' },
      { name: 'Half Back', price: '$55', description: 'Upper or lower back waxing.' },
    ],
  },
  {
    title: 'Threading & Wax',
    items: [
      { name: 'Eyebrows', price: '$15', description: 'Precision eyebrow shaping.' },
      { name: 'Full Face', price: '$35', description: 'Complete facial hair removal.' },
      { name: 'Side Burn', price: '$10', description: 'Defined and clean look.' },
      { name: 'Chin', price: '$8', description: 'Smooth and hair-free chin.' },
      { name: 'Upper Lip', price: '$8', description: 'Gentle and effective hair removal.' },
    ],
  },
  {
    title: 'Tinting',
    items: [
      { name: 'Eyebrow', price: '$20', description: 'Enhances eyebrow definition.' },
      { name: 'Eyelash', price: '$25', description: 'Gives lashes a fuller look.' },
    ],
  },
];

export default function WaxingThreading() {
  const [popup, setPopup] = useState(null);

  return (
    <div className="waxing-threading">
      <Navbar />

      <header className="waxing-threading-header">
        <h1 className="waxing-threading-title">Waxing &amp; Threading</h1>
        <p className="waxing-threading-subtitle">Fast, gentle, and precise hair removal</p>
      </header>

      <main className="waxing-threading-list">
        {waxingThreadingServices.map((section, i) => (
          <div key={i} className="waxing-threading-column">
            <h2 className="waxing-threading-section-heading">{section.title}</h2>
            <ul className="waxing-threading-service-list">
              {section.items.map((svc, j) => (
                <li
                  key={j}
                  className="waxing-threading-service-item"
                  onClick={() => setPopup(svc)}
                >
                  <span className="waxing-threading-service-name">{svc.name}</span>
                  <span className="waxing-threading-service-price">{svc.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      {popup && (
        <div className="waxing-threading-popup-overlay" onClick={() => setPopup(null)}>
          <div className="waxing-threading-popup" onClick={e => e.stopPropagation()}>
            <button className="waxing-threading-close-btn" onClick={() => setPopup(null)}>
              ×
            </button>
            <h2>{popup.name}</h2>
            <p>{popup.description}</p>
            <p className="waxing-threading-popup-price">{popup.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}
