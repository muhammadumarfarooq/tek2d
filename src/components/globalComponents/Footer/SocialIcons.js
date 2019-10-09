import React from "react";

const SocialIcons = ({ iconClass }) => {
  return (
    <div>
      <div className={`footer-icon ${iconClass}`}>
        <a href=''>
          <i class='fab fa-facebook-f'></i>
        </a>
        <a href=''>
          <i class='fab fa-twitter'></i>
        </a>
        <a href=''>
          <i class='fab fa-linkedin-in'></i>
        </a>
        <a href=''>
          <i class='fab fa-instagram'></i>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
