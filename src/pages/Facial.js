// src/components/Facial.jsx
import React, { useState } from 'react';
import '../styles/Facial.css';
import Navbar from '../components/Navbar';

const advancedFacials = [
  { name: 'Hydrafacial', price: '$250', description: 'Deeply cleanses, exfoliates, and hydrates your skin using patented technology.' },
  { name: 'Microcurrent Treatment', price: '$130', description: 'Non-invasive facial lifting and toning using low-level electrical currents.' },
  { name: 'Microdermabrasion', price: '$125', description: 'Gentle exfoliation to remove dead skin and improve texture and tone.' },
  { name: 'Hydration/Signature Glow', price: '$110', description: 'Boosts moisture for dry skin with signature glowing results.' },
  { name: 'Anti Aging/Acne Purify', price: '$110', description: 'Targets signs of aging and acne through purifying techniques.' },
  { name: 'Vitamin C Boost', price: '$110', description: 'Brightens complexion and protects against environmental stressors.' },
  { name: 'Dermaplaning', price: '$100', description: 'Exfoliates dead skin and peach fuzz for smoother texture.' },
];

const miniFacials = [
  { name: 'Refreshing Glow', price: '$70', description: 'Quick glow-up with hydration and exfoliation.' },
  { name: 'Sinus Relief', price: '$70', description: 'Relieves pressure and tension using massage and essential oils.' },
];

export default function Facial() {
  const [popup, setPopup] = useState(null);

  return (
    <div className="facial">
      <Navbar />

      <header className="facial-header">
        <h1 className="facials-title">Facials</h1>
        <p className="facials-subtitle">Luxury treatments for your skin and soul</p>
      </header>

      <main className="facial-list">
        <div className="column">
          <h2 className="section-heading">Advanced Facial Therapy</h2>
          <ul className="glam-list">
            {advancedFacials.map((f, i) => (
              <li key={i} className="glam-item" onClick={() => setPopup(f)}>
                <span className="glam-name">{f.name}</span>
                <span className="glam-price">{f.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="column">
          <h2 className="section-heading">30-Minute Facial Therapy</h2>
          <ul className="glam-list">
            {miniFacials.map((f, i) => (
              <li key={i} className="glam-item" onClick={() => setPopup(f)}>
                <span className="glam-name">{f.name}</span>
                <span className="glam-price">{f.price}</span>
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
            <p className="price">{popup.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}
