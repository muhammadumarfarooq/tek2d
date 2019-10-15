import React from "react";

const Service = ({ service }) => (
  <div className={`service ${service.styleClasses}`}>
    <div className='service__icon'>
      <div className={`icons ${service.iconShadow}`}>
        <i
          className={`fas fa-${service.icon}  ${service.iconClass} service-icon-color fa-2x`}
        ></i>
      </div>
      <div className={`conta ${service.circle}`}>
        <div className='octas'>
          <div
            style={{ background: service.colorA }}
            className={`${service.octagonClass} octa1`}
          ></div>
          <div
            style={{ background: service.colorB }}
            className={`${service.octagonClass} octa2`}
          ></div>
        </div>
      </div>
    </div>
    <div className='service__content'>
      <h3 className='sercices__title'>{service.title}</h3>
      <div className='services__detail'>{service.detail}</div>
    </div>
    <a href={service.address} className='services__btn'>
      Read More
    </a>
  </div>
);

export default Service;
