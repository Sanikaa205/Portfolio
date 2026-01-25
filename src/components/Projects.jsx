import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import bgRemoverImg from "../assets/bgremover.jpg";
import weatherImg from "../assets/weather.png";
import currencyConverterImg from "../assets/currency-converter.png";
import scannerGeneratorImg from "../assets/scanner.jpg";
import speedotypeImg from "../assets/speedotype.jpg";
import feedbackIMG from "../assets/feedback.jpg";
import fridgechefImg from "../assets/fridgechef.png";
import edurightsImg from "../assets/edurights.png";
import diabetesImg from "../assets/diabetes.png";
import FadeInSection from "./FadeInSection";

const projectList = [
  {
    title: "BG Remover Pro",
    image: bgRemoverImg,
    liveLink: "https://your-live-bgremover-link.com",
    codeLink: "https://github.com/your/bg-remover",
    tech: ["React", "Flask", "OpenCV", "rembg"],
    desc: "AI-powered web app to remove image/video backgrounds using U²Net with live webcam support.",
  },
  {
    title: "Weather App",
    image: weatherImg,
    liveLink: "https://mausamly.netlify.app/",
    codeLink: "https://github.com/Sanikaa205/Weather",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    desc: "Weather forecast app displaying real-time temperature, humidity, and more with elegant UI.",
  },
  {
    title: "Currency Converter",
    image: currencyConverterImg,
    liveLink: "https://sanikaa205.github.io/currency-converter/",
    codeLink: "https://github.com/Sanikaa205/currency-converter/tree/main",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Convert currencies across the globe with real-time rates and minimal UI.",
  },
  {
    title: "QR Code Scanner",
    image: scannerGeneratorImg,
    liveLink: "https://your-live-qr-link.com",
    codeLink: "https://github.com/your/qr-scanner",
    tech: ["JavaScript", "HTML5", "QR API"],
    desc: "Scan and generate QR codes instantly using your webcam or text input.",
  },
  {
    title: "SpeedoType",
    image: speedotypeImg,
    liveLink: "https://your-live-speedotype-link.com",
    codeLink: "https://github.com/your/speedotype",
    tech: ["React", "Firebase", "CSS"],
    desc: "Typing speed test app to improve accuracy, measure words per minute and compete.",
  },
  {
    title: "Feedback Form",
    image: feedbackIMG,
    liveLink: "https://your-live-feedback-link.com",
    codeLink: "https://github.com/your/feedback-form",
    tech: ["React", "Firebase"],
    desc: "Collect feedback securely and display in real-time using Firebase database.",
  },
  {
    title: "FridgeChef – Recipe Generator",
    image: fridgechefImg,
    liveLink: "http://fridge-chef-fsd.vercel.app",
    codeLink: "https://github.com/Sanikaa205/FridgeChef",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    desc: "Recipe generator website that suggests recipes based on ingredients with clean, easy-to-use interface.",
  },
  {
    title: "EduRights – Legal Awareness Platform",
    image: edurightsImg,
    liveLink: "https://edurights.vercel.app/",
    codeLink: "https://github.com/Sanikaa205/EduRights",
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
    desc: "MERN stack platform spreading awareness about children's rights through modules, quizzes, games with progress tracking.",
  },
  {
    title: "Diabetes Prediction System",
    image: diabetesImg,
    liveLink: "https://sanika2105.pythonanywhere.com/",
    codeLink: "https://github.com/Sanikaa205/Diabetes-Prediction-System",
    tech: ["Python", "Flask", "Machine Learning", "HTML", "CSS"],
    desc: "ML-powered web app predicting diabetes risk using health inputs with trained model integrated via Flask backend.",
  },
];

function Projects() {
  return (
    <FadeInSection>
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects.</h2>
      <p className="projects-subtitle">
        Following projects showcase my skills and experience through real-world examples
        of my work. Each project includes a short description, tech stack, and links.
      </p>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-icons">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FiEye />
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="tech-tags">
                {project.tech.map((tag, i) => (
                  <span className="tag" key={i}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </FadeInSection>
  );
}

export default Projects;
