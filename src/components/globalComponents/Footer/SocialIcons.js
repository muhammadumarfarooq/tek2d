import React from "react";

const SocialIcons = ({ iconClass }) => {
  return (
    <div>
      <div className={`footer-icon ${iconClass}`}>
        <a href='#fb'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='#tw'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#link'>
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a href='#ins'>
          <i className='fab fa-instagram'></i>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
