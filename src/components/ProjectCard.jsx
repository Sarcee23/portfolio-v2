import { ExternalLink } from 'lucide-react';
const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  return (
    <div className="group backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors cursor-pointer" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map(tech => (
          <span key={tech} className="px-3 py-1 bg-slate-800/50 rounded-full text-sm text-purple-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard
