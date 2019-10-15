import React from "react";
import "./Social.css";

class Social extends React.Component {
  state = {
    icons: [
      { link: "https://www.facebook.com/tek2d", icon: "facebook-f" },
      { link: "https://twitter.com/tek2_d", icon: "twitter" },
      { link: "https://www.instagram.com/tek2d", icon: "linkedin-in" },
      { link: "https://www.linkedin.com/company/tek2d", icon: "instagram" }
    ]
  };

  render() {
    return (
      <div className='social'>
        <div className='container'>
          <div className='social__email'>
            <a href='mailto:webmaster@example.com'>
              <i className='fa fa-envelope' aria-hidden='true'></i>
              contact@tek2d.com
            </a>
          </div>
          <div className='social__icons'>
            {this.state.icons.map(icon => (
              <a href={icon.link} key={icon.icon}>
                <i className={`fab fa-${icon.icon}`}></i>
              </a>
            ))}
          </div>
          <div className='quote-btn'>
            <a href='#quote'>Get a Quote</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
