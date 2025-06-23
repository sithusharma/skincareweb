// src/components/About.jsx
import React, { useState } from 'react';
import '../styles/About.css';
import Navbar from '../components/Navbar';
import avatarImg from '../images/about_pic_shivalika.png';  // ← make sure this path & filename match!

export default function About() {
  const reviews = [
    { author: 'Jane Doe', text: '"Incredible attention to detail—my skin has never looked better!"' },
    { author: 'John Smith', text: '"The best facial I’ve ever had. Truly a relaxing experience."' },
  ];
  const [popup, setPopup] = useState(null);

  return (
    <div className="about esthetician">
      <Navbar />

      <div className="about-header">
        <img src={avatarImg} alt="Esthetician Avatar" className="avatar" />
        <h1 className="about-name">Shivalika Sharma</h1>
        <p className="about-tagline">Licensed Esthetician & Skin Care Specialist</p>
      </div>

      <section className="about-intro">
        <p>
          Hello! I’m Shivalika—a licensed esthetician passionate about bringing out your skin’s natural glow.
          With over 15 years of experience, I specialize in bespoke facial treatments, dermaplaning,
          and advanced skin rejuvenation techniques tailored just for you.
        </p>
      </section>

      <section className="about-reviews">
        <h2 className="section-heading">Client Reviews</h2>
        <div className="review-list">
          {reviews.map((r, i) => (
            <div key={i} className="review-card" onClick={() => setPopup(r)}>
              <p className="review-text">{r.text}</p>
              <p className="review-author">— {r.author}</p>
            </div>
          ))}
        </div>
      </section>

      {popup && (
        <div className="popup-overlay" onClick={() => setPopup(null)}>
          <div className="popup" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setPopup(null)}>×</button>
            <h2>Review by {popup.author}</h2>
            <p>{popup.text}</p>
          </div>
        </div>
      )}
    </div>
);
}
