import React from 'react';
import ClientCategoryPage from '@/components/exercises/ClientCategoryPage';
import { SAMPLE_EXERCISES } from '@/lib/constants';

// Generate static params for build time
export function generateStaticParams() {
  return [];
}

// Set dynamic options
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default function ExerciseCategoryPage({ params }: { params: { category: string } }) {
  const categoryExercises = SAMPLE_EXERCISES[params.category as keyof typeof SAMPLE_EXERCISES] || [];
  
  return <ClientCategoryPage category={params.category} exercises={categoryExercises} />;
}
