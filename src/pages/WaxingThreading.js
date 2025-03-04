import React from 'react';
import '../styles/WaxingThreading.css'
import Navbar from '../components/Navbar';

const WaxingThreading = () => {
  return (
    <div className="waxingthreading">
      <Navbar></Navbar>
      <section id="first" className="main special">
        <header className="major">
          <h2><strong>Waxing, Threading/Wax, Tinting</strong></h2>
        </header>
        <ul className="features">
          <li>
            <h2>Threading/Wax</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Eyebrows</td><td>Ante turpis integer aliquet porttitor.</td><td>$15</td></tr>
                <tr><td>Full Face</td><td>Vis ac commodo adipiscing arcu aliquet.</td><td>$35</td></tr>
                <tr><td>Side Burn</td><td>Morbi faucibus arcu accumsan lorem.</td><td>$10</td></tr>
                <tr><td>Chin</td><td>Vitae integer tempus condimentum.</td><td>$8</td></tr>
                <tr><td>Upper Lip</td><td>Ante turpis integer aliquet porttitor.</td><td>$8</td></tr>
              </tbody>
            </table>
          </li>
          <li>
            <h2>Tinting</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Eyebrow</td><td>Ante turpis integer aliquet porttitor.</td><td>$20</td></tr>
                <tr><td>Eyelash</td><td>Vis ac commodo adipiscing arcu aliquet.</td><td>$25</td></tr>
              </tbody>
            </table>
          </li>
          <li>
            <h3>Waxing</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Underarms</td><td>Ante turpis integer aliquet porttitor.</td><td>$18</td></tr>
                <tr><td>Full Arms</td><td>Vis ac commodo adipiscing arcu aliquet.</td><td>$35</td></tr>
                <tr><td>Full Legs</td><td>Morbi faucibus arcu accumsan lorem.</td><td>$55</td></tr>
                <tr><td>Half Legs</td><td>Vitae integer tempus condimentum.</td><td>$35</td></tr>
                <tr><td>Bikini Line</td><td>Ante turpis integer aliquet porttitor.</td><td>$35</td></tr>
                <tr><td>Brazilian</td><td>Ante turpis integer aliquet porttitor.</td><td>$55</td></tr>
                <tr><td>Full Back</td><td>Vis ac commodo adipiscing arcu aliquet.</td><td>$50</td></tr>
                <tr><td>Half Back</td><td>Morbi faucibus arcu accumsan lorem.</td><td>$55</td></tr>
              </tbody>
            </table>
          </li>
        </ul>
      </section>

      
    </div>
  );
};

export default WaxingThreading;