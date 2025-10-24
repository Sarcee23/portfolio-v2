import React, { useState,  useRef } from 'react';
import { Mail, Github, Linkedin, Code, Brain, Rocket, ChevronDown, Menu, X, ExternalLink, Database, Cpu, TrendingUp } from 'lucide-react';
import CanvasBackground from './components/CanvasBackground.jsx';
import MouseGradient from './components/MouseGradient.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useMousePosition from './hooks/useMousePosition.js';
import Achievements from './components/Achievements.jsx';
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const canvasRef = useRef(null);
  const mousePosition = useMousePosition();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      <CanvasBackground canvasRef={canvasRef} />
      <MouseGradient mousePosition={mousePosition} />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Achievements/>
      <Contact />
      <Footer />
    </div>
  );}