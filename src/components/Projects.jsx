import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../data/skills.js'
import ProjectCard from './ProjectCard.jsx';
const {projectsData} = data;

const Projects = () => {
  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrolled(scrollRef.current.scrollLeft > 0);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="max-w-7xl mx-auto z-10 relative">
       <h2 className="text-5xl font-bold mb-16 text-center pb-2">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="relative flex items-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`flex-shrink-0 bg-purple-500/30 hover:bg-purple-500/50 backdrop-blur-sm p-4 rounded-full transition-all hover:scale-110 ${
              isScrolled ? 'opacity-100' : 'opacity-40'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projectsData.map((project, idx) => (
              <div key={idx} className="snap-start flex-shrink-0 w-[calc(50%-12px)] h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`flex-shrink-0 bg-purple-500/30 hover:bg-purple-500/50 backdrop-blur-sm p-4 rounded-full transition-all hover:scale-110 ${
              isScrolled ? 'opacity-100' : 'opacity-40'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects