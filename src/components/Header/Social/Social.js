import React from 'react';
import "./Social.css";

const Social = () => {
  return(
    <div className="social">
      <div class="container">
        <div className="social__email">
        
          
          <a href="mailto:webmaster@example.com"><i class="fa fa-envelope" aria-hidden="true"></i>contact@tek2d.com</a>
        
        </div>
        <div>
        <div class="social__icons">
        <a href="http://facebook.com" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
        <a href="http://twitter.com" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="http://instagram.com" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
        <a href="http://youtube.com" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
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