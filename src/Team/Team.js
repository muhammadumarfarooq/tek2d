import React from "react";
import PageTitle from "../components/globalComponents/pageTitle/PageTitle";

import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <div>
      <Helmet>
        <title>Team &#8211; Tek2D</title>
      </Helmet>
      <PageTitle componentName='Our Team' />
    </div>
  );
};

export default Team;
