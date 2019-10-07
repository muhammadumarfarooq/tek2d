import React from "react";

import "./About.css";

import PageTitle from "../globalComponents/pageTitle/PageTitle";
import Title from "../globalComponents/Title/Title";
import AboutInfo from "./AboutInfo";

import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us &#8211; Tek2D</title>
      </Helmet>

      <PageTitle componentName='About Us' />
      <Title
        title='How Do We Do It'
        titleInfo='TEK2D is a Pakistani Company that was founded by SAMI ULLAH & MUNEEB UR REHMAN. It has provided service regarding development and many more for the past 5+ Years. We employed a skilled team of developers in 2014, Pakistan, who are focused on delivering high-quality software solutions which helps our customers to achieve their certain goals easily.'
      />
      <AboutInfo />
    </div>
  );
};

export default About;
