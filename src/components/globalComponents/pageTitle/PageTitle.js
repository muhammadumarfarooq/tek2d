import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../assets/page-title.jpg";
import Dots from "../Particles/Dots";

const PageTitle = ({ componentName }) => {
  return (
    <div style={pageTitleContainer}>
      <Dots />
      <div style={pageHeaderContent}>
        <h1 style={heading}>{componentName}</h1>
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
  zIndex: 0
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

const heading = {
  fontWeight: 800,
  fontSize: "2.625rem"
};

export default PageTitle;
