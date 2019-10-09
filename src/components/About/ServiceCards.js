import React from "react";

import Service from "../Home/Services/Service";
import Title from "../globalComponents/Title/Title";

class ServiceCards extends React.Component {
  state = {
    services: [
      {
        title: "Web Development",
        detail:
          "Most businesses are aware of how vital a website is to commercial success. Whether it’s ...",
        icon: "desktop",
        iconClass: "web-development-icon",
        address: "#",
        iconShadow: "icon-shadow",
        square: "service-box"
      },
      {
        title: "App Development",
        detail:
          "The term Application development sounds a bit technical, right? Well yes, creating a computer ...",
        icon: "mobile-alt",
        iconClass: "app-development-icon",
        address: "#",
        iconShadow: "icon-shadow",
        square: "service-box"
      },
      {
        title: "Internet Marketing",
        detail:
          "Internet marketing is also called online marketing. Its main objective is to promote ...",
        icon: "globe",
        iconClass: "internet-marketing-icon",
        address: "#",
        iconShadow: "icon-shadow",
        square: "service-box"
      },
      {
        title: "UI/UX Website Design",
        detail:
          "UX Design stands for User Experience Design, while UI Design stands ...",
        icon: "pencil-alt",
        iconClass: "ui-ux-icon",
        address: "#",
        iconShadow: "icon-shadow",
        square: "service-box"
      },
      {
        title: "Branding",
        detail:
          "Branding can be defined as the process involving in the creation of a distinctive name and picture ...",
        icon: "id-card",
        iconClass: "branding-icon",
        address: "#",
        iconShadow: "icon-shadow",
        square: "service-box"
      },
      {
        title: "Animation",
        detail:
          "The world of animation is truly astounding. One can dive deeper into this world of fantasy ...",
        icon: "film",
        iconClass: "animation-icon",
        address: "#",
        iconShadow: "icon-shadow",
        square: "service-box"
      }
    ]
  };

  render() {
    return (
      <div className='service-card'>
        <Title
          title='How Our Team Can Help'
          titleInfo='TEK2D provides a wide range of unique web development services that will make your business flourish to the maximum.
          Just ask us and we will make you the best website with the team of professionals that are there only for you.'
        />
        <div className='container'>
          {this.state.services.map(service => (
            <Service service={service} />
          ))}
        </div>
      </div>
    );
  }
}

export default ServiceCards;
