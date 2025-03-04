import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Facials from './pages/Facial';
import WaxingThreading from './pages/WaxingThreading';
import Healing from './pages/Healing';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facials" element={<Facials />} />
      <Route path="/waxing-threading" element={<WaxingThreading />} />
      <Route path="/healing" element={<Healing />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
