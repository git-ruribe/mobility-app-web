import React from 'react';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';

const NextExercise: React.FC = () => {
  const user = useAppStore((state) => state.user);
  const isSupporter = useAppStore((state) => state.isSupporter);
  const supporter = useAppStore((state) => state.supporter);
  const setCurrentExercise = useAppStore((state) => state.setCurrentExercise);
  
  const nextExercise = isSupporter 
    ? supporter?.supporting.nextExercise 
    : user?.nextExercise;
  
  const handleStartExercise = () => {
    // In a real app, we would fetch the exercise details
    // For now, we'll use the first balance exercise as a placeholder
    const exercises = useAppStore.getState().exercises;
    if (exercises.balance && exercises.balance.length > 0) {
      setCurrentExercise(exercises.balance[0]);
      // Navigate to exercise page
      window.location.href = '/exercises/active';
    }
  };
  
  const handleSendReminder = () => {
    // In a real app, we would send a notification to the user
    alert('Reminder sent to Susan');
  };
  
  return (
    <Card title={isSupporter ? "Upcoming Exercise" : "Next Exercise"} className="mb-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#2C3E50]">{nextExercise?.name} - {nextExercise?.duration} min</h3>
        <p className="text-lg text-[#566573]">Scheduled for {nextExercise?.time}</p>
      </div>
      
      {isSupporter ? (
        <Button 
          variant="primary" 
          fullWidth 
          onClick={handleSendReminder}
        >
          SEND REMINDER
        </Button>
      ) : (
        <Button 
          variant="secondary" 
          fullWidth 
          onClick={handleStartExercise}
        >
          START NOW
        </Button>
      )}
    </Card>
  );
};

export default NextExercise;
