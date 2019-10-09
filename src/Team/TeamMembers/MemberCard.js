import React from "react";
import SocialIcons from "../../components/globalComponents/Footer/SocialIcons";

const MemberCard = ({ member }) => {
  return (
    <div className='member-card'>
      <div class='img-wrapper'>
        <img src={member.img} alt={member.name} />
      </div>
      {member.social ? (
        <div className='social-icons'>
          <SocialIcons iconClass='card-iconClass' />
        </div>
      ) : (
        undefined
      )}

      <h2 className='member-name'>{member.name}</h2>
      <p className='member-position'>{member.position}</p>
    </div>
  );
};

export default MemberCard;
