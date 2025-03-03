
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import LessonCard from './LessonCard';
import { Lesson } from '@/types/learn';

interface LessonListProps {
  selectedSubject: string;
  lessons: Lesson[];
  loading: boolean;
  onBack: () => void;
  onPlay: (lesson: Lesson) => void;
}

const LessonList: React.FC<LessonListProps> = ({ 
  selectedSubject, 
  lessons, 
  loading, 
  onBack, 
  onPlay 
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={onBack}
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
              onPlay={onPlay} 
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
  );
};

export default LessonList;
