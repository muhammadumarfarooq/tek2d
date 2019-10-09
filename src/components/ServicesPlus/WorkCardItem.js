import React from "react";

const WorkCardItem = ({ service }) => (
  <div class='work-card'>
    <div class='work-card-icon'>
      <i class={`fas fa-${service.icon} ${service.iconColorClass} fa-2x`}></i>
    </div>
    <div class='work-card__content'>
      <h3 class='work-card__title'>{service.title}</h3>
      <div class='work-card__detail'>{service.detail}</div>
    </div>
    <a href={service.address} class='services__btn'>
      Read More
    </a>
  </div>
);

export default WorkCardItem;

// const WorkCardItem = ({ service }) => (
//   <div class='service'>
//     <div class='service__icon'>
//       <i class={`fas fa-${service.icon} ${service.iconColorClass} fa-2x`}></i>
//     </div>
//     <div class='service__content'>
//       <h3 class='sercices__title'>{service.title}</h3>
//       <div class='services__detail'>{service.detail}</div>
//     </div>
//     <a href={service.address} class='services__btn'>
//       Read More
//     </a>
//   </div>
// );

// export default WorkCardItem;
