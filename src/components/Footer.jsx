import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sanika Shinde. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/Sanikaa205" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sanika-shinde-006b932b5/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
