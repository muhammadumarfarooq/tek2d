import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ text, padding, path }) => {
  return (
    <div className='btn'>
      <Link to={path} style={{ padding }} className='btn-primary'>
        {text}
      </Link>
    </div>
  );
};

export default Button;
