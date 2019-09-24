import React from "react";
import "./Services.css";

// import rocketImg from "../../assets/rocket.png";

import Service from "./Service/Service";

class Services extends React.Component {
  state = {
    services: [
      {
        title: "Web Development",
        detail:
          "Most businesses are aware of how vital a website is to commercial success. Whether it’s ...",
        icon: "desktop",
        iconClass: "web-development-icon",
        address: "#",
        colorA: "#ff4200",
        colorB: "#FED373"
      },
      {
        title: "App Development",
        detail:
          "The term Application development sounds a bit technical, right? Well yes, creating a computer ...",
        icon: "mobile-alt",
        iconClass: "app-development-icon",
        address: "#",
        colorA: "#3224e9",
        colorB: "#72e3f2"
      },
      {
        title: "Internet Marketing",
        detail:
          "Internet marketing is also called online marketing. Its main objective is to promote ...",
        icon: "globe",
        iconClass: "internet-marketing-icon",
        address: "#",
        colorA: "#8cffed",
        colorB: "#009cff"
      },
      {
        title: "UI/UX Website Design",
        detail:
          "UX Design stands for User Experience Design, while UI Design stands ...",
        icon: "pencil-alt",
        iconClass: "ui-ux-icon",
        address: "#",
        colorA: " #5ad0ff",
        colorB: "#3224e9"
      },
      {
        title: "Branding",
        detail:
          "Branding can be defined as the process involving in the creation of a distinctive name and picture ...",
        icon: "id-card",
        iconClass: "branding-icon",
        address: "#",
        colorA: "#FED373",
        colorB: "#ff4200"
      },
      {
        title: "Animation",
        detail:
          "The world of animation is truly astounding. One can dive deeper into this world of fantasy ...",
        icon: "film",
        iconClass: "animation-icon",
        address: "#",
        colorA: "#8cffed",
        colorB: "#009cff"
      }
    ]
  };

  render() {
    return (
      <div className='services'>
        {/* <div className='rocket-wraper'>
          <img src={rocketImg} alt='rocket-scrlling-fast' />
        </div> */}
        <div className='container'>
          {this.state.services.map(service => (
            <Service service={service} />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
