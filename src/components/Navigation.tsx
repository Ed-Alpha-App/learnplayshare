
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { HomeIcon, LearnIcon, SocialIcon, LibraryIcon, MenuIcon } from "@/assets/icons";

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/learn', label: 'Learn', icon: LearnIcon },
    { path: '/social', label: 'Social', icon: SocialIcon },
    { path: '/library', label: 'Library', icon: LibraryIcon },
    { path: '/menu', label: 'More', icon: MenuIcon },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white nav-shadow z-40">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={cn(
              "flex flex-col items-center py-1 px-4 rounded-lg transition-all",
              "text-gray-500 hover:text-purple-dark",
              location.pathname === item.path ? "text-purple-dark" : ""
            )}
          >
            <item.icon className={cn(
              "w-6 h-6 mb-1",
              location.pathname === item.path ? "text-purple-dark" : "text-gray-500"
            )} />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
