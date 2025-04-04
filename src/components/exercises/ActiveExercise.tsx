"use client";

import React, { useState, useEffect } from 'react';
import { Card, Button, IconButton } from '@/components/ui/base-components';
import { FaPlay, FaPause, FaRedo, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import useAppStore from '@/store/appStore';
import YouTubeVideo from '@/components/ui/YouTubeVideo';

const ActiveExercise: React.FC = () => {
  const currentExercise = useAppStore((state) => state.currentExercise);
  const completeExercise = useAppStore((state) => state.completeExercise);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timer, setTimer] = useState(10); // 10 seconds per step
  const [timerActive, setTimerActive] = useState(true);

  // Handle timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      // Auto-advance to next step when timer reaches 0
      if (currentExercise && currentStep < currentExercise.instructions.length - 1) {
        goToNextStep();
      }
    }
    
    return () => clearInterval(interval);
  }, [timer, timerActive, currentStep, currentExercise]);
  
  // Handle navigation between steps
  const goToNextStep = () => {
    if (currentExercise && currentStep < currentExercise.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
      setTimer(10); // Reset timer
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setTimer(10); // Reset timer
    }
  };
  
  // Handle exercise completion
  const handleCompleteExercise = () => {
    if (currentExercise) {
      completeExercise(currentExercise.id);
      window.location.href = '/';
    }
  };
  
  // Handle video controls
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setTimerActive(!timerActive);
  };
  
  const restartVideo = () => {
    // In a real app, this would restart the video
    setIsPlaying(true);
    setTimerActive(true);
    setTimer(10);
  };
  
  // If no exercise is selected, show error
  if (!currentExercise) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-[#2C3E50] mb-4">No exercise selected</h1>
        <Button 
          variant="primary" 
          onClick={() => window.location.href = '/exercises'}
        >
          GO TO EXERCISES
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <Button 
          variant="ghost" 
          onClick={() => window.location.href = `/exercises/detail/${currentExercise.id}`}
          icon={FaArrowLeft}
        >
          Back
        </Button>
        <h1 className="text-2xl font-bold text-[#2C3E50] ml-2">{currentExercise.name}</h1>
      </div>
      
      {/* Video player */}
      <Card>
        {currentExercise.videoId ? (
          <YouTubeVideo videoId={currentExercise.videoId} title={currentExercise.name} />
        ) : (
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mb-4">
            <p className="text-xl text-[#566573]">Video Placeholder</p>
          </div>
        )}
        
        <div className="flex justify-center space-x-4 mb-2 mt-4">
          <IconButton 
            icon={isPlaying ? FaPause : FaPlay} 
            variant="primary" 
            size="lg" 
            onClick={togglePlayPause} 
          />
          <IconButton 
            icon={FaRedo} 
            variant="outline" 
            size="lg" 
            onClick={restartVideo} 
          />
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-4">
          <div 
            className="h-full bg-[#2E86C1]" 
            style={{ width: `${(currentStep + 1) / currentExercise.instructions.length * 100}%` }}
          ></div>
        </div>
      </Card>
      
      {/* Current step */}
      <Card title={`Step ${currentStep + 1} of ${currentExercise.instructions.length}`}>
        <p className="text-xl text-[#2C3E50] mb-6">
          {currentExercise.instructions[currentStep]}
        </p>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
            icon={FaArrowLeft}
          >
            PREVIOUS
          </Button>
          <Button 
            variant="primary" 
            onClick={goToNextStep}
            disabled={currentStep === currentExercise.instructions.length - 1}
            icon={FaArrowRight}
          >
            NEXT
          </Button>
        </div>
      </Card>
      
      {/* Timer */}
      <Card title="Timer">
        <div className="text-center">
          <div className="text-5xl font-bold text-[#2C3E50] mb-2">{timer}s</div>
          <p className="text-xl text-[#566573]">Hold this position</p>
          <div className="mt-4">
            <Button 
              variant={timerActive ? "outline" : "primary"}
              onClick={() => setTimerActive(!timerActive)}
            >
              {timerActive ? "PAUSE TIMER" : "RESUME TIMER"}
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Help options */}
      <Card title="Need Help?">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Button variant="outline" fullWidth>MODIFY EXERCISE</Button>
          <Button variant="outline" fullWidth>CONTACT SUPPORTER</Button>
        </div>
      </Card>
      
      {/* Complete button */}
      <Button 
        variant="secondary" 
        fullWidth 
        size="xl"
        onClick={handleCompleteExercise}
      >
        COMPLETE EXERCISE
      </Button>
    </div>
  );
};

export default ActiveExercise;
