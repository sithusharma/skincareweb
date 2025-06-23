// src/components/Contact.jsx
import React, { useState } from 'react';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendRequest = (e) => {
    e.preventDefault();
    const phoneNumber = '+19803286913';  // Your spa number
    const msg = `
Appointment Request:
- Name: ${form.name}
- Date: ${form.date}
- Time: ${form.time}
- Service: ${form.service}
- Message: ${form.message}`;
    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="facial contact-page">
      <Navbar />

      <header className="facial-header">
        <h1 className="facials-title">Contact Us</h1>
        <p className="facials-subtitle">Book your appointment or ask a question</p>
      </header>

      <div className="contact-card">
        <div className="contact-info">
          <p>📞 <a href="tel:+19803286913">+1 (980) 328-6913</a></p>
          <p>📧 <a href="mailto:info@skincarebeautyspa.com">info@skincarebeautyspa.com</a></p>
        </div>

        <form className="contact-form" onSubmit={sendRequest}>
          <input
            type="text" name="name" placeholder="Your Name"
            value={form.name} onChange={handleChange} required
          />
          <input
            type="date" name="date"
            value={form.date} onChange={handleChange} required
          />
          <input
            type="time" name="time"
            value={form.time} onChange={handleChange} required
          />
          <select
            name="service" value={form.service}
            onChange={handleChange} required
          >
            <option value="">Choose a service</option>
            <option>Facial</option>
            <option>Waxing &amp; Threading</option>
            <option>Healing</option>
            <option>Membership Inquiry</option>
          </select>
          <textarea
            name="message" rows="4" placeholder="Additional requests (optional)"
            value={form.message} onChange={handleChange}
          />
          <button type="submit">Send Request</button>
        </form>
      </div>
    </div>
  );
}
