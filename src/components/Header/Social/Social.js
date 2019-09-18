import React from 'react';
import "./Social.css";

const Social = () => {
  return(
    <div className="social">
      <div class="container">
        <div className="social__email">
        
          
          <a href="mailto:webmaster@example.com"><i class="fa fa-envelope" aria-hidden="true"></i>contact@tek2d.com</a>
        
        </div>
        <div className="social-icon__wraper">
        <div class="social__icons">
        <a href="https://www.facebook.com/tek2d" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/tek2_d" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/tek2d" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/company/tek2d" target="_blank"><i class="fab fa-linkedin"></i></a>
       </div>
        </div>
        <div className="quote-btn">
          <a href="#">Get a Quote</a>
        </div>
      </div>
    </div>
  );
}



export default Social;