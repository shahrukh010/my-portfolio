import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import ViewSkills from "./components/ViewSkills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
// import Certifications from "./components/Certifications";
import ScrollToTop from "./components/ScrollToTop"; // Correct import path

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to the top when navigating */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/viewskills" element={<ViewSkills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/certifications" element={<Certifications />} /> */}
      </Routes>
    </Router>
  );
}
