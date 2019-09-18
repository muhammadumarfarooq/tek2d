import React from 'react';
import "./Animation.css";

import { useSpring, animated } from 'react-spring';


import personImg from '../../../../assets/showcase-img/person.png';
import boardImg from '../../../../assets/showcase-img/board.png';
import ringsImg from '../../../../assets/showcase-img/rings.png';
import calenderImg from '../../../../assets/showcase-img/calender.png';
// import coinImg from '../../../../assets/showcase-img/coin.png';
import bulbImg from '../../../../assets/showcase-img/bulb.png';
import Coin from './Coin/Coin';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 60}px,${y / 40}px,0)`
const trans2 = (x, y) => `translate3d(${x / 40}px,${y / 20}px,0)`
const trans3 = (x, y) => `translate3d(${x / 70}px,${y / 60}px,0)`
const trans4 = (x, y) => `translate3d(${x / 100}px,${y / 100}px,0)`
const trans5 = (x, y) => `translate3d(${x / 10}px,${y / 20}px,0)`



const Animation = () => {

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 50 } }))

  return (

    <div class="alignment" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>

      <div class="board-container">
        <img class="board-img" src={boardImg} alt="first-unmovable-img" />
      </div>

      <animated.div class="person-container" style={{ transform: props.xy.interpolate(trans1) }} >
        <img class="person-img" src={personImg} alt="zero-movable-img" />
      </animated.div>

      <animated.div class="calander-container" style={{ transform: props.xy.interpolate(trans2) }} >
        <img class="calander-img" src={calenderImg} alt="second-move-img" />
      </animated.div>
    

      <animated.div class="rings-container" style={{ transform: props.xy.interpolate(trans3) }} >
        <img class="three-rings-img" src={ringsImg} alt="third-move-img" />
      </animated.div>

     


      <animated.div class="bulb-container" style={{ transform: props.xy.interpolate(trans3) }} >
        <img class="img-bulb" src={bulbImg} alt="fourth-bulb-move-img" />
      </animated.div>


      <animated.div class="coins-container" style={{ transform: props.xy.interpolate(trans3) }} >

        <div className="img-coin">
          <Coin />
        </div>
      </animated.div>

    </div>

  );
}



export default Animation;