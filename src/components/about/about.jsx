import React from "react";
import PIC from "../../assets/images/about-me-img.png";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Who am I?</h2>

      <div className="about-content">
        <img src={PIC} className="image-1" alt="Loren in ASCII" />

        <div className="about-info-container">
          <p className="about-info">
            <span className="line-break">>></span> I'm a full-stack developer who
            combines tech skills with UI/UX design. I'm based in SLC and have
            worked on web dev projects, ERPs, and finance applications.<br></br>
            <br></br>
            <span className="line-break">>></span> My front-end expertise
            includes HTML, CSS, JS, and React. I'm also skilled in backend and
            database programming with PHP, Node.js, MySQL, SQL Server MongoDB, and PostgreSQL. I also work extensively with the Microsoft Dynamics ecosystem and have experience programming in AL for BC.
            <br></br>
            <br></br>
            <span className="line-break">>></span> In my free time, I'm a
            vintage tech fan, motorcycle lover, Warhammer 40K nerd and a dungeon master for D&D.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
