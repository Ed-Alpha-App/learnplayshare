
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { BookOpen, Calculator, Globe, Beaker, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

interface SubjectTileProps {
  title: string;
  color: string;
  icon: React.ReactNode;
  chapters: number;
  onClick: () => void;
}

interface Lesson {
  id: number;
  title: string;
  description: string;
  video_url: string;
  subject: string;
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

const TopicButton: React.FC<{ title: string; icon?: React.ReactNode; highlighted?: boolean }> = ({ 
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

const LessonCard: React.FC<{ lesson: Lesson; onPlay: (lesson: Lesson) => void }> = ({ lesson, onPlay }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md mb-4">
      <h3 className="font-semibold text-gray-800">{lesson.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{lesson.description}</p>
      <button 
        onClick={() => onPlay(lesson)}
        className="mt-3 bg-purple-500 text-white py-1 px-4 rounded-full text-sm hover:bg-purple-600"
      >
        Play Video
      </button>
    </div>
  );
};

const VideoPlayer: React.FC<{ lesson: Lesson | null; onClose: () => void }> = ({ lesson, onClose }) => {
  if (!lesson) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-semibold text-lg">{lesson.title}</h2>
          <button onClick={onClose} className="text-gray-600">
            <ArrowLeft />
          </button>
        </div>
        
        <div className="aspect-video bg-black relative">
          {/* Video iframe would go here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <iframe 
              src={lesson.video_url} 
              className="w-full h-full" 
              title={lesson.title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-gray-700">{lesson.description}</p>
        </div>
      </div>
    </div>
  );
};

const Learn: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const fetchLessons = async (subject: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('subject', subject.toLowerCase());
      
      if (error) throw error;
      
      setLessons(data || []);
    } catch (error) {
      console.error('Error fetching lessons:', error);
      // If there's an error or no lessons found, show some dummy lessons
      setLessons([
        {
          id: 1,
          title: `${subject} Lesson 1`,
          description: 'Introduction to the basics',
          video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          subject: subject.toLowerCase()
        },
        {
          id: 2,
          title: `${subject} Lesson 2`,
          description: 'Advanced concepts and applications',
          video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          subject: subject.toLowerCase()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
    fetchLessons(subject);
  };

  const handleBack = () => {
    setSelectedSubject(null);
    setLessons([]);
  };

  const playVideo = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  const closeVideo = () => {
    setCurrentLesson(null);
  };

  return (
    <Layout>
      <div className="flex flex-col p-2 pb-20">
        {!selectedSubject ? (
          <>
            {/* Hero Banner */}
            <div className="relative rounded-xl overflow-hidden mb-6 h-44">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 opacity-90"></div>
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
              
              <div className="relative z-10 p-4 flex flex-col h-full justify-between">
                <div className="text-white text-xl font-bold">Education</div>
                
                <div className="space-y-2">
                  <div className="text-white/90 text-xs">
                    What is the SI unit of temperature
                  </div>
                  <div className="text-white/90 text-xs">
                    Why is thermodynamics macroscopic
                  </div>
                  <div className="text-white text-xl font-bold mt-2">
                    We've got you covered
                  </div>
                </div>
                
                <div className="bg-purple-400 rounded-full flex items-center p-2 mt-2 backdrop-blur-sm bg-opacity-70">
                  <input 
                    type="text" 
                    placeholder="Search for topics? Type here"
                    className="bg-transparent text-white placeholder-white/70 outline-none w-full text-sm px-2"
                  />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Topic Pills */}
            <div className="flex gap-2 overflow-x-auto py-2 mb-4">
              <TopicButton title="Trigonometry" />
              <TopicButton 
                title="Acids,bases" 
                highlighted={true}
                icon={<span className="inline-block w-2 h-2 rounded-full bg-orange-300"></span>}
              />
              <TopicButton title="Language" />
            </div>
            
            {/* Subjects Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg text-gray-800">Subjects</h2>
                <button className="text-purple-medium text-sm font-medium">See all</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <SubjectTile
                  title="Chemistry"
                  color="bg-orange-400"
                  icon={<Beaker size={24} className="text-white" />}
                  chapters={12}
                  onClick={() => handleSubjectClick('Chemistry')}
                />
                <SubjectTile
                  title="Maths"
                  color="bg-green-400"
                  icon={<Calculator size={24} className="text-white" />}
                  chapters={12}
                  onClick={() => handleSubjectClick('Maths')}
                />
                <SubjectTile
                  title="Social"
                  color="bg-yellow-400"
                  icon={<Globe size={24} className="text-white" />}
                  chapters={40}
                  onClick={() => handleSubjectClick('Social')}
                />
                <SubjectTile
                  title="English"
                  color="bg-gradient-to-br from-amber-700 to-amber-500"
                  icon={<BookOpen size={24} className="text-white" />}
                  chapters={40}
                  onClick={() => handleSubjectClick('English')}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={handleBack}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-xl font-bold text-gray-800">{selectedSubject}</h1>
            </div>
            
            {loading ? (
              <div className="flex justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : (
              <div className="space-y-2">
                {lessons.map((lesson) => (
                  <LessonCard 
                    key={lesson.id} 
                    lesson={lesson} 
                    onPlay={playVideo} 
                  />
                ))}
                {lessons.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No lessons found for this subject
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {currentLesson && (
        <VideoPlayer lesson={currentLesson} onClose={closeVideo} />
      )}
    </Layout>
  );
};

export default Learn;
