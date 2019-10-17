import React, { useEffect } from "react";
import PageTitle from "../globalComponents/pageTitle/PageTitle";

import { Helmet } from "react-helmet";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
