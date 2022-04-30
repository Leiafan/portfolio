import React, { useRef } from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p3w48hh', 'template_p8gtqgb', form.current, 'nv2UL99TV9-8B-Lx7');

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>e.batuashvili@gmail.com</h5>
            <a href="mailto:e.batuashvili@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiTwotoneMail className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Evrik</h5>
            <a href="https://m.me/CHionodoxxa" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiTwotoneMail className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://wa.me/+972543632277" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div> 
    </section>
  )
}

export default Contact