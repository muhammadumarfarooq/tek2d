import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

import CountUp from "react-countup";

import { keyframes } from "styled-components";

import styled from "styled-components";

const Skill = ({ skillPercent, skillInfo, progressColor }) => {
  const [animation, setAnimation] = useState("");
  const [showCount, setShowCount] = useState("");
  let rotate = keyframes`
  from{
    width: 0%;
  }
  to{
    width: ${skillPercent}%;
  }
`;

  const Rotate = styled.div`
    background: ${progressColor};
    width: 0%;
    height: 0.5rem;
    animation: ${animation} 2s forwards ease-in-out;
    border-radius: 5px;
  `;

  const onChange = isVisible => {
    if (isVisible && animation === "") {
      setAnimation(rotate);
      setShowCount(isVisible);
    }
    // console.log(isVisible);
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <div className='skill'>
        <div className='skill__info'>
          <p>{skillInfo}</p>
          <p>{showCount && <CountUp end={skillPercent} duration={2} />}%</p>
        </div>

        <div className='skill__bar'>
          <Rotate></Rotate>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Skill;
