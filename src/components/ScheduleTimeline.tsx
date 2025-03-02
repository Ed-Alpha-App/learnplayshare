
import React from 'react';
import { cn } from "@/lib/utils";
import { ClockIcon, HandIcon, NotebookIcon } from "@/assets/icons";

interface ScheduleItemProps {
  time: string;
  type: 'class' | 'test' | 'revision' | 'break';
  active?: boolean;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, type, active = false }) => {
  const getIcon = () => {
    switch (type) {
      case 'class':
        return <NotebookIcon className="text-purple-dark" />;
      case 'test':
        return <HandIcon className="text-orange-500" />;
      case 'revision':
        return <ClockIcon className="text-blue-500" />;
      case 'break':
        return <ClockIcon className="text-gray-400" />;
      default:
        return <ClockIcon className="text-gray-400" />;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mb-1",
        "transition-all duration-300",
        active 
          ? "bg-purple-medium text-white shadow-md shadow-purple-medium/20" 
          : "bg-white text-gray-600 border border-gray-100"
      )}>
        {getIcon()}
      </div>
      <span className="text-xs font-medium text-gray-500">{time}</span>
    </div>
  );
};

const ScheduleTimeline: React.FC = () => {
  const scheduleItems = [
    { time: '4:30 PM', type: 'break' as const },
    { time: '5:45 PM', type: 'class' as const, active: true },
    { time: '5:45 PM', type: 'test' as const },
    { time: '5:45 PM', type: 'revision' as const },
  ];

  return (
    <div className="flex justify-between items-center">
      {scheduleItems.map((item, index) => (
        <React.Fragment key={index}>
          <ScheduleItem 
            time={item.time} 
            type={item.type} 
            active={item.active} 
          />
          
          {index < scheduleItems.length - 1 && (
            <div className="flex-1 h-0.5 bg-gray-200 relative">
              {item.active && (
                <div className="absolute inset-0 bg-purple-medium animate-pulse-light" />
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ScheduleTimeline;
