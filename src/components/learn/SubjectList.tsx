
import React from 'react';
import { BookOpen, Calculator, Globe, Beaker } from 'lucide-react';
import SubjectTile from './SubjectTile';

interface SubjectListProps {
  onSubjectClick: (subject: string) => void;
}

const SubjectList: React.FC<SubjectListProps> = ({ onSubjectClick }) => {
  return (
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
          onClick={() => onSubjectClick('Chemistry')}
        />
        <SubjectTile
          title="Maths"
          color="bg-green-400"
          icon={<Calculator size={24} className="text-white" />}
          chapters={12}
          onClick={() => onSubjectClick('Maths')}
        />
        <SubjectTile
          title="Social"
          color="bg-yellow-400"
          icon={<Globe size={24} className="text-white" />}
          chapters={40}
          onClick={() => onSubjectClick('Social')}
        />
        <SubjectTile
          title="English"
          color="bg-gradient-to-br from-amber-700 to-amber-500"
          icon={<BookOpen size={24} className="text-white" />}
          chapters={40}
          onClick={() => onSubjectClick('English')}
        />
      </div>
    </div>
  );
};

export default SubjectList;
