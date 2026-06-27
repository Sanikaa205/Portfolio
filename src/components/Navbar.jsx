import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logoImg from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle"; // ✅ import

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logoImg} alt="Logo" className="logo-img" />
        Sanika Shinde
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li><Link to="intro" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Project</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact me</Link></li>
      </ul>

      {/* Right side actions */}
      <div className="nav-actions">
        <ThemeToggle /> {/* ✅ toggle button added here */}
      </div>
    </nav>
  );
}

export default Navbar;
