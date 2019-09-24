import React from "react";

import "./App.css";
import Services from "./Services/Services";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import HoWeDo from "./HowWeDo/HowWeDo";
import Navbar from "./globalComponents/Navbar/Navbar";
import Social from "./Header/Social/Social";
import OurClients from "./OurClients/OurClients";
import Skill from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Showcase from "./Header/Showcase/Showcase";

class App extends React.Component {
  render() {
    return (
      <div>
        <Social />
        <Navbar />
        <Showcase />
        <Services />
        <WhoWeAre />
        <HoWeDo />
        <Skill />
        <OurClients />
        <Footer />
      </div>
    );
  }
}

export default App;
