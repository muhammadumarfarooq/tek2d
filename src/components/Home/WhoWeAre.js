import React from "react";

import Dots from "../globalComponents/Particles/Dots";

import aboutImg from "../../assets/about.png";
import Button from "../globalComponents/Button/Button";
import TitleSide from "../globalComponents/TitleSide/TitleSide";

const WhoWeAre = () => (
  <div className='whoWeAre' style={particlesStyle}>
    <Dots number={50} bgColor='#f4f6fd' />
    <div className='container'>
      <div className='WhoWeAre__content'>
        <TitleSide
          text='Who We Are'
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            lineHeight: "1.5",
            fontWeight: 800
          }}
        />
        <p>
          TEK2D provides a wide range of unique web development services that
          will make your business flourish to the maximum. Just ask us and we
          will make you the best website with the team of professionals that are
          there only for you.
        </p>
        <Button text='More About Tek2d' />
      </div>
      <div className='WhoWeAre__img'>
        <img src={aboutImg} alt='About us' />
      </div>
    </div>
  </div>
);

const particlesStyle = {
  height: "80vh",
  overflow: "hidden",
  position: "relative",
  display: "flex"
};

export default WhoWeAre;
