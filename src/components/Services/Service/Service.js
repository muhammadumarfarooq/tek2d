import React from 'react';
import "./Service.css";


const Service = ({service}) => {
  return (

    <div class="service">
      <div class="service__icon">

        <div class="icons">
          <i class={`fas fa-${service.icon} fa-3x ${service.iconClass}`} ></i>
        </div>

        <div class="conta">
           <div class="octas">
             <div style={{background: service.colorA}} class="octagon octa1"></div>
              <div style={{background: service.colorB}} class="octagon octa2"></div>
            </div>
        </div>
      </div>
      <div class="service__content">
        <h3 class="sercices__title">{service.title}</h3>
        <div class="services__detail">{service.detail}</div>
      </div>
      <a href={service.address} class="services__btn">Read More</a>
    </div>


  );
}



export default Service;