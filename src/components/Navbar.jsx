import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logoImg from "../assets/logo.png"; 



function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Logo" className="logo-img" />
        Sanika Shinde
      </div>


      <ul className="nav-links">
        <li><Link to="intro" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Conatct me</Link></li>
      
      </ul>
    </nav>
  );
}

export default Navbar;
