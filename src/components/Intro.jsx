import React, { useEffect, useState } from "react";
import "./Intro.css";
import techImage from "../assets/tech.svg";

const rotatingWords = ["student", "frontend developer", "web designer", "learner"];

function Intro() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [pulse, setPulse] = useState(false);
  const [typedIam, setTypedIam] = useState("I am a");
  const [typedWord, setTypedWord] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [startRoles, setStartRoles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fullName = "I'm Sanika Shinde";
    if (showWelcome && nameIndex <= fullName.length) {
      const timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, nameIndex));
        setNameIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (nameIndex > fullName.length && !pulse) {
      setPulse(true);
      setStartRoles(true);
    }
  }, [nameIndex, showWelcome, pulse]);

  useEffect(() => {
    if (startRoles) {
      const currentWord = rotatingWords[wordIndex];
      if (charIndex <= currentWord.length) {
        const timeout = setTimeout(() => {
          setTypedWord(currentWord.slice(0, charIndex));
          setCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const delay = setTimeout(() => {
          setCharIndex(0);
          setTypedWord("");
          setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 1500);
        return () => clearTimeout(delay);
      }
    }
  }, [charIndex, startRoles, wordIndex]);

  return (
    <div className="intro-wrapper">
      {/* Floating yellow notes background */}
      <div className="background-notes">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="intro-content">
        <div className="intro-left">
          {showWelcome && (
            <h1 className="intro-welcome gradient-welcome">Welcome to my Portfolio</h1>
          )}

          {typedName && (
            <h2 className={`name-typewriter gradient-name ${pulse ? "pulse" : ""}`}>
              {typedName}
            </h2>
          )}

          {startRoles && (
            <p className="typewriter-rotating">
              {typedIam} <span>{typedWord}</span>
            </p>
          )}
        </div>

        <div className="intro-right">
          <img src={techImage} alt="Tech illustration" className="tech-img" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
