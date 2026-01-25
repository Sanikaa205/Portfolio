import React from "react";
import "./About.css";
import FadeInSection from "./FadeInSection";
import schoolLogo from "../assets/school.jpg";
import collegeLogo from "../assets/college.png";
import engineeringLogo from "../assets/engineering.png";
import resume from "../assets/Resume_1.pdf";


function About() {
  return (
    <FadeInSection>
      <section className="about-section" id="about">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <p>
            I’m a passionate learner currently pursuing IT engineering. I started
            my journey with simple websites and gradually moved into full-stack
            development.
            I love solving problems through code, building things from scratch,
            and exploring new technologies.
            I’ve worked on web projects using HTML, CSS, JavaScript, React, and
            backend tools like Node.js, MySQL.
            I believe in learning by doing, and I constantly seek ways to improve
            through practice.
          </p>
        </div>

        <h3 className="timeline-heading">Educational Journey</h3>
        <p className="timeline-subtitle">
          My academic background that has shaped my knowledge and skills through real-world learning and consistent exploration.
        </p>

        <div className="edu-container">
          {/* Engineering */}
          <div className="edu-card">
            <img src={engineeringLogo} alt="Engineering" className="edu-logo" />
            <div className="edu-details">
              <h4 className="edu-title">Vasantdada Patil Pratishthan’s College of Engineering</h4>
              <span className="edu-status current">Current</span>
              <p className="edu-sub">B.E. - Information Technology</p>
              <p className="edu-desc">
                Pursuing core IT subjects and web development. Active member of college tech events and open source club.
              </p>
              <div className="edu-footer">
                <span className="edu-meta">📅 2023 – 2027</span>
                <span className="edu-meta">📍 Mumbai, Maharashtra</span>
                <span className="edu-meta">📈 CGPA: 8.91</span>
              </div>
            </div>
          </div>

          {/* Junior College */}
          <div className="edu-card">
            <img src={collegeLogo} alt="College" className="edu-logo" />
            <div className="edu-details">
              <h4 className="edu-title">S.V Joshi Junior college of Science</h4>
              <span className="edu-status completed">Completed</span>
              <p className="edu-sub">HSC - Bifocal Science</p>
              <p className="edu-desc">
                Focused on Physics, Chemistry, and Mathematics. Participated in technical fairs and workshops.
              </p>
              <div className="edu-footer">
                <span className="edu-meta">📅 2021 – 2023</span>
                <span className="edu-meta">📍 Dombivli, Maharashtra</span>
                <span className="edu-meta">📈 Percentage: 71%</span>
              </div>
            </div>
          </div>

          {/* School */}
          <div className="edu-card">
            <img src={schoolLogo} alt="School" className="edu-logo" />
            <div className="edu-details">
              <h4 className="edu-title">Swami Vivekanand Vidyamandir</h4>
              <span className="edu-status completed">Completed</span>
              <p className="edu-sub">Matriculation</p>
              <p className="edu-desc">
                Distinction in Science and Mathematics. Represented school in cultural and sports events.
              </p>
              <div className="edu-footer">
                <span className="edu-meta">📅 2008 – 2020</span>
                <span className="edu-meta">📍 Dombivli, Maharashtra</span>
                <span className="edu-meta">📈 Percentage: 92%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-buttons">
          <a href={resume} target="_blank" rel="noopener noreferrer" className="about-btn">Download Resume</a>
          <a href="#contact" className="about-btn outline">Contact Me</a>
        </div>
      </section>
    </FadeInSection>
  );
}

export default About;
