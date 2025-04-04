import React from 'react';
import { Card, ProgressBar, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';

const DailyProgress: React.FC = () => {
  const user = useAppStore((state) => state.user);
  const isSupporter = useAppStore((state) => state.isSupporter);
  const supporter = useAppStore((state) => state.supporter);
  
  const progress = isSupporter 
    ? supporter?.supporting.progress 
    : user?.progress;
  
  const completedExercises = isSupporter 
    ? supporter?.supporting.completedExercises 
    : user?.completedExercises;
  
  const totalExercises = isSupporter 
    ? supporter?.supporting.totalExercises 
    : user?.totalExercises;
  
  const lastActivity = isSupporter 
    ? supporter?.supporting.lastActivity 
    : null;
  
  return (
    <Card title={isSupporter ? "Susan's Progress Today" : "Daily Progress"} className="mb-6">
      <ProgressBar progress={progress || 0} />
      
      <p className="text-xl text-[#2C3E50] mt-4">
        {completedExercises} of {totalExercises} exercises completed today
      </p>
      
      {isSupporter && lastActivity && (
        <p className="text-lg text-[#566573] mt-2">
          Last activity: {lastActivity}
        </p>
      )}
    </Card>
  );
};

export default DailyProgress;
