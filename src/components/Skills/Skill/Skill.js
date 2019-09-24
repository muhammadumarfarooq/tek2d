import React from "react";

import CountUp from "react-countup";

import { keyframes } from "styled-components";

import styled from "styled-components";

import "./Skill.css";

const Skill = ({ skillPercent, skillInfo, progressColor }) => {
  const rotate = keyframes`
  from{
    width: 0%;
  }
  to{
    width: ${skillPercent}%;
  }
`;

  const Rotate = styled.div`
    background-image: ${progressColor};
    height: 0.5rem;
    animation: ${rotate} 2s forwards ease-in-out;
    border-radius: 5px;
  `;

  return (
    <div className='skill'>
      <div class='skill__info'>
        <p>{skillInfo}</p>
        <p>
          <CountUp end={skillPercent} duration={2} />%
        </p>
      </div>

      <div class='skill__bar'>
        <Rotate></Rotate>
      </div>
    </div>
  );
};

export default Skill;
