import React, { useEffect } from "react";

import "./About.css";

import PageTitle from "../globalComponents/pageTitle/PageTitle";
import Title from "../globalComponents/Title/Title";
import AboutInfo from "./AboutInfo";

import { Helmet } from "react-helmet";
import ServiceCards from "./ServiceCards";

const style = {
  bg: {
    background: "#FF7D00",
    color: "#fff",
    fontWeight: "bold",
    padding: "0 0.3rem",
    borderRadius: "4px"
  },
  bold: {
    fontWeight: "bold"
  }
};

const { bg, bold } = style;

const data = (
  <span>
    TEK2D is a Pakistani Company that was founded by{" "}
    <spam style={bg}>SAMI ULLAH</spam> &amp;{" "}
    <span style={bg}>MUNEEB UR REHMAN</span>. It has provided service regarding
    development and many more for the past <span style={bold}>5+ Years</span>.
    We employed a skilled team of developers in <span style={bold}>2014</span>,
    Pakistan, who are focused on delivering high-quality software solutions
    which helps our customers to achieve their certain goals easily.
  </span>
);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>About Us &#8211; Tek2D</title>
      </Helmet>

      <PageTitle componentName='About Us' />
      <Title title='How Do We Do It' titleInfo={data} />
      <AboutInfo />
      <ServiceCards />
    </div>
  );
};

export default About;
