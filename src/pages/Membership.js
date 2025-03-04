import React from 'react';
import '../styles/Membership.css'
import Navbar from '../components/Navbar';

const Membership = () => {
  return (
    <div className="membership">
      <Navbar></Navbar>
     <section id="third" className="main special">
        <header className="major">
          <h2>Special Membership Program</h2>
          <p>We offer two types of memberships, a 60 MINs Membership that is priced at $90 a month 
            and a 30 MINs membership that is priced at $55 a month. Memberships include one discounted facial per month,
            10% off waxing per month, and two guest facial certificates at member price. 
          </p>
        </header>
        <ul className="statistics">
          <li className="style1"><strong>5,120</strong> Etiam</li>
          <li className="style2"><strong>8,192</strong> Magna</li>
          <li className="style3"><strong>2,048</strong> Tempus</li>
          <li className="style4"><strong>4,096</strong> Aliquam</li>
          <li className="style5"><strong>1,024</strong> Nullam</li>
        </ul>
        <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed.</p>
      </section>
    </div>
  );
};

export default Membership;