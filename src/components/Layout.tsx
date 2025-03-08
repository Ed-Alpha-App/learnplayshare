
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import ProfileSidebar from './ProfileSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const isAuthPage = location.pathname === '/auth';
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  if (isAuthPage) {
    return <>{children}</>;
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ProfileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header toggleSidebar={toggleSidebar} />
      
      <main className="flex-1 px-4 pt-4 pb-20 overflow-auto">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Layout;
