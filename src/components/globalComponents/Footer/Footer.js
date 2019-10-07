import React from "react";
import "./Footer.css";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer id='main-footer' class='py-2'>
      <div class='container footer-container'>
        <div class='about-us'>
          <h2>About Us</h2>
          <p>
            TEK2D provides a wide range of unique web development services that
            will make your business flourish to the maximum. Just ask us and we
            will make you the best website with the team of professionals that
            are there only for you.
          </p>
          <div className='footer-icon'>
            <a href=''>
              <i class='fab fa-facebook-f'></i>
            </a>
            <a href=''>
              <i class='fab fa-twitter'></i>
            </a>
            <a href=''>
              <i class='fab fa-linkedin-in'></i>
            </a>
            <a href=''>
              <i class='fab fa-instagram'></i>
            </a>
          </div>
        </div>
        <div class='footer-service'>
          <h3>Services</h3>
          <ul class='list'>
            <li>
              <a href='#web'>Web Design &amp; Development</a>
            </li>
            <li>
              <a href='#app'>Application Development</a>
            </li>
            <li>
              <a href='#animation'>Animation</a>
            </li>
            <li>
              <a href='#branding'>Branding</a>
            </li>
            <li>
              <a href='#ui/ux'>UI/UX Website Design</a>
            </li>
            <li>
              <a href='#marketing'>Internet Marketing</a>
            </li>
          </ul>
        </div>
        <div class='footer-contact'>
          <h2>Contact</h2>
          <p>Faisalabad, Punjab, Pakistan</p>
          <p>Email: contact@tek2d.com</p>
        </div>
        <div class='footer-newsletter'>
          <h3>Newsletter</h3>
          <form>
            <input type='email' placeholder='Enter your email...' />
            <Button padding='0.5rem 1rem' text='Subscribe' />
          </form>
        </div>

        <div class='footer-copyright'>
          <a href='#policy'>Privacy Policy</a>
          <p>
            Copyright &copy; 2019 Tek2D - Best Technical Web Services. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
