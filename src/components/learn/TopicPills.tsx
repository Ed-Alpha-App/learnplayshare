
import React from 'react';
import TopicButton from './TopicButton';

const TopicPills: React.FC = () => {
  return (
    <div className="flex gap-2 overflow-x-auto py-2 mb-4">
      <TopicButton title="Trigonometry" />
      <TopicButton 
        title="Acids,bases" 
        highlighted={true}
        icon={<span className="inline-block w-2 h-2 rounded-full bg-orange-300"></span>}
      />
      <TopicButton title="Language" />
    </div>
  );
};

export default TopicPills;
