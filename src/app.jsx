import React from "react";
import Landing from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import About from "./components/about/about";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/contact";
import Mask from "./components/mask/Mask";

const App = () => {
  return (
    <div className="crt">
      <div className="scanline"></div>
      <div className="vignette"></div>
      <div className="color-convergence"></div>
      <Mask />
      <Nav />
      <Landing />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
