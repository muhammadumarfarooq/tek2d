import React from "react";
import PageTitle from "../globalComponents/pageTitle/PageTitle";

import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio &#8211; Tek2D</title>
      </Helmet>
      <PageTitle componentName='Portfolio' />
    </div>
  );
};

export default Portfolio;
