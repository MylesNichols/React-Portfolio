import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

// Contact page where an email can be sent
// EmailJS template imported from wedsite
export const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5bsda6l', 'template_85cczge', form.current, 'vN8vOITrxzssD3rqP')
      .then((result) => {
          console.log(result.text);
          navigate.push('/react-profile')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='emailForm'>
        <h2>Email Me!</h2>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
  );
};

export default Contact;