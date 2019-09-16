import React from 'react';
import "./Animation.css";

import personImg from '../../../../assets/showcase-img/person.png';
import boardImg from '../../../../assets/showcase-img/board.png';
import ringsImg from '../../../../assets/showcase-img/rings.png';
import calenderImg from '../../../../assets/showcase-img/calender.png';
// import coinImg from '../../../../assets/showcase-img/coin.png';
import bulbImg from '../../../../assets/showcase-img/bulb.png';
import Coin from './Coin/Coin';


class Animation extends React.Component{
  render() {
    return(
      <div class="alignment">
  
      <div class="board-container">
            <img class="board-img" src={boardImg} alt="first-unmovable-img" />
      </div>
  
      <div class="person-container">
          <img class="person-img" src={personImg} alt="zero-movable-img" />
      </div>
  
      <div class="calander-container">
            <img class="calander-img" src={calenderImg} alt="second-move-img"/>
      </div>
  
      <div class="rings-container">
          <img class="three-rings-img" src={ringsImg} alt="third-move-img"/>
      </div>
  
      <div class="bulb-container">
          <img class="img-bulb" src={bulbImg} alt="fourth-bulb-move-img"/>
      </div>
  
        
      <div class="coins-container">
            <div className="img-coin">
              <Coin />
            </div>
      </div>
      </div>
  
    );
  }
}



export default Animation;