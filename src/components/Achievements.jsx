import React from 'react'
import data from '../data/skills.js'
import AchievementCard from './AchievementCard.jsx';
import { Trophy } from 'lucide-react';
const achievementsData = data.achievementsData
const Achievements = () => {
  return (
    <section id="achievements" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent">
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-300 text-sm flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Recognition & Milestones
              </span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Milestones and recognitions that fuel my journey in technology and innovation
          </p>
        </div>


        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {achievementsData.map((achievement, idx) => (
            <AchievementCard key={idx} achievement={achievement} index={idx} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Achievements;
