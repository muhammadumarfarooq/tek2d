import React from "react";
import "./Title.css";

const Title = ({ title, titleInfo }) => {
  return (
    <div className='title__content'>
      <div>
        <span className='header-divider'></span>
        <h2 className='title'>{title}</h2>
      </div>
      <p>{titleInfo}</p>
    </div>
  );
};

export default Title;
