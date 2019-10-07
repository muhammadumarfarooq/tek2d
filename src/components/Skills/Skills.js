import React from "react";
// import TeamInfo from "../TeamMembers/TeamInfo/TeamInfo";

import "./Skills.css";
import Skill from "./Skill/Skill";

import skillImg from "../../assets/skills.jpg";

const Skills = () => {
  return (
    <div className='skills'>
      <div className='container'>
        <div className='skill-bars'>
          <Skill
            skillPercent={95}
            skillInfo='WEB DESIGN &amp; DEVELOPMENT'
            progressColor='linear-gradient(120deg, #8cffed 0%, #009cff 100%)'
          />
          <Skill
            skillPercent={85}
            skillInfo='MOBILE APP DEVELOPMENT'
            progressColor='linear-gradient(120deg, #5ad0ff 0%, #3224e9 100%)'
          />

          <Skill
            skillPercent={80}
            skillInfo='INTERNET MARKETING'
            progressColor='linear-gradient(120deg, #f200de 0%, #a600d8 100%)'
          />
          <Skill
            skillPercent={95}
            skillInfo='UI/UX WEBSITE DESIGN
                  '
            progressColor='linear-gradient(120deg, #ffc600 0%, #ff4200 100%)'
          />
          <Skill
            skillPercent={95}
            skillInfo='BRANDING DESIGN
'
            progressColor='linear-gradient(120deg, #e89600 0%, #fff600 100%)'
          />
          <Skill
            skillPercent={80}
            skillInfo='ANIMATION'
            progressColor='linear-gradient(120deg, #8afcc1 0%, #00a5b5 100%)'
          />
        </div>
        <div className='skill-image'>
          <img className='team-work-img' src={skillImg} alt='skills-img' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
