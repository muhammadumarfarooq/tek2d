import React, { useEffect } from "react";
import "./Contact.css";

import PageTitle from "../globalComponents/pageTitle/PageTitle";

import { Helmet } from "react-helmet";
import TitleSide from "../globalComponents/TitleSide/TitleSide";
import ServiceCards from "../About/ServiceCards";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Contact Us &#8211; Tek2D</title>
      </Helmet>
      <PageTitle componentName='Contact Us' />
      <div className='contact'>
        <div className='container'>
          <div className='content-wraper'>
            <TitleSide
              text='You May Contact Us Any Time'
              style={{
                fontSize: "36px",
                fontWeight: 800,
                marginBottom: "1.5rem"
              }}
            />
            <span className='content-detail'>
              Our Customers Support Team Is Standby 24/7 To Answer All Queries.
            </span>
            <div className='contact-icons'>
              <div className='contact-address-container'>
                <div className='icon-wraper'>
                  <i className='fas fa-map-marker-alt fa-2x map-icon'></i>
                </div>
                <div className='contact-content'>
                  <span>Visit Us:</span>
                  <span>Faisalabad, Punjab, Pakistan</span>
                </div>
              </div>
              <div className='contact-address-container'>
                <div className='icon-wraper'>
                  <i className='fas fa-envelope fa-2x contact-icon'></i>
                </div>
                <div className='contact-content'>
                  <span>Mail Us:</span>
                  <span>contact@tek2d.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className='form-wraper'>
            <span>Leave a message</span>
            <form action=''>
              <input placeholder='Name*' type='text' className='form-input' />
              <input placeholder='Email*' type='email' className='form-input' />
              <textarea
                name='message'
                placeholder='Message...'
                className='form-input text-area'
                cols='30'
                rows='10'
              ></textarea>
              <input
                type='submit'
                className='input-btn'
                value='Send A Message'
              />
            </form>
          </div>
        </div>
        <ServiceCards />
      </div>
    </div>
  );
}

export default Contact;
