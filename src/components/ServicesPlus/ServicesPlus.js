import React from "react";
import PageTitle from "../globalComponents/pageTitle/PageTitle";

import { Helmet } from "react-helmet";

function ServicesPlus() {
  return (
    <div>
      <Helmet>
        <title>Services &#8211; Tek2D</title>
      </Helmet>
      <PageTitle componentName='Services' />
    </div>
  );
}

export default ServicesPlus;
