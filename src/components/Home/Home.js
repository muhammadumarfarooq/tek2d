import React, { Fragment } from "react";

import "./Home.css";

import Showcase from "./Showcase/Showcase";
import Services from "./Services/Services";
import WhoWeAre from "./WhoWeAre";
import HowWeDo from "./HowWeDo/HowWeDo";
import Skills from "./Skills/Skills";
import OurClients from "./OurClients/OurClients";

const Home = () => (
  <Fragment>
    <Showcase />
    <Services />
    <WhoWeAre />
    <HowWeDo />
    <Skills />
    <OurClients />
  </Fragment>
);

export default Home;
