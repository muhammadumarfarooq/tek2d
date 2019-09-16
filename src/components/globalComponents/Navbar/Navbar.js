import React from 'react';
import "./Navbar.css";

import logo from '../../../assets/logo.png';

const Navbar = () => {
  return (
    <nav id="main-nav">
      <div class="container">
        <img src={logo} alt="TEK2D-LOGO" class="logo" />
        <ul>
          <li id="chek"><a id="current" href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="about.html">Services +</a></li>
          <li><a href="about.html">Our Team</a></li>
          <li><a href="about.html">Portfolio</a></li>
        </ul>
      </div>
    </nav>
  );
}



export default Navbar;