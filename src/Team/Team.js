import React, { useEffect } from "react";
import PageTitle from "../components/globalComponents/pageTitle/PageTitle";

import { Helmet } from "react-helmet";
import Title from "../components/globalComponents/Title/Title";
import TeamMembers from "./TeamMembers/TeamMembers";
import Skills from "../components/Home/Skills/Skills";

import skillImg from "../assets/team-work.jpg";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Team &#8211; Tek2D</title>
      </Helmet>
      <PageTitle componentName='Our Team' />
      <Title
        title='Our Executive Team'
        titleInfo='Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients.'
      />
      <TeamMembers />
      <Title
        title='Our Skills'
        titleInfo='The team of a company plays a vital role in its development. TEK2D is also constructed with a hard-working team that leads us in the market and make us compatible with other companies as well. Following are some major teams we are having right now that help us to construct your project in a more appropriate way'
      />
      <Skills skillImg={skillImg} />
    </div>
  );
};

export default Team;
