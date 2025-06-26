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
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="healing-page">
      <Navbar />

      <header className="healing-header">
        <h1 className="healing-title">Healing</h1>
        <p className="healing-subtitle">Holistic Therapies for Mind &amp; Body</p>
      </header>

      <main className="healing-services">
        <div className="healing-column">
          <h2 className="healing-section-heading">Our Healing Services</h2>
          <ul className="healing-services-list">
            {services.map((service, index) => (
              <li
                key={index}
                className="healing-service-item"
                onClick={() => setSelectedService(service)}
              >
                <span className="healing-service-name">{service.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {selectedService && (
        <div className="healing-popup-overlay" onClick={() => setSelectedService(null)}>
          <div className="healing-popup" onClick={e => e.stopPropagation()}>
            <button className="healing-close-btn" onClick={() => setSelectedService(null)}>×</button>
            <h2 className="healing-popup-title">{selectedService.name}</h2>
            <p className="healing-popup-description">{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
