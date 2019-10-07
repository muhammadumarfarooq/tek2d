import React from "react";
import "./Showcase.css";

import Button from "../../globalComponents/Button/Button";
import Animation from "./Animation/Animation";

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='container'>
        <div className='showcase__content'>
          <h1>We make your business look cool</h1>
          <p className='showcase__detail'>
            Are You Looking For Finest Dedicated Web Designer, Graphic Designer,
            Animator &amp; Internet Marketing Team?
          </p>
          <p className='showcase__detail2'>
            if Yes! You Are At Right Place{" "}
            <span role='img' description='aria-label'></span>
          </p>
          <Button text='ABOUT US' />
        </div>
        <Animation />
      </div>
    </div>
  );
};

export default Showcase;
