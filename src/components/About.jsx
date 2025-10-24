import React from 'react';
import data from '../data/skills.js';
import SkillCard from './SkillCard.jsx';
import { Briefcase } from 'lucide-react';

const { skillsData } = data;

const About = () => (
  <section id="about" className="relative py-32 px-6">
    <div className="max-w-6xl mx-auto z-10 relative">
      <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-purple-500/20 mb-16">
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Fresh graduate with a passion for solving complex problems at the intersection of software engineering and machine learning. 
          Fluent in English, Bengali, Hindi, and Spanish.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          I thrive on building systems that are not just functional, but elegant and impactful. Whether it's architecting distributed 
          systems or training neural networks, I bring curiosity, rigor, and a drive to create technology that matters.
        </p>
      </div>

      <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-yellow-200 bg-clip-text text-transparent">
        Skills & Expertise
      </h3>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {skillsData.map((card) => (
          <SkillCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            skills={card.skills}
            gradientFrom={card.gradientFrom}
            gradientTo={card.gradientTo}
            borderColor={card.borderColor}
          />
        ))}
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Professional Experience
        </h3>
        
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-white mb-1">Software Development Intern</h4>
              <p className="text-lg text-blue-300 font-semibold">TCG Digital</p>
              <p className="text-gray-400">May 2025 – July 2025 • Kolkata, India</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-300 mt-6">
            <li className="flex gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Developed real-time football streaming app for DFB (German Football Association) with multilingual LLM-driven translation (Hindi, Bengali, Malayalam) serving 10,000+ concurrent users.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Built scalable backend APIs using TypeScript, Express.js, Sequelize with Winston logging and Kafka integration, achieving 99.9% uptime and 60% faster deployment via Docker.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Integrated multiple streaming protocols (HLS, SRT, RTMP, RTSP) and developed responsive React.js frontend with Redux, improving user engagement by 40%.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
