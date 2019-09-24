import React from "react";
import "./Work.css";

const Work = ({ work }) => {
  const style = {
    gridColumnStart: work.alignment.colS,
    gridColumnEnd: work.alignment.colE,
    gridRowStart: work.alignment.rowS,
    gridRowEnd: work.alignment.rowE
  };
  return (
    <div style={style} class='work'>
      <div className='work-check'>
        <div class='work-wraper'>
          <div class='work-octagon-wraper'>
            <svg
              class='work-octagon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 177.4 197.4'
            >
              <path d='M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z'></path>
            </svg>
          </div>
          <div class={`work__number ${work.colorClass}`}>{work.number}</div>

          <div class='work__container'>
            <div class='content__icon'>
              <img src={work.icon} alt='work-icon' />
            </div>
            <div class='content__title'>
              <h3>{work.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
