import React, { useState } from 'react';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendRequest = () => {
    const phoneNumber = '+9803286913';  // Replace with actual spa phone number
    const message = `
Appointment Request:
- Name: ${form.name}
- Date: ${form.date}
- Time: ${form.time}
- Service: ${form.service}
- Message: ${form.message}`;

    const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  return (
    <div className="contact">
      <Navbar />

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>📞 Phone: <a href="tel:+9803286913">+1 (980) 328-6913</a></p>
        <p>📧 Email: <a href="mailto:info@skincarebeautyspa.com">info@skincarebeautyspa.com</a></p>

        <h2>Request Appointment</h2>

        <form onSubmit={(e) => {e.preventDefault(); sendRequest();}}>
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />

          <label>Service:</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Facial">Facial</option>
            <option value="Waxing & Threading">Waxing & Threading</option>
            <option value="Healing">Healing</option>
            <option value="Membership Inquiry">Membership Inquiry</option>
          </select>

          <label>Message (Optional):</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Any special requests or questions?"
            rows="4"
          />

          <button type="submit">Send Request</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
