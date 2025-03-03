
import React from 'react';
import { Lesson } from '@/types/learn';

interface LessonCardProps {
  lesson: Lesson;
  onPlay: (lesson: Lesson) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onPlay }) => {
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

export default LessonCard;
