import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../../../assets/logo.png";

class Navbar extends React.Component {
  state = {
    shadow: false,
    showMobileNav: false,
    links: [
      { linkTitle: "Home", address: "/" },
      { linkTitle: "About Us", address: "/about" },
      { linkTitle: "Services +", address: "/services" },
      { linkTitle: "Our Team", address: "/team" },
      { linkTitle: "Portfolio", address: "/portfolio" },
      { linkTitle: "Contact Us", address: "/contact" }
    ]
  };

  NavLinks = this.state.links.map(link => (
    <li key={link.linkTitle} id='chek'>
      <NavLink
        id='current'
        exact
        activeClassName='selected'
        to={`${link.address}`}
      >
        {link.linkTitle}
      </NavLink>
    </li>
  ));

  listenScrollEvent = () =>
    window.scrollY > 70
      ? this.setState({ shadow: true })
      : this.setState({ shadow: false });

  callMe = () => this.setState({ showMobileNav: !this.state.showMobileNav });

  render() {
    window.addEventListener("scroll", this.listenScrollEvent);
    return (
      <nav
        id='main-nav'
        className='main-nav'
        style={
          this.state.shadow
            ? { boxShadow: "8px 8px 12px rgba(0,0,0,0.1)" }
            : undefined
        }
      >
        <div className='container'>
          <NavLink to='/'>
            <img src={logo} alt='TEK2D' className='logo' />
          </NavLink>
          <ul className='bigMenu'>{this.NavLinks}</ul>

          <div className='div12'>
            <input
              className='menu-btn'
              onChange={this.callMe}
              type='checkbox'
              id='menu-btn'
            />
            <label className='menu-icon' htmlFor='menu-btn'>
              <span className='navicon'></span>
            </label>
          </div>
        </div>
        <ul
          className='menu'
          style={
            this.state.showMobileNav
              ? { maxHeight: "260px" }
              : { maxHeight: "0" }
          }
        >
          {this.NavLinks}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
