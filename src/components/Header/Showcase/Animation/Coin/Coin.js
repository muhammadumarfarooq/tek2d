import React, { Fragment } from "react";
import "./Coin.css";
import coinImg from "../../../../../assets/showcase-img/coin.png";

const Coin = () => {
  return (
    <Fragment>
      <img class='coin coin1' src={coinImg} alt='img' />
      <img class='coin coin2' src={coinImg} alt='img' />
      <img class='coin coin3' src={coinImg} alt='img' />
      <img class='coin coin4' src={coinImg} alt='img' />
      <img class='coin coin5' src={coinImg} alt='img' />
    </Fragment>
  );
};

export default Coin;
