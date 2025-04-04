"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Card, Button } from '@/components/ui/base-components';
import YouTubeVideo from '@/components/ui/YouTubeVideo';
import useAppStore from '@/store/appStore';

interface ClientDetailPageProps {
  exercise: any | null;
}

export default function ClientDetailPage({ exercise }: ClientDetailPageProps) {
  const setCurrentExercise = useAppStore((state) => state.setCurrentExercise);
  
  const handleStartExercise = () => {
    if (exercise) {
      setCurrentExercise(exercise);
      window.location.href = '/exercises/active';
    }
  };
  
  if (!exercise) {
    return (
      <Layout>
        <Header />
        <Card>
          <p className="text-xl text-[#566573]">Exercise not found.</p>
          <Button 
            variant="primary" 
            className="mt-4"
            onClick={() => window.location.href = '/exercises'}
          >
            Back to Exercises
          </Button>
        </Card>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Header />
      
      <div className="mb-6">
        <a 
          href="/exercises"
          className="text-[#2E86C1] text-lg mb-2 inline-block"
        >
          ← Back to Exercises
        </a>
      </div>
      
      <div className="space-y-6">
        <div className="bg-[#AED6F1] p-6 rounded-xl">
          <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">{exercise.name}</h1>
          <div className="flex flex-wrap gap-4 text-lg">
            <span className="bg-white px-3 py-1 rounded-full text-[#2C3E50]">
              {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
            </span>
            <span className="bg-white px-3 py-1 rounded-full text-[#2C3E50]">
              {exercise.duration} minutes
            </span>
          </div>
        </div>
        
        <Card title="Video Demonstration">
          {exercise.videoId ? (
            <YouTubeVideo videoId={exercise.videoId} title={exercise.name} />
          ) : (
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mb-4">
              <p className="text-xl text-[#566573]">Video Placeholder</p>
            </div>
          )}
          <p className="text-lg text-[#566573] mb-4">
            Equipment needed: {exercise.equipment}
          </p>
        </Card>
        
        <Card title="Instructions">
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            {exercise.instructions.map((instruction: string, index: number) => (
              <li key={index} className="text-xl text-[#2C3E50]">{instruction}</li>
            ))}
          </ol>
        </Card>
        
        <Card title="Modifications">
          <ul className="list-disc pl-6 space-y-3 mb-4">
            {exercise.modifications.map((modification: string, index: number) => (
              <li key={index} className="text-xl text-[#2C3E50]">{modification}</li>
            ))}
          </ul>
        </Card>
        
        <Button 
          variant="secondary" 
          fullWidth 
          size="xl"
          onClick={handleStartExercise}
        >
          START EXERCISE
        </Button>
      </div>
    </Layout>
  );
}
