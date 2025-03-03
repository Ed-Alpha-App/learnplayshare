
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Lesson } from '@/types/learn';

interface VideoPlayerProps {
  lesson: Lesson | null;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ lesson, onClose }) => {
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

export default VideoPlayer;
