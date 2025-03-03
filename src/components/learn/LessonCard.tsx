
import React from 'react';
import { Lesson } from '@/types/learn';

interface LessonCardProps {
  lesson: Lesson;
  onPlay: (lesson: Lesson) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onPlay }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{lesson.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{lesson.description}</p>
        </div>
        {lesson.progress !== undefined && (
          <div className="text-sm font-medium text-purple-600">
            {lesson.progress}%
          </div>
        )}
      </div>
      
      {lesson.progress !== undefined && (
        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-purple-500 h-1.5 rounded-full"
            style={{ width: `${lesson.progress}%` }}
          ></div>
        </div>
      )}
      
      <button 
        onClick={() => onPlay(lesson)}
        className="mt-3 bg-purple-500 text-white py-1 px-4 rounded-full text-sm hover:bg-purple-600"
      >
        Play Video
      </button>
    </div>
  );
};

export default LessonCard;
