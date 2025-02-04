import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import ViewSkills from "./components/ViewSkills"; // Import Portfolio

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Home />
            <About />
            <Skills />  {/* This now has the redirect button */}
            <Project />
            <Experience />
            <Blog />
            <Footer />
          </main>
        } />
        <Route path="/ViewSkills" element={<ViewSkills />} />
      </Routes>
    </Router>
  );
}
