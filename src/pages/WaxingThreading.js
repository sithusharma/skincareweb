import React from 'react';
import '../styles/WaxingThreading.css';
import Navbar from '../components/Navbar';

const WaxingThreading = () => {
  const services = [
    {
      title: "Threading/Wax",
      items: [
        { name: "Eyebrows", description: "Precision eyebrow shaping.", price: "$15" },
        { name: "Full Face", description: "Complete facial hair removal.", price: "$35" },
        { name: "Side Burn", description: "Defined and clean look.", price: "$10" },
        { name: "Chin", description: "Smooth and hair-free chin.", price: "$8" },
        { name: "Upper Lip", description: "Gentle and effective hair removal.", price: "$8" }
      ]
    },
    {
      title: "Tinting",
      items: [
        { name: "Eyebrow", description: "Enhances eyebrow definition.", price: "$20" },
        { name: "Eyelash", description: "Gives lashes a fuller look.", price: "$25" }
      ]
    },
    {
      title: "Waxing",
      items: [
        { name: "Underarms", description: "Smooth and clean underarms.", price: "$18" },
        { name: "Full Arms", description: "Complete arm waxing.", price: "$35" },
        { name: "Full Legs", description: "Complete leg waxing.", price: "$55" },
        { name: "Half Legs", description: "Upper or lower leg waxing.", price: "$35" },
        { name: "Bikini Line", description: "Gentle bikini area waxing.", price: "$35" },
        { name: "Brazilian", description: "Full intimate area waxing.", price: "$55" },
        { name: "Full Back", description: "Complete back waxing.", price: "$50" },
        { name: "Half Back", description: "Upper or lower back waxing.", price: "$55" }
      ]
    }
  ];

  return (
    <div className="waxingthreading">
      <Navbar />
      <section className="container">
        <header className="major">
          <h2 className="title">Waxing, Threading & Tinting</h2>
        </header>
        <div className="grid-container">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i} className="service-item">
                    <span className="service-name">{item.name}</span>
                    <span className="service-description">{item.description}</span>
                    <span className="service-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WaxingThreading;
