import React from 'react';
import { Rocket, ChevronDown } from 'lucide-react';
import SocialLinks from './SocialLinks.jsx';

const Home = ({ scrollToSection = () => {} }) => (
  <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
    <div className="max-w-4xl text-center z-10">
      {/* Badge */}
      <div className="mb-6 inline-block">
        <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
          <span className="text-purple-300 text-sm">
            Software Engineer | Full-Stack & ML
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl md:text-7xl font-bold mb-6 pb-2">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Subhayan Roy Chowdhury
        </span>
      </h1>

      {/* Subtitle / Description */}
      <p className="text-lg md:text-xl text-gray-300 mb-8 pb-1">
        Full-stack developer and machine learning engineer. Experienced in building scalable web apps, real-time systems, and deploying ML solutions. Published researcher in ML and Generative AI enthusiast.
      </p>

{/* CTA Buttons */}
      <div className="flex gap-4 justify-center flex-wrap">
        <button 
          onClick={() => scrollToSection('projects')}
          className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
        >
          View Projects
          <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <a 
          href="/resume.pdf"
          download="Subhayan_Roy_Chowdhury_Resume.pdf"
          className="group px-8 py-4 bg-purple-500/20 border border-purple-400/50 rounded-full font-semibold hover:bg-purple-500/30 hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/30 transition-all flex items-center gap-2"
        >
          Download Resume
          <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
        >
          Get in Touch
        </button>
      </div>

      {/* Social Links */}
      <div className="mt-12">
        <SocialLinks />
      </div>
    </div>

    {/* Scroll Indicator */}
    <button 
      onClick={() => scrollToSection('about')}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      aria-label="Scroll to about section"
    >
      <ChevronDown className="w-8 h-8 text-purple-400" />
    </button>
  </section>
);

export default Home;
