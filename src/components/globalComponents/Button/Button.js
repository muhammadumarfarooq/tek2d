import React from "react";
import "./Button.css";

const Button = ({ text, padding }) => {
  return (
    <div className='btn'>
      <a style={{ padding }} className='btn-primary' href='#btn'>
        {text}
      </a>
    </div>
  );
};

export default Button;
