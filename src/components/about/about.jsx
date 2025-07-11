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
              <span className="line-break">{'>'}</span> I'm a full- stack developer
              who specializes in the manufacturing industry. I'm based in SLC and
              have worked on web dev projects, ERPs, finance applications, and
              data warehouses.
            </p>
          </div>

          <div className="about-section">
            <p className="about-info">
              <span className="line-break">{'>'}</span> My front-end expertise
              includes HTML, CSS, JS, and React. I'm also skilled in backend and
              database programming with PHP, Node.js, MySQL, SQL Server, MongoDB,
              and PostgreSQL. I also work extensively with the Microsoft Dynamics
              ecosystem and have experience programming in AL for BC.
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
