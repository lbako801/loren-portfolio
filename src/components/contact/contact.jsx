import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Resume from "../../assets/resume.pdf";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-headers">
        <h3>Useful links...</h3>
        <a href={Resume} rel="noreferrer" target="_blank" className="btn">
          RESUME
        </a>
        <a
          href="mailto:loren@lorenbako.com"
          rel="noreferrer"
          target="_blank"
          className="btn"
        >
          LOREN@LORENBAKO.COM
        </a>
      </div>
      <div className="contact-socials">
        <a
          href="https://www.linkedin.com/in/loren-bako-5383b1245/"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          <BsLinkedin size={30} />
        </a>
        <a
          href="https://github.com/lbako801"
          className="social-icons"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
