import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from './components/Footer';
import ThemeToggle from "./components/ThemeToggle";


function App() {
  return (
    
    <Router>
      <Navbar />
      <ThemeToggle/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
