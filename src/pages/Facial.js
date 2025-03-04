import React from 'react';
import '../styles/Facial.css';
import Navbar from '../components/Navbar';

const Facial = () => {
  return (
    <div className="facial">
      <Navbar></Navbar>
      {/* Page Header with Branding */}
      <div className="facial-header">
        <div className="header-line"></div>
      </div>

      <h1 className="facials-title">Facials</h1>

      <section id="intro" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2 className="center"><strong>Advanced Facial Therapy</strong></h2>
            </header>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Hydrafacial</td><td>Ante turpis integer aliquet porttitor.</td><td>$250</td></tr>
                <tr><td>Microcurrent Treatment</td><td>Vis ac commodo adipiscing arcu aliquet.</td><td>$130</td></tr>
                <tr><td>Microdermabrasion</td><td>Morbi faucibus arcu accumsan lorem.</td><td>$125</td></tr>
                <tr><td>Hydration/Signature Glow</td><td>Vitae integer tempus condimentum.</td><td>$110</td></tr>
                <tr><td>Anti Aging/Acne Purify</td><td>Ante turpis integer aliquet porttitor.</td><td>$110</td></tr>
                <tr><td>Vitamin C Boost</td><td>Vitae integer tempus condimentum.</td><td>$110</td></tr>
                <tr><td>Dermaplaning</td><td>Vitae integer tempus condimentum.</td><td>$100</td></tr>
              </tbody>
            </table>

            <header className="major">
              <div className="table-container">
                <h1>30 Minutes Facial Therapy</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Refreshing Glow</td><td>Ante turpis integer aliquet porttitor.</td><td>$70</td></tr>
                    <tr><td>Sinus Relief</td><td>Vis ac commodo adipiscing arcu aliquet.</td><td>$70</td></tr>
                  </tbody>
                </table>
              </div>
            </header>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facial;
