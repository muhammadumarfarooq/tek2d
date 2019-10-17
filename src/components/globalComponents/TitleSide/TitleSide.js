import React from "react";
import "./TitleSide.css";

const TitleSide = ({ text, style }) => {
  return (
    <div style={style}>
      <span className='heading_divider'></span>
      <span style={{ paddingTop: "20px", display: "inline-block" }}>
        {text}
      </span>
    </div>
  );
};

export default TitleSide;
