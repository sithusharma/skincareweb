import React from 'react';
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact!</h1>
      <section id="cta" className="main special">
        <header className="major">
          <div className="calendly-inline-widget" data-url="https://calendly.com/sayhitopunya/facials" style={{ minWidth: "320px", height: "700px" }}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </header>
      </section>
    </div>
  );
};

export default Contact;