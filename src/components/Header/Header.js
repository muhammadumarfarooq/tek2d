import React from 'react';

import "./Header.css";

import Social from './Social/Social';
import Navbar from '../globalComponents/Navbar/Navbar';
import Showcase from './Showcase/Showcase';

const Header = () => {
  return(
    <div>
      <Social />
      <Navbar />
      <Showcase />
    </div>
  );
}



export default Header;