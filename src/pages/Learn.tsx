
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Lesson } from '@/types/learn';
import { fetchLessons } from '@/services/lessonService';
import LearnHero from '@/components/learn/LearnHero';
import TopicPills from '@/components/learn/TopicPills';
import SubjectList from '@/components/learn/SubjectList';
import LessonList from '@/components/learn/LessonList';
import VideoPlayer from '@/components/learn/VideoPlayer';

const Learn: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const handleSubjectClick = async (subject: string) => {
    setSelectedSubject(subject);
    setLoading(true);
    try {
      const fetchedLessons = await fetchLessons(subject);
      setLessons(fetchedLessons);
    } finally {
      setLoading(false);
    }
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
            <LearnHero />
            <TopicPills />
            <SubjectList onSubjectClick={handleSubjectClick} />
          </>
        ) : (
          <LessonList
            selectedSubject={selectedSubject}
            lessons={lessons}
            loading={loading}
            onBack={handleBack}
            onPlay={playVideo}
          />
        )}
      </div>

      {currentLesson && (
        <VideoPlayer lesson={currentLesson} onClose={closeVideo} />
      )}
    </Layout>
  );
};

export default Learn;
