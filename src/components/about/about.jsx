import React from "react";
import PIC from "../../assets/images/about-me-img.png";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Who am I?</h2>

      <div className="about-content">
        <div className="image-wrapper">
          <img src={PIC} className="image-1" alt="Loren in ASCII" />
        </div>

        <div className="about-info-container">
          <div className="about-section">
            <p className="about-info">
              <span className="line-break">{'>'}</span> I'm a full-stack developer focused on the manufacturing world. 
              Based in SLC, I’ve built everything from web apps to ERP extensions, financial tools, and data-warehouse systems. 
              I have a habit of delivering software people swear “can’t be done.”
            </p>
          </div>

          <div className="about-section">
            <p className="about-info">
              <span className="line-break">{'>'}</span> On the front end, I work with HTML, CSS, JavaScript, and React. 
              On the backend, I build with PHP, Node.js, MySQL, SQL Server, MongoDB, and PostgreSQL. 
              I also work heavily in the Microsoft Dynamics ecosystem, including AL development for Business Central. Lately, 
              I’ve been customizing a CAD kernel for a SaaS platform built for aerospace plating.
            </p>
          </div>

          <div className="about-section">
            <p className="about-info">
              <span className="line-break">{'>'}</span> In my free time I'm a vintage
              tech fan, motorcycle lover, Warhammer 40K nerd and a bad DM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
