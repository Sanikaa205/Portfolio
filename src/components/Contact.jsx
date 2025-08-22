import React from 'react';
import './Contact.css';
import FadeInSection from "./FadeInSection";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { database } from "../firebase";

import { ref, push } from "firebase/database";

function Contact() { 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    emailjs
      .sendForm(
        'service_portfolio',    
        'template_00000',      
        form.current,
        't62ubR1BLtHuUpt56'      
      )
      .then(
        (result) => {
          // Save to Firebase Realtime Database
          push(ref(database, 'messages'), {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
          });

          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <FadeInSection>
      <div className='contact-page-container' id='contact' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1447433819943-74a20887a8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')" }}>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1>Get in Touch</h1>
            <p style={{ color: '#959595ff' }}>
              I’m always open to discussing tech, projects, or creative ideas!
            </p><br/>

            <div className="contact-info">
              <p><span>Email:</span> ssanikaa205@gmail.com</p>
              <p><span>Phone:</span> +91-8779985725</p>
              <p><span>Location:</span> India</p>
              <p><span>LinkedIn:</span> <a href="https://www.linkedin.com/in/sanika-shinde-006b932b5/" target="_blank" rel="noreferrer">My LinkedIn</a></p>
              <p><span>GitHub:</span> <a href="https://github.com/Sanikaa205" target="_blank" rel="noreferrer">My GitHub</a></p>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <h2>Drop Me a Message</h2>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        

          
        </div>
      </div>
    </FadeInSection>
  );
};

export default Contact;
