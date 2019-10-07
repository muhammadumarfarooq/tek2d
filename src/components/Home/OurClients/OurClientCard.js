import React from "react";

const OurClientCard = ({ clientCard }) => {
  return (
    <div className='OurClientCard'>
      <div className='client-card-wraper'>
        <div className='client-img-container'>
          <img className='client-img' src={clientCard.img} alt='client' />
        </div>
        <div className='client-card__title'>
          <div>
            <h2>{clientCard.name}</h2>
          </div>
          <div>
            <i class='fas fa-envelope fa-2x client-card-icon'></i>
          </div>
        </div>
        <div className='client-card__content'>
          <p>{clientCard.data}</p>
        </div>
      </div>
    </div>
  );
};

export default OurClientCard;
