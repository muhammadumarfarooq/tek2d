import React from "react";
import "./WhoWeAre.css";

import Dots from "./Particles/Dots";

import aboutImg from "../../assets/about.png";
import Button from "../globalComponents/Button/Button";

const WhoWeAre = () => {
  return (
    <div className='whoWeAre' style={particlesStyle}>
      <Dots />
      <div className='container whoWeAre__Wraper'>
        <div className='WhoWeAre__content'>
          <h2>Who We Are</h2>
          <p>
            TEK2D provides a wide range of unique web development services that
            will make your business flourish to the maximum. Just ask us and we
            will make you the best website with the team of professionals that
            are there only for you.
          </p>
          <Button text='More About Tek2d' />
        </div>
        <div className='WhoWeAre__img'>
          <img src={aboutImg} alt='About us' />
        </div>
      </div>
    </div>
  );
};

const particlesStyle = {
  height: "80vh",
  overflow: "hidden",
  position: "relative"
};

export default WhoWeAre;
