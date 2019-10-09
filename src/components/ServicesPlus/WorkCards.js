import React from "react";
import Title from "../globalComponents/Title/Title";
import WorkCardItem from "./WorkCardItem";

class WorkCards extends React.Component {
  state = {
    services: [
      {
        title: "Web Development",
        detail:
          "Most businesses are aware of how vital a website is to commercial success. Whether it’s just a store front website describing what the business is all about, or a fully-fledged e-commerce solution, it’s safe to say that having a website is an invaluable asset in a demand...",
        icon: "desktop",
        iconClass: "web-development-icon",
        address: "#",
        iconShadow: "icon-shadow",
        iconColorClass: "work-icon-color"
      },
      {
        title: "App Development",
        detail:
          "The term Application development sounds a bit technical, right? Well yes, creating a computer program is not a piece of cake. It seems pretty easy to use these programs that have made our lives convenient but when it comes to checking out the way they work, it isn’t that effortless.",
        icon: "mobile-alt",
        iconClass: "app-development-icon",
        address: "#",
        iconColorClass: "work-icon-color"
      },
      {
        title: "Internet Marketing",
        detail:
          "Internet marketing is also called online marketing. Its main objective is to promote a business or a brand including the products and services that the particular brand has. The promotion is done by the means of some tools that help influence the sales ...",
        icon: "globe",
        iconClass: "internet-marketing-icon",
        address: "#",
        iconColorClass: "work-icon-color",
        iconShadow: "icon-shadow"
      },
      {
        title: "UI/UX Website Design",
        detail:
          "UX Design stands for User Experience Design, while UI Design stands for User Interface Design. Both designs play a vital role for a product. Both are crucial to a product and work closely together. UX Design is more to an analytical and technical side while UI Design is closer ...",
        icon: "pencil-alt",
        iconClass: "ui-ux-icon",
        address: "#",
        iconColorClass: "work-icon-color",
        iconShadow: "icon-shadow"
      },
      {
        title: "Branding",
        detail:
          "Branding can be defined as the process involving in the creation of a distinctive name and picture for any product in the consumers’ mind, that is mainly done through advertising campaigns with a reliable theme. Branding aims to establish an important position in the mark...",
        icon: "id-card",
        iconClass: "branding-icon",
        address: "#",
        iconColorClass: "work-icon-color",
        iconShadow: "icon-shadow"
      },
      {
        title: "Animation",
        detail:
          "The world of animation is truly astounding. One can dive deeper into this world of fantasy and can never end up getting to know it completely. It’s just that it’s a different world which pushes you into the deep sea of imagination. These smart people know their thing and there’s no ...",
        icon: "film",
        iconClass: "animation-icon",
        address: "#",
        iconColorClass: "work-icon-color",
        iconShadow: "icon-shadow"
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
            <WorkCardItem service={service} />
          ))}
        </div>
      </div>
    );
  }
}

export default WorkCards;
