
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
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
