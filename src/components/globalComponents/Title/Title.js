import React from "react";

const Title = ({ title, titleInfo }) => {
  return (
    <div className='howWeDo__content'>
      <div>
        <span className='header-divider'></span>
        <h2 className='title'>{title}</h2>
      </div>
      <p>{titleInfo}</p>
    </div>
  );
};

export default Title;
