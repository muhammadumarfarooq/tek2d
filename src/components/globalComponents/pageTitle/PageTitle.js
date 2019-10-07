import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../assets/page-title.jpg";
import Dots from "../Particles/Dots";

const PageTitle = ({ componentName }) => {
  return (
    <div style={pageTitleContainer}>
      <Dots />
      <div style={pageHeaderContent}>
        <h1>{componentName}</h1>
        <div>
          <NavLink to='/'>Home</NavLink> {`/ ${componentName}`}
        </div>
      </div>
    </div>
  );
};

const pageTitleContainer = {
  height: "15rem",
  position: "relative",
  background: `url(${img}) no-repeat center center/cover`,
  zIndex: 0,
  marginBottom: "50rem"
};

const pageHeaderContent = {
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export default PageTitle;
