
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ChevronRight, Settings, HelpCircle, Info } from "lucide-react";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-purple-100/95 backdrop-blur-sm z-50 shadow-lg",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Profile section */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-5 text-white rounded-br-3xl">
          <div className="flex items-center space-x-4 mb-3">
            <Avatar className="w-16 h-16 border-2 border-white">
              <AvatarImage src="/lovable-uploads/e5b843f7-bfc6-4180-9ebf-29a5e0351de4.png" alt="User" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Hello</h2>
              <p className="text-lg">Abhinav</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-yellow-300 text-lg">🏆</span>
            <span className="text-sm">75+ Badges</span>
          </div>
          
          {/* Progress bar */}
          <div className="mt-3 mb-1">
            <div className="flex justify-between text-xs mb-1">
              <span>XP Points</span>
              <span>455/500</span>
            </div>
            <div className="w-full bg-purple-400/40 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Quick access */}
        <div className="p-4">
          <h3 className="text-gray-700 font-medium mb-3">Quick access</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-200/80 p-3 rounded-xl flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-2 mb-1">
                <span>👤</span>
              </div>
              <span className="text-xs text-gray-600">Profile</span>
            </div>
            <div className="bg-gray-200/80 p-3 rounded-xl flex flex-col items-center">
              <div className="bg-yellow-100 rounded-full p-2 mb-1">
                <span>📂</span>
              </div>
              <span className="text-xs text-gray-600">Projects</span>
            </div>
            <div className="bg-gray-200/80 p-3 rounded-xl flex flex-col items-center">
              <div className="bg-red-100 rounded-full p-2 mb-1">
                <span>🔖</span>
              </div>
              <span className="text-xs text-gray-600">Bookmarks</span>
            </div>
            <div className="bg-gray-200/80 p-3 rounded-xl flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-2 mb-1">
                <span>📰</span>
              </div>
              <span className="text-xs text-gray-600">News</span>
            </div>
          </div>
          
          {/* Study status */}
          <div className="bg-gray-200/80 p-3 rounded-xl mt-3">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium text-gray-700">1hr 24min</h4>
              <span className="text-orange-500 font-medium">67%</span>
            </div>
            <div className="text-xs text-gray-500 mb-2">studying</div>
            
            <div className="flex space-x-2 mb-2">
              <div className="bg-red-400 w-3 h-3 rounded-full"></div>
              <div className="text-xs text-gray-600">Set your status</div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-purple-400 w-3 h-3 rounded-full"></div>
              <div className="text-xs text-gray-600">Custom status</div>
            </div>
          </div>
        </div>
        
        {/* Bottom tools section */}
        <div className="p-4 mt-2">
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-2 rounded-full mb-1">
                <span>🎮</span>
              </div>
              <span className="text-xs text-gray-600">Games</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-2 rounded-full mb-1">
                <span>🎯</span>
              </div>
              <span className="text-xs text-gray-600">Goals</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-2 rounded-full mb-1">
                <span>🔍</span>
              </div>
              <span className="text-xs text-gray-600">Search</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-2 rounded-full mb-1">
                <span>➕</span>
              </div>
              <span className="text-xs text-gray-600">Add</span>
            </div>
          </div>
          
          {/* Settings menu items */}
          <div className="space-y-2 mt-4">
            <button className="w-full bg-gray-200/80 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Settings</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
            
            <button className="w-full bg-gray-200/80 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Help centre</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
            
            <button className="w-full bg-gray-200/80 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Info className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">App info</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
