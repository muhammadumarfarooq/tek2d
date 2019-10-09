import React from "react";
import "./TeamMembers.css";
import MemberCard from "./MemberCard";

import img1 from "../TeamMembers/images/abdullah.png";
import img2 from "../TeamMembers/images/muneeb.png";
import img3 from "../TeamMembers/images/ali.png";
import img4 from "../TeamMembers/images/malik-mohsin.jpg";
import img5 from "../TeamMembers/images/fahad.png";
import img6 from "../TeamMembers/images/haris.jpg";
import img7 from "../TeamMembers/images/mohsin.png";
import img8 from "../TeamMembers/images/tauseef.png";
import img9 from "../TeamMembers/images/faisal.png";
import img10 from "../TeamMembers/images/sami.png";
import img11 from "../TeamMembers/images/sohail.png";
import img12 from "../TeamMembers/images/shahab.png";

class TeamMembers extends React.Component {
  state = {
    members: [
      { name: "Abdullah Khalid", position: "Project Manager", img: img1 },
      {
        name: "Sami Ullah",
        position: "Co-Founder",
        img: img10,
        social: { twitter: "https://twitter.com/samiullah8420" }
      },
      {
        name: "Muneeb ur Rehman",
        position: "Co-Founder",
        img: img2,
        social: { twitter: "https://twitter.com/samiullah8420" }
      },
      { name: "M. Sohail Safdar", position: "Mentor", img: img11 },

      { name: "Ali Hussnain", position: "Senior Developer", img: img3 },
      { name: "Shahab Siddeeq", position: "Frontend Developer", img: img12 },
      { name: "Fahad Ali", position: "SEO / SEM Manager", img: img5 },
      { name: "Haris Abdullah", position: "Web Designer", img: img6 },
      { name: "Mohsan Rafiq", position: "Frontend Developer", img: img4 },
      { name: "Mohsin Ali", position: "Senior Developer", img: img7 },
      { name: "M. Tauseef", position: "Senior Developer", img: img8 },
      { name: "Faisal Ali", position: "Graphic Designer", img: img9 }
    ]
  };
  render() {
    return (
      <div className='team-members'>
        <div className='container'>
          {this.state.members.map(member => (
            <MemberCard member={member} />
          ))}
        </div>
      </div>
    );
  }
}

export default TeamMembers;
