import React from "react";
import "./Footer.css";
import Button from "../Button/Button";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer id='main-footer' className='py-2'>
      <div className='container footer-container'>
        <div className='about-us'>
          <h2>About Us</h2>
          <p>
            TEK2D provides a wide range of unique web development services that
            will make your business flourish to the maximum. Just ask us and we
            will make you the best website with the team of professionals that
            are there only for you.
          </p>
          <SocialIcons />
        </div>
        <div className='footer-service'>
          <h3>Services</h3>
          <ul className='list'>
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
        <div className='footer-contact'>
          <h2>Contact</h2>
          <p>Faisalabad, Punjab, Pakistan</p>
          <p>Email: contact@tek2d.com</p>
        </div>
        <div className='footer-newsletter'>
          <h3>Newsletter</h3>
          <form>
            <input type='email' placeholder='Enter your email...' />
            <Button padding='0.5rem 1rem' text='Subscribe' />
          </form>
        </div>

        <div className='footer-copyright'>
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
