import React from 'react';
import "./Button.css";

const Button = ({text}) => {
  return(
    <div className="btn">
        <a className="btn-primary" href="">{text}</a>
    </div>
  );
}



export default Button;