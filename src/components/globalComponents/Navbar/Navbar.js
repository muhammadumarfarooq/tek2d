import React from "react";
import "./Navbar.css";

import logo from "../../../assets/logo.png";

class Navbar extends React.Component {
  state = {
    showMobileNav: false,
    links: [
      { linkTitle: "About Us" },
      { linkTitle: "Services +" },
      { linkTitle: "Our Team" },
      { linkTitle: "Portfolio" },
      { linkTitle: "Contact Us" }
    ]
  };

  bigNavbarLinks = this.state.links.map(link => (
    <li id='chek'>
      <a id='current' href='index.html'>
        {link.linkTitle}
      </a>
    </li>
  ));
  callMe = () => {
    this.setState({ showMobileNav: !this.state.showMobileNav });
  };

  render() {
    return (
      <nav id='main-nav'>
        <div class='container'>
          <img src={logo} alt='TEK2D' class='logo' />
          <ul className='bigMenu'>{this.bigNavbarLinks}</ul>

          <div class='div12'>
            <input
              class='menu-btn'
              onChange={this.callMe}
              type='checkbox'
              id='menu-btn'
            />
            <label class='menu-icon' for='menu-btn'>
              <span class='navicon'></span>
            </label>
          </div>
        </div>
        <ul
          class='menu'
          style={
            this.state.showMobileNav
              ? { maxHeight: "260px" }
              : { maxHeight: "0" }
          }
        >
          <li>
            <a href='#work'>Our Work</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#careers'>Careers</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
