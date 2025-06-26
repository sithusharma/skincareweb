import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';
import { init, send } from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    init('IhEBVl4XFOjgDC70k');
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendRequest = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      user_name:        form.name,
      appointment_date: form.date,
      appointment_time: form.time,
      service_type:     form.service,
      message_body:     form.message
    };

    send('service_4dor7hl', 'template_vpdh5oq', templateParams)
      .then(response => {
        console.log('EMAILJS SUCCESS:', response.status, response.text);
        setStatus('sent');
        setForm({ name: '', date: '', time: '', service: '', message: '' });
      })
      .catch(err => {
        console.error('EMAILJS ERROR:', err);
        setStatus('error');
      });
  };

  return (
    <div className="contact-page">
      <Navbar />

      <header className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Book your appointment or ask a question</p>
      </header>

      <div className="contact-card">
        <div className="contact-info">
          <p>📞 <a href="tel:+19803286913">+1 (704) 654-7681</a></p>
          <p>📧 <a href="mailto:info@skincarebeautyspa.com">info@skincarebeautyspa.com</a></p>
        </div>

        <form className="contact-form" onSubmit={sendRequest}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Choose a service</option>
            <option>Facial</option>
            <option>Waxing &amp; Threading</option>
            <option>Healing</option>
            <option>Membership Inquiry</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Additional requests (optional)"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Request'}
          </button>

          {status === 'sent' && (
            <p className="success-msg">
              Your request has been sent! We’ll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="error-msg">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
