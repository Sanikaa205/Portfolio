import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import FadeInSection from "./FadeInSection"; // Ensure the path is correct

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import pythonLogo from "../assets/python.png";
import cLogo from "../assets/c.png";
import canvaLogo from "../assets/canva.png";
import VsLogo from "../assets/VsCode.png";
import GitHubLogo from "../assets/github.png";
import IntelliJLogo from "../assets/intellij.png";
import JavaLogo from "../assets/java.png";
import NodeLogo from "../assets/nodejs.png";
import ExpressLogo from "../assets/express.png";
import MongoLogo from "../assets/mongodb.png";
import SQLLogo from "../assets/sql.png";
import MySQLLogo from "../assets/mysql.png";
import cPlusPlusLogo from "../assets/c++.png";
import flaskLogo from "../assets/flask.jpg";
import mlLogo from "../assets/ml.png";
import nlpLogo from "../assets/nlp.jpg";




// Skills data with categories
const allSkills = [
  { name: "HTML", value: 80, img: htmlLogo, category: "Frontend" },
  { name: "CSS", value: 70, img: cssLogo, category: "Frontend" },
  { name: "JavaScript", value: 45, img: jsLogo, category: "Frontend" },
  { name: "React", value: 70, img: reactLogo, category: "Frontend" },
  { name: "Python", value: 40, img: pythonLogo, category: "Languages" },
  { name: "C", value: 60, img: cLogo, category: "Languages" },
  { name: "Canva", value: 70, img: canvaLogo, category: "Tools" },
  { name: "Vs Code", value: 70, img: VsLogo, category: "Tools" },
  { name: "GitHub", value: 60, img: GitHubLogo, category: "Tools" },
  { name: "IntelliJ", value: 60, img: IntelliJLogo, category: "Tools" },
  { name: "Java", value: 65, img: JavaLogo, category: "Languages" },
  { name: "Node.js", value: 40, img: NodeLogo, category: "Backend" },
  { name: "Express.js", value: 30, img: ExpressLogo, category: "Backend" },
  { name: "MongoDB", value: 30, img: MongoLogo, category: "Backend" },
  { name: "SQL", value: 60, img: SQLLogo, category: "Backend" },
  { name: "MySQL", value: 60, img: MySQLLogo, category: "Tools" },
  { name: "C++", value: 60, img: cPlusPlusLogo, category: "Languages" },
  { name: "Flask", value: 35, img: flaskLogo, category: "Backend" },
  { name: "Machine Learning", value: 30, img: mlLogo, category: "Backend" },
  { name: "NLP", value: 25, img: nlpLogo, category: "Backend" } 

];




function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const fillRefs = useRef([]);
  const percentRefs = useRef([]);

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    filteredSkills.forEach((skill, index) => {
      let current = 0;
      const target = skill.value;
      const speed = 20;

      const interval = setInterval(() => {
        current++;
        if (fillRefs.current[index]) {
          fillRefs.current[index].style.width = `${current}%`;
        }
        if (percentRefs.current[index]) {
          percentRefs.current[index].innerText = `${current}%`;
        }
        if (current >= target) clearInterval(interval);
      }, speed);

      return () => clearInterval(interval);
    });
  }, [activeCategory]);

  const categories = ["All", "Frontend", "Backend", "Languages", "Tools"];

  




  return (
    <FadeInSection>
    <div className="skills-section" id="skills">
      <h2 className="title">TechStack</h2>

              <p className="skills-intro">Over time, I’ve explored different tools and technologies by building, breaking, and learning along the way.
                Most of what I know has come from hands-on practice and trying things out on my own.
                I’m not an expert, but I enjoy the process of learning and improving one step at a time.
                Here’s a snapshot of what I’ve worked with so far — and I’m always adding more to the list.</p>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skill-card-container">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index} >
            <img src={skill.img} alt={skill.name} className="skill-logo" />
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                ref={(el) => (fillRefs.current[index] = el)}
              ></div>
            </div>
            <div
              className="skill-percent"
              ref={(el) => (percentRefs.current[index] = el)}
            >
              0%
            </div>
          </div>
        ))}
      </div>
    </div>
    </FadeInSection>
  );
}

export default Skills;
