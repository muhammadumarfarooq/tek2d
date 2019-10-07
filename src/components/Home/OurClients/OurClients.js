import React from "react";
import "./OurClients.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import OurClientCard from "./OurClientCard";

import c1 from "../../../assets/clientCard/c1.jpeg";
import c2 from "../../../assets/clientCard/c2.jpg";
import c3 from "../../../assets/clientCard/c3.jpeg";
import Title from "../../globalComponents/Title/Title";

class OurClients extends React.Component {
  state = {
    clientCards: [
      {
        img: c1,
        name: "Austin Anderson",
        data:
          "“TEK2D was amazing, they delivered great value. They put my idea together perfectly. They did the packaging for my product and did my logo for free. I had no idea what I was doing coming into this job but they made it very easy.”"
      },
      {
        img: c3,
        name: "Gal Amzaleg",
        data:
          "“Again it was a great experience. Working with TEK2D was fantastic they deliver everything right on time and I get the quality work I was expecting from them. Looking forward to working with TEK2D again.”"
      },
      {
        img: c1,
        name: "Austin Anderson",
        data:
          "“TEK2D was amazing, they delivered great value. They put my idea together perfectly. They did the packaging for my product and did my logo for free. I had no idea what I was doing coming into this job but they made it very easy.”"
      },
      {
        img: c2,
        name: "Lark Lindig",
        data:
          "“TEK2D is the easiest team to work w/ I have hired yet. TEK2D is available 24/7 the key is keeping the lines of communication open and lots of screens sharing at 1st to be sure that we are on the same page. Good job TEK2D.”"
      }
    ]
  };
  handleOnDragStart = e => e.preventDefault();

  responsive = {
    0: {
      items: 1
    },
    1024: {
      items: 3
    }
  };
  render() {
    return (
      <div className='OurClients'>
        <div className='checking'>
          <div className='container'>
            <div style={{ marginTop: "3rem" }}>
              <Title title="So Far Client's Feedback About TEK2D" />
            </div>
            <div>
              <AliceCarousel
                responsive={this.responsive}
                autoPlayInterval={2000}
                mouseDragEnabled
                autoPlay={true}
                buttonsDisabled={true}
              >
                {this.state.clientCards.map(clientCard => (
                  <OurClientCard clientCard={clientCard} />
                ))}
              </AliceCarousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurClients;
