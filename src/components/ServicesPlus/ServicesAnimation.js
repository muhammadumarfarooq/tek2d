import React from "react";
import rocketImg from "../../assets/serviceImages/1.png";
import smallLeaf from "../../assets/serviceImages/2.png";
import bigLeaf from "../../assets/serviceImages/3.png";
import laptopImg from "../../assets/serviceImages/4.png";
import cloudsImg from "../../assets/serviceImages/5.png";

const ServicesAnimation = () => {
  return (
    <div className='service-animation'>
      <div className='service-animation-wrap'>
        <img src={bigLeaf} className='service-img big-leaf' alt='bigleaf-img' />
        <img
          src={smallLeaf}
          className='small-leaf service-img'
          alt='small-img'
        />
        <img
          src={laptopImg}
          className='laptop-img service-img'
          alt='laptop-img'
        />
        <img
          src={rocketImg}
          className='rocket-img service-img'
          alt='rocket-img'
        />
        <img
          src={cloudsImg}
          className='cloud-img service-img'
          alt='cloud-img'
        />
      </div>
    </div>
  );
};

export default ServicesAnimation;
