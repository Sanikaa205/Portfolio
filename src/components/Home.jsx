import React from "react";
import Intro from "./Intro";
import Project_New from "./Project_New";
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
      <Project_New />
      <Contact/>
    </div>
  );
}

export default Home;
