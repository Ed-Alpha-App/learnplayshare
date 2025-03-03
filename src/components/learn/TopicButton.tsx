
import React from 'react';
import { cn } from '@/lib/utils';

interface TopicButtonProps {
  title: string; 
  icon?: React.ReactNode; 
  highlighted?: boolean;
}

const TopicButton: React.FC<TopicButtonProps> = ({ 
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

export default TopicButton;
