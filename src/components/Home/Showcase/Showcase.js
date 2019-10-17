import React from "react";
import Fade from "react-reveal/Fade";
// import { Transition } from "react-spring/renderprops";

import { useSpring, animated } from "react-spring";

import "./Showcase.css";

import blueVector from "../../../assets/blue-vector.png";

import Button from "../../globalComponents/Button/Button";
import Animation from "./Animation/Animation";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 90}px,${y / 90}px,0)`;

const Showcase = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 550, friction: 30 }
  }));
  return (
    <div
      className='showcase'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className='images-container'
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        <img className='blue-vector' src={blueVector} alt='hexagon' />
      </animated.div>
      <div className='container'>
        <div className='showcase__content'>
          <Fade bottom>
            <h1>We make your business look cool</h1>
          </Fade>
          <p className='showcase__detail'>
            Are You Looking For Finest Dedicated Web Designer, Graphic Designer,
            Animator &amp; Internet Marketing Team?
          </p>
          <p className='showcase__detail2'>
            if Yes! You Are At Right Place 🙂
            <span role='img' description='aria-label'></span>
          </p>
          <Button text='ABOUT US' path='/services' />
        </div>
        <Animation />
      </div>
    </div>
  );
};

export default Showcase;
