import React from "react";
import "./Animation.css";

import { useSpring, animated } from "react-spring";

import personImg from "../../../../assets/showcase-img/person.png";
import boardImg from "../../../../assets/showcase-img/board.png";
import ringsImg from "../../../../assets/showcase-img/rings.png";
import calenderImg from "../../../../assets/showcase-img/calender.png";
import bulbImg from "../../../../assets/showcase-img/bulb.png";
import Coin from "./Coin/Coin";

import showcaseHexagon from "../../../../assets/showcase-hexagon.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans2 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 90}px,${y / 90}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 150}px,${y / 150}px,0)`;

const Animation = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 50 }
  }));

  return (
    <div
      className='alignment'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <img
        className='background-hexagon-image'
        src={showcaseHexagon}
        alt='hexagon'
      />

      <img
        className='board-img parallax-img'
        src={boardImg}
        alt='first-unmovable-img'
      />

      <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
        <div className='img-coin'>
          <Coin />
        </div>
      </animated.div>

      <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
        <img
          className='person-img parallax-img'
          src={personImg}
          alt='zero-movable-img'
        />
      </animated.div>

      <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
        <img
          className='calander-img parallax-img'
          src={calenderImg}
          alt='second-move-img'
        />
      </animated.div>

      <animated.div style={{ transform: props.xy.interpolate(trans4) }}>
        <img
          className='three-rings-img parallax-img'
          src={ringsImg}
          alt='third-move-img'
        />
      </animated.div>

      <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
        <img className='img-bulb' src={bulbImg} alt='fourth-bulb-move-img' />
      </animated.div>
    </div>
  );
};

export default Animation;
