import React from 'react'
import { SiGithub,SiLinkedin,SiGmail } from 'react-icons/si';
const SocialLinks = () => (
  <div className="flex gap-6 justify-center">
    <a href="https://github.com/Sarcee23" className="hover:text-purple-400 transition-colors">
      <SiGithub className="w-6 h-6" />
    </a>
    <a href="https://www.linkedin.com/in/subhayan-roy-chowdhury-769167228/" className="hover:text-purple-400 transition-colors">
      <SiLinkedin className="w-6 h-6" />
    </a>
    <a href="mailto:subhayanroychowdhury04@gmail.com" className="hover:text-purple-400 transition-colors">
      <SiGmail className="w-6 h-6" />
    </a>
  </div>
);

export default SocialLinks
