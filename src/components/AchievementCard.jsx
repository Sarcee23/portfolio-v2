import React from 'react'
import { Icon,Star } from 'lucide-react';
const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;
  
  return (
    <div 
      className={`group backdrop-blur-xl bg-white/5 rounded-2xl p-6 border ${achievement.accentColor} hover:border-opacity-60 transition-all hover:transform hover:scale-105 hover:shadow-2xl`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 bg-gradient-to-br ${achievement.gradient} rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
            {achievement.title}
          </h3>
          <p className="text-sm text-purple-300 font-medium">{achievement.organization}</p>
        </div>
        <span className="text-xs text-gray-400 font-mono bg-slate-900/50 px-3 py-1 rounded-full whitespace-nowrap">
          {achievement.date}
        </span>
      </div>
      
      <p className="text-gray-300 leading-relaxed">
        {achievement.description}
      </p>
      
      <div className="mt-4 pt-4 border-t border-purple-500/10">
        <div className="flex items-center gap-2">
          <div className={`h-1.5 flex-1 bg-gradient-to-r ${achievement.gradient} rounded-full opacity-50`}></div>
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default AchievementCard
