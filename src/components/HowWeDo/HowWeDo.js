import React from "react";
import "./HowWeDo.css";
import Works from "./Works/Works";
import Title from "../globalComponents/Title/Title";

const HowWeDo = () => {
  return (
    <div className='howWeDo'>
      <div className='container'>
        <Title
          title='How Do We Do It'
          titleInfo='Every team consists of a way to start something. TEK2D follows the Agile
        Tradition which helps us to keep updated ourselves plus our client as
        well. Following is an amazing strategy we do while the process of
        project development.'
        />
        <Works />
      </div>
    </div>
  );
};

export default HowWeDo;
