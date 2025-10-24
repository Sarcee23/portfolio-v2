import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/30 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Subhayan Roy Chowdhury
        </div>
        
        <div className="hidden md:flex gap-8">
          {['home', 'about', 'projects', 'achievements','contact'].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-all hover:text-purple-400 ${activeSection === section ? 'text-purple-400' : ''}`}
            >
              {section}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-slate-950/90 border-b border-purple-500/20">
          {['home', 'about', 'projects','achievements', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 capitalize hover:bg-purple-500/10"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar
