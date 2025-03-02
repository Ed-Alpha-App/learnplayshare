
import React from 'react';
import { cn } from "@/lib/utils";
import Layout from '@/components/Layout';
import DashboardCards from '@/components/DashboardCards';
import ScheduleTimeline from '@/components/ScheduleTimeline';

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="mb-6 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-purple-dark opacity-80 z-10"></div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
            alt="Technology" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 p-6 text-white">
          <h1 className="text-2xl font-bold mb-1 animate-fade-in">
            The Ultimate Student App
          </h1>
          <p className="text-white/80 text-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Learn, Play, Share - All in one place
          </p>
        </div>
      </div>
      
      {/* Subject Tabs */}
      <div className="flex space-x-3 mb-6 overflow-x-auto pb-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {['Chemistry', 'Mathematics', 'Feed', 'English'].map((subject, index) => (
          <button 
            key={index}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
              index === 0 ? "bg-purple-medium text-white" : "bg-white text-gray-700 border border-gray-200"
            )}
          >
            {index < 2 && (
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle bg-current opacity-70" />
            )}
            {subject}
          </button>
        ))}
      </div>
      
      {/* Schedule Section */}
      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg text-gray-800">Your Schedule</h2>
          <button className="text-purple-medium text-sm font-medium">See all</button>
        </div>
        
        <div className="mb-3 flex items-center space-x-2">
          <span className="bg-purple-100 text-purple-dark text-xs px-2 py-0.5 rounded-full">
            2 Classes
          </span>
          <span className="bg-orange-100 text-orange-500 text-xs px-2 py-0.5 rounded-full">
            1 Test
          </span>
          <span className="bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded-full">
            3 Revise
          </span>
        </div>
        
        <ScheduleTimeline />
      </div>
      
      {/* Module Cards */}
      <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="font-semibold text-lg text-gray-800 mb-3">Where shall we start</h2>
        <DashboardCards />
      </div>
    </Layout>
  );
};

export default Index;
