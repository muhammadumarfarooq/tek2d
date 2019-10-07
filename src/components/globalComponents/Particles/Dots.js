import React from "react";

import Particles from "react-particles-js";

const Dots = ({ number, bgColor }) => {
  return (
    <div style={{ zIndex: 0 }}>
      <Particles
        params={{
          particles: {
            number: {
              value: number,
              density: { enable: true, value_area: 800 }
            },
            color: {
              value: ["#3224e9", "#ff4200", "#8cffed", "#FED373"]
            },
            shape: {
              type: "polygon",
              stroke: { width: 0, color: "#000" },
              polygon: { nb_sides: 6 },
              image: { src: "", width: 100, height: 100 }
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 7,
              random: true,
              anim: { enable: false, speed: 5, size_min: 40, sync: false }
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 0
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
        style={{
          width: "50vh",
          height: "100%",
          background: bgColor,
          position: "absolute"
        }}
      />
    </div>
  );
};

export default Dots;
