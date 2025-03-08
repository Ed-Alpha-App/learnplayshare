
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-50 bg-purple-medium px-4 py-3 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div 
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
            onClick={toggleSidebar}
          >
            <img 
              src="/lovable-uploads/e5b843f7-bfc6-4180-9ebf-29a5e0351de4.png" 
              alt="User" 
              className="w-7 h-7 rounded-full object-cover"
            />
          </div>
          <div className="flex items-center">
            <span className="text-lg mr-1.5">👋</span>
            <h1 className="font-medium">Hello Abhinav</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className={cn(
            "w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center",
            "transition-all hover:bg-green-400/30"
          )}>
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11H15M12 8V14M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
