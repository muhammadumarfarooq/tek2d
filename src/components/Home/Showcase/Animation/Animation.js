import React from "react";
import "./Animation.css";

import { useSpring, animated } from "react-spring";

import personImg from "../../../../assets/showcase-img/person.png";
import boardImg from "../../../../assets/showcase-img/board.png";
import ringsImg from "../../../../assets/showcase-img/rings.png";
import calenderImg from "../../../../assets/showcase-img/calender.png";
import bulbImg from "../../../../assets/showcase-img/bulb.png";

// import showcaseHexagon from "../../../../assets/showcase-hexagon.png";

import coinImg from "../../../../assets/showcase-img/coin.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 25}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 50}px,${y / 40}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 90}px,${y / 90}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 150}px,${y / 150}px,0)`;

const Animation = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 550, friction: 30 }
  }));

  return (
    <div
      className='alignment'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      {/* <img
        className='background-hexagon-image'
        src={showcaseHexagon}
        alt='hexagon'
      /> */}
      <div className='images-container'>
        <img
          className='board-img parallax-img'
          src={boardImg}
          alt='first-unmovable-img'
        />
      </div>

      <animated.div
        className='images-container'
        style={{ transform: props.xy.interpolate(trans3) }}
      >
        <div className='img-coin'>
          <img className='coin coin1' src={coinImg} alt='img' />
          <img className='coin coin2' src={coinImg} alt='img' />
          <img className='coin coin3' src={coinImg} alt='img' />
          <img className='coin coin4' src={coinImg} alt='img' />
          <img className='coin coin5' src={coinImg} alt='img' />
        </div>
      </animated.div>

      <animated.div
        className='images-container'
        style={{ transform: props.xy.interpolate(trans2) }}
      >
        <img
          className='person-img parallax-img'
          src={personImg}
          alt='zero-movable-img'
        />
      </animated.div>

      <animated.div
        className='images-container'
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        <img
          className='calander-img parallax-img'
          src={calenderImg}
          alt='second-move-img'
        />
      </animated.div>

      <animated.div
        className='images-container'
        style={{ transform: props.xy.interpolate(trans4) }}
      >
        <img
          className='three-rings-img parallax-img'
          src={ringsImg}
          alt='third-move-img'
        />
      </animated.div>

      <animated.div
        className='images-container'
        style={{ transform: props.xy.interpolate(trans3) }}
      >
        <img className='img-bulb' src={bulbImg} alt='fourth-bulb-move-img' />
      </animated.div>
    </div>
  );
};

export default Animation;
