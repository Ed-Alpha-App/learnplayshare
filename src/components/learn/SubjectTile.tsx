
import React from 'react';
import { cn } from '@/lib/utils';

interface SubjectTileProps {
  title: string;
  color: string;
  icon: React.ReactNode;
  chapters: number;
  onClick: () => void;
}

const SubjectTile: React.FC<SubjectTileProps> = ({ title, color, icon, chapters, onClick }) => {
  return (
    <div 
      className={cn(
        "rounded-xl p-4 h-28 relative shadow-md transition-transform cursor-pointer",
        "hover:scale-105 active:scale-95",
        color
      )}
      onClick={onClick}
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

export default SubjectTile;
