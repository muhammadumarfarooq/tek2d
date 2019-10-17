import React, { Fragment, useEffect } from "react";

import "./Home.css";

import Showcase from "./Showcase/Showcase";
import Services from "./Services/Services";
import WhoWeAre from "./WhoWeAre";
import HowWeDo from "./HowWeDo/HowWeDo";
import Skills from "./Skills/Skills";
import OurClients from "./OurClients/OurClients";

import skillImg from "../../assets/skills.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Showcase />
      <Services />
      <WhoWeAre />
      <HowWeDo />
      <Skills skillImg={skillImg} />
      <OurClients />
    </Fragment>
  );
};

export default Home;
