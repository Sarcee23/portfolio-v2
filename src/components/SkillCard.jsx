import React from 'react';

const SkillCard = ({ icon: Icon, title, description, skills, gradientFrom, gradientTo, borderColor }) => (
  <div className={`backdrop-blur-xl bg-white/5 rounded-2xl p-8 border ${borderColor} hover:border-opacity-60 transition-all`}>
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>

    <p className="text-gray-300 mb-6">{description}</p>

    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span
          key={skill}
          className={`px-3 py-1 rounded-full text-sm border ${borderColor} bg-white/5`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;

