import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import "./Home.css";


function Home() {
  return (
    <div className="home-container">
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}

export default Home;
