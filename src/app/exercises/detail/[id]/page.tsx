import React from 'react';
import ClientDetailPage from '@/components/exercises/ClientDetailPage';
import { SAMPLE_EXERCISES } from '@/lib/constants';

// Generate static params for build time
export function generateStaticParams() {
  return [];
}

// Set dynamic options
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default function ExerciseDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the exercise by ID from an API
  // For this demo, we'll find it in our sample data
  const findExercise = () => {
    for (const category in SAMPLE_EXERCISES) {
      const found = SAMPLE_EXERCISES[category as keyof typeof SAMPLE_EXERCISES].find(
        (ex) => ex.id === params.id
      );
      if (found) return found;
    }
    return null;
  };
  
  const exercise = findExercise();
  
  return <ClientDetailPage exercise={exercise} />;
}
