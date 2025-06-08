import React from "react";
import Landing from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="crt">
      <Nav />
      <Landing />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
