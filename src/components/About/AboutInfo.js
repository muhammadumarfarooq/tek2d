import React from "react";
import aboutImg from "../../assets/about.jpg";

const AboutInfo = () => {
  return (
    <div>
      <div className='about-info'>
        <div className='container'>
          <div className='about-info-data'>
            <p>
              We are uniquely defined as a team that provides quality service
              regarding web in affordable and reachable rates of the clients
              from Pakistan, the 2nd biggest country for freelancers. The only
              unique thing that makes us prominent in the industry is this that
              is quality things in lowest cost with the least time duration.
            </p>
            <p>
              We provide quality software solutions and answers to the
              requirements of complex software to our clients which make them
              satisfied, time reliability is given as well within affordable
              budget. The main task if ours is to save yours and ours times as
              time is the biggest money that needs to be saved.
            </p>
          </div>
          <div className='about-image'>
            <img className='team-work-img' src={aboutImg} alt='about-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
