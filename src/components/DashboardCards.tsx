
import React from 'react';
import { cn } from "@/lib/utils";
import { BeakerIcon, MathIcon } from "@/assets/icons";

interface SubjectCardProps {
  title: string;
  chapter: string;
  progress: number;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ 
  title, 
  chapter, 
  progress, 
  color,
  icon: Icon
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl p-4 transition-all duration-300 animate-scale-in",
        "flex flex-col justify-between h-36 relative overflow-hidden",
        "hover:scale-[1.02] active:scale-[0.98]",
        color
      )}
    >
      <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 opacity-30">
        <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <Icon className="text-white" />
        </div>
        <span className="text-xs text-white/80 font-medium mt-1">{progress}%</span>
      </div>
      
      <div>
        <h4 className="text-xs uppercase font-semibold tracking-wide text-white/70">Ch{chapter}</h4>
        <h3 className="text-white font-medium text-lg">{title}</h3>
      </div>
    </div>
  );
};

const DashboardCards: React.FC = () => {
  const subjects = [
    { 
      title: 'Trigonometry', 
      chapter: '5', 
      progress: 47, 
      color: 'bg-blue-500',
      icon: MathIcon
    },
    { 
      title: 'Organic Chemistry', 
      chapter: '11', 
      progress: 14, 
      color: 'bg-orange-500',
      icon: BeakerIcon
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {subjects.map((subject, index) => (
        <SubjectCard 
          key={index} 
          title={subject.title} 
          chapter={subject.chapter} 
          progress={subject.progress} 
          color={subject.color}
          icon={subject.icon}
        />
      ))}
    </div>
  );
};

export default DashboardCards;
