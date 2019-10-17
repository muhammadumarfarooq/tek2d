import React from "react";
import "./Services.css";

import { ParallaxProvider } from "react-scroll-parallax";

import { Parallax } from "react-scroll-parallax";

import rocketImg from "../../../assets/rocket.png";
import octagons from "../../../assets/octagons.png";

import Service from "./Service";

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
        colorB: "#FED373",
        circle: "circle-octagon",
        styleClasses: "circle",
        octagonClass: "octagon"
      },
      {
        title: "App Development",
        detail:
          "The term Application development sounds a bit technical, right? Well yes, creating a computer ...",
        icon: "mobile-alt",
        iconClass: "app-development-icon",
        address: "#",
        colorA: "#3224e9",
        colorB: "#72e3f2",
        circle: "circle-octagon",
        styleClasses: "circle",
        octagonClass: "octagon"
      },
      {
        title: "Internet Marketing",
        detail:
          "Internet marketing is also called online marketing. Its main objective is to promote ...",
        icon: "globe",
        iconClass: "internet-marketing-icon",
        address: "#",
        colorA: "#8cffed",
        colorB: "#009cff",
        circle: "circle-octagon",
        styleClasses: "circle",
        octagonClass: "octagon"
      },
      {
        title: "UI/UX Website Design",
        detail:
          "UX Design stands for User Experience Design, while UI Design stands ...",
        icon: "pencil-alt",
        iconClass: "ui-ux-icon",
        address: "#",
        colorA: " #5ad0ff",
        colorB: "#3224e9",
        circle: "circle-octagon",
        styleClasses: "circle",
        octagonClass: "octagon"
      },
      {
        title: "Branding",
        detail:
          "Branding can be defined as the process involving in the creation of a distinctive name and picture ...",
        icon: "id-card",
        iconClass: "branding-icon",
        address: "#",
        colorA: "#FED373",
        colorB: "#ff4200",
        circle: "circle-octagon",
        styleClasses: "circle",
        octagonClass: "octagon"
      },
      {
        title: "Animation",
        detail:
          "The world of animation is truly astounding. One can dive deeper into this world of fantasy ...",
        icon: "film",
        iconClass: "animation-icon",
        address: "#",
        colorA: "#8cffed",
        colorB: "#009cff",
        circle: "circle-octagon",
        styleClasses: "circle",
        octagonClass: "octagon"
      }
    ]
  };

  render() {
    return (
      <div className='services'>
        <ParallaxProvider>
          <Parallax className='custom-class' y={[350, -20]} tagOuter='figure'>
            <img src={rocketImg} alt='rocket-scrolling-fast' />
          </Parallax>
        </ParallaxProvider>

        <ParallaxProvider>
          <Parallax
            className='octagons-container'
            y={[50, -10]}
            tagOuter='figure'
          >
            <img src={octagons} alt='3-octagon-images' />
          </Parallax>
        </ParallaxProvider>

        <div className='container'>
          {this.state.services.map(service => (
            <Service key={service.icon} service={service} />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
