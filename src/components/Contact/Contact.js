import React from "react";
import PageTitle from "../globalComponents/pageTitle/PageTitle";

import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us &#8211; Tek2D</title>
      </Helmet>
      <PageTitle componentName='Contact Us' />
    </div>
  );
}

export default Contact;
