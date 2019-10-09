import React from "react";

const Service = ({ service }) => (
  <div class={`service ${service.styleClasses}`}>
    <div class='service__icon'>
      <div class={`icons ${service.iconShadow}`}>
        <i
          class={`fas fa-${service.icon}  ${service.iconClass} service-icon-color fa-2x`}
        ></i>
      </div>
      <div class={`conta ${service.circle}`}>
        <div class='octas'>
          <div
            style={{ background: service.colorA }}
            class={`${service.octagonClass} octa1`}
          ></div>
          <div
            style={{ background: service.colorB }}
            class={`${service.octagonClass} octa2`}
          ></div>
        </div>
      </div>
    </div>
    <div class='service__content'>
      <h3 class='sercices__title'>{service.title}</h3>
      <div class='services__detail'>{service.detail}</div>
    </div>
    <a href={service.address} class='services__btn'>
      Read More
    </a>
  </div>
);

export default Service;
