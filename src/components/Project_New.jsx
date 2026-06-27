import React, {
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./Project_New.css";

import bgRemoverImg from "../assets/bgremover.jpg";
import weatherImg from "../assets/weather.png";
import currencyConverterImg from "../assets/currency-converter.png";
import scannerGeneratorImg from "../assets/scanner.jpg";
import speedotypeImg from "../assets/speedotype.jpg";
import feedbackIMG from "../assets/feedback.jpg";
import EduRightsImg from "../assets/edurights.png";
import depressionImg from "../assets/depression.png";

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
    title: "Edurights",
    image: EduRightsImg,
    liveLink: "https://edurights.vercel.app/",
    codeLink: "https://github.com/your/EduRights",
    tech: ["React", "VITE","Node.js", "Express", "MongoDB","jwt"],
    desc: "Interactive MERN platform that teaches children's legal rights through engaging storybooks, quizzes, and gamified learning experiences",
  },
  {
  title: "Depression Severity Analyzer",
  image: depressionImg,
  liveLink: "https://your-live-link.com",
  codeLink: "https://github.com/your/depression-severity-analyzer",
  tech: ["React", "Flask", "RoBERTa", "Python", "Machine Learning"],
  desc: "AI-powered mental health assessment platform that analyzes user text to predict depression severity using a fine-tuned RoBERTa model and provides personalized insights.",
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
    title: "Diabetes Prediction System",
    image: diabetesImg,
    liveLink: "https://sanika2105.pythonanywhere.com/",
    codeLink: "https://github.com/Sanikaa205/Diabetes-Prediction-System",
    tech: ["Python", "Flask", "Machine Learning", "HTML", "CSS"],
    desc: "ML-powered web app predicting diabetes risk using health inputs with trained model integrated via Flask backend.",

  },

];

function Project_New() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = projectList.length;
  const autoSlideRef = useRef(null);
  const AUTO_SLIDE_DELAY = 5000;

  const getIndex = useCallback(
    (offset) => ((activeIndex + offset) % total + total) % total,
    [activeIndex, total]
  );

  const navigate = useCallback(
    (dir) => {
      setDirection(dir);
      setActiveIndex((prev) => ((prev + dir) % total + total) % total);
    },
    [total]
  );

  useEffect(() => {
  const timer = setTimeout(() => {
    navigate(1);
  }, 5000);

  return () => clearTimeout(timer);
}, [activeIndex, navigate]);

  

const startAutoSlide = useCallback(() => {
  clearInterval(autoSlideRef.current);

  autoSlideRef.current = setInterval(() => {
    navigate(1);
  }, AUTO_SLIDE_DELAY);
}, [navigate]);

const stopAutoSlide = useCallback(() => {
  clearInterval(autoSlideRef.current);
}, []);

  const goToIndex = useCallback(
    (idx) => {
      setDirection(idx > activeIndex ? 1 : -1);
      setActiveIndex(idx);
    },
    [activeIndex]
  );

  const prevProject = projectList[getIndex(-1)];
  const activeProject = projectList[activeIndex];
  const nextProject = projectList[getIndex(1)];

  const padNumber = (n) => String(n).padStart(2, "0");

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 120 : -120, scale: 0.92 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -120 : 120, scale: 0.92 }),
  };

  return (
    <section className="pn-section" id="projects">
      {/* ── Header ── */}
      <div className="pn-header">
        <span className="pn-label">Portfolio Showcase</span>
        <h2 className="pn-title">Selected Projects</h2>
        <p className="pn-subtitle">
          A curated collection of projects demonstrating my experience in
          Full Stack Development, AI and modern web technologies.
        </p>
      </div>

      {/* ── Carousel ── */}
      <div className="pn-carousel">
        {/* Left arrow */}
        <button
          className="pn-arrow pn-arrow--left"
          onClick={() => navigate(-1)}
          aria-label="Previous project"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Left preview */}
        <motion.div
          className="pn-side-card pn-side-card--left"
          key={`left-${getIndex(-1)}`}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          onClick={() => navigate(-1)}
        >
          <div className="pn-mini-browser">
            <div className="pn-browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="pn-mini-screen">
              <img src={prevProject.image} alt={prevProject.title} />
            </div>
          </div>
          <h4 className="pn-side-title">{prevProject.title}</h4>
        </motion.div>

        {/* Center featured card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            className="pn-featured"
            key={`featured-${activeIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Browser mockup */}
            <div className="pn-browser">
              <div className="pn-browser-bar">
                <div className="pn-browser-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="pn-browser-url">
                  {activeProject.liveLink.replace(/^https?:\/\//, "")}
                </div>
              </div>
              <div className="pn-browser-viewport">
                <img src={activeProject.image} alt={activeProject.title} />
              </div>
            </div>

            {/* Project info */}
            <div className="pn-info">
              <span className="pn-badge">
                <Star size={14} /> Featured Project
              </span>

              <h3 className="pn-project-name">{activeProject.title}</h3>

              <p className="pn-desc">{activeProject.desc}</p>

              <div className="pn-tech-list">
                {activeProject.tech.map((t, i) => (
                  <span className="pn-pill" key={i}>{t}</span>
                ))}
              </div>

              <div className="pn-buttons">
                <a
                  className="pn-btn pn-btn--live"
                  href={activeProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  className="pn-btn pn-btn--github"
                  href={activeProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={16} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right preview */}
        <motion.div
          className="pn-side-card pn-side-card--right"
          key={`right-${getIndex(1)}`}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          onClick={() => navigate(1)}
        >
          <div className="pn-mini-browser">
            <div className="pn-browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="pn-mini-screen">
              <img src={nextProject.image} alt={nextProject.title} />
            </div>
          </div>
          <h4 className="pn-side-title">{nextProject.title}</h4>
        </motion.div>

        {/* Right arrow */}
        <button
          className="pn-arrow pn-arrow--right"
          onClick={() => navigate(1)}
          aria-label="Next project"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* ── Footer nav ── */}
      <div className="pn-footer">
        <button className="pn-footer-nav" onClick={() => navigate(-1)}>
          <ChevronLeft size={16} /> Previous
        </button>

        <div className="pn-pagination">
          {projectList.map((_, i) => (
            <button
              key={i}
              className={`pn-dot ${i === activeIndex ? "pn-dot--active" : ""}`}
              onClick={() => goToIndex(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button className="pn-footer-nav" onClick={() => navigate(1)}>
          Next <ChevronRight size={16} />
        </button>
      </div>

      {/* ── Counter ── */}
      <div className="pn-counter">
        <span className="pn-counter-current">{padNumber(activeIndex + 1)}</span>
        <span className="pn-counter-sep">/</span>
        <span className="pn-counter-total">{padNumber(total)}</span>
      </div>
    </section>
  );
}

export default Project_New;
