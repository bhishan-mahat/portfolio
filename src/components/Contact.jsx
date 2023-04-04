import "./Contact.css";

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact bg-less-dark section-parallax">
      <div className="wrapper contact__wrapper border-bottom">
        <div className="contact__text">
          <h2 className="contact__headline header-xl">Contact</h2>
          <p className="contact__description">
            If you want to connect or collaborate with me, please fill in the
            form, and I'll get back to you asap.
          </p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__control">
            <input
              type="text"
              id="name"
              name="name"
              required
            />
            <label htmlFor="name" className="contact__label">
              Name
            </label>
          </div>

          <div className="contact__control">
            <input
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="email" className="contact__label">
              Email
            </label>
          </div>

          <div className="contact__control">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              required
            ></textarea>
            <label htmlFor="message" className="contact__label message-label">
              Message
            </label>
          </div>

          <div className="contact__control align-right">
            <button type="submit" className="button">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
