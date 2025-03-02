import React from 'react';
import Layout from '@/components/Layout';
import { BookOpen, Calculator, Globe, Beaker } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubjectTileProps {
  title: string;
  color: string;
  icon: React.ReactNode;
  chapters: number;
}

const SubjectTile: React.FC<SubjectTileProps> = ({ title, color, icon, chapters }) => {
  return (
    <div 
      className={cn(
        "rounded-xl p-4 h-28 relative shadow-md transition-transform",
        "hover:scale-105 active:scale-95",
        color
      )}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="font-semibold text-white text-lg">{title}</div>
          {icon}
        </div>
        
        <div className="text-white/90 text-xs font-medium mt-auto">
          {chapters} Chapters
        </div>
      </div>
    </div>
  );
};

const TopicButton: React.FC<{ title: string; icon?: React.ReactNode; highlighted?: boolean }> = ({ 
  title, 
  icon, 
  highlighted = false 
}) => {
  return (
    <button 
      className={cn(
        "py-2 px-4 rounded-full text-sm flex items-center gap-2 border transition-colors",
        highlighted 
          ? "bg-orange-500 text-white border-orange-600" 
          : "bg-white text-gray-700 border-gray-200"
      )}
    >
      {icon}
      {title}
    </button>
  );
};

const Learn: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col p-2 pb-20">
        {/* Hero Banner */}
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
        
        {/* Topic Pills */}
        <div className="flex gap-2 overflow-x-auto py-2 mb-4">
          <TopicButton title="Trigonometry" />
          <TopicButton 
            title="Acids,bases" 
            highlighted={true}
            icon={<span className="inline-block w-2 h-2 rounded-full bg-orange-300"></span>}
          />
          <TopicButton title="Language" />
        </div>
        
        {/* Subjects Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg text-gray-800">Subjects</h2>
            <button className="text-purple-medium text-sm font-medium">See all</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <SubjectTile
              title="Chemistry"
              color="bg-orange-400"
              icon={<Beaker size={24} className="text-white" />}
              chapters={12}
            />
            <SubjectTile
              title="Maths"
              color="bg-green-400"
              icon={<Calculator size={24} className="text-white" />}
              chapters={12}
            />
            <SubjectTile
              title="Social"
              color="bg-yellow-400"
              icon={<Globe size={24} className="text-white" />}
              chapters={40}
            />
            <SubjectTile
              title="English"
              color="bg-gradient-to-br from-amber-700 to-amber-500"
              icon={<BookOpen size={24} className="text-white" />}
              chapters={40}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Learn;
