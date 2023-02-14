import React from "react";

import "./landing.css";

const Landing = () => {
  return (
    <section id="home" className="home-section">
      <div className="intro">
        <h2>Hey there, this is <span className="blink">&#8628;</span></h2>
        <h1>LOREN BAKO &#123;</h1>
        <h1>&nbsp;&nbsp;FULL STACK ENGINEER</h1>
        <h1>&#125;</h1>
      </div>
      <p><span className="blink">&#8595;</span>&nbsp;SCROLL DOWN&nbsp;<span className="blink">&#8595;</span></p>
    </section>
  );
};

export default Landing;
