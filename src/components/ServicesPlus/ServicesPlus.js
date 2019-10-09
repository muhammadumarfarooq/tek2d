import React from "react";
import "./ServicesPlus.css";

import PageTitle from "../globalComponents/pageTitle/PageTitle";

import { Helmet } from "react-helmet";
import WorkCards from "./WorkCards";
import ServicesAnimation from "./ServicesAnimation";
import Title from "../globalComponents/Title/Title";
import Button from "../globalComponents/Button/Button";

const subTitle = (
  <div>
    <p>
      TEK2D provides a wide range of unique web development services that will
      make your business flourish to the maximum. Just ask us and we will make
      you the best website with the team of professionals that are there only
      for you
    </p>
    <p>
      TEK 2D provides the best services the are latest in today’s world ensuring
      all the security in your website that will make your business goes to the
      next level following are the services we are providing.
    </p>
  </div>
);

function ServicesPlus() {
  return (
    <div>
      <Helmet>
        <title>Services &#8211; Tek2D</title>
      </Helmet>
      <PageTitle componentName='Services' />
      <ServicesAnimation />
      <div style={{ marginTop: "40%" }}>
        <Title
          title='Professional WEB For Your Business'
          titleInfo={subTitle}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem"
          }}
        >
          <Button text='Contact Us' />
        </div>
      </div>
      <WorkCards />
    </div>
  );
}

export default ServicesPlus;
