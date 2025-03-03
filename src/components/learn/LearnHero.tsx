
import React from 'react';

const LearnHero: React.FC = () => {
  return (
    <div className="relative rounded-xl overflow-hidden mb-6 h-44">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 opacity-90"></div>
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="relative z-10 p-4 flex flex-col h-full justify-between">
        <div className="text-white text-xl font-bold">Education</div>
        
        <div className="space-y-2">
          <div className="text-white/90 text-xs">
            What is the SI unit of temperature
          </div>
          <div className="text-white/90 text-xs">
            Why is thermodynamics macroscopic
          </div>
          <div className="text-white text-xl font-bold mt-2">
            We've got you covered
          </div>
        </div>
        
        <div className="bg-purple-400 rounded-full flex items-center p-2 mt-2 backdrop-blur-sm bg-opacity-70">
          <input 
            type="text" 
            placeholder="Search for topics? Type here"
            className="bg-transparent text-white placeholder-white/70 outline-none w-full text-sm px-2"
          />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LearnHero;
