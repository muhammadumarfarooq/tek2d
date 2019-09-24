import React from "react";
import "./HowWeDo.css";
import Works from "./Works/Works";

const HowWeDo = () => {
  return (
    <div className='howWeDo'>
      <div className='container'>
        <div className='howWeDo__content'>
          <h2>How Do We Do It</h2>
          <p>
            Every team consists of a way to start something. TEK2D follows the
            Agile Tradition which helps us to keep updated ourselves plus our
            client as well. Following is an amazing strategy we do while the
            process of project development.
          </p>
        </div>
        <Works />
      </div>
    </div>
  );
};

export default HowWeDo;
