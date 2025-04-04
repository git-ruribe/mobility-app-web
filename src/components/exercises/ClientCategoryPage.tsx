"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Card, Button } from '@/components/ui/base-components';

interface ClientCategoryPageProps {
  category: string;
  exercises: any[];
}

export default function ClientCategoryPage({ category, exercises }: ClientCategoryPageProps) {
  // Get category name from ID
  const getCategoryName = (categoryId: string) => {
    switch(categoryId) {
      case 'balance': return 'Balance Exercises';
      case 'strength': return 'Strength Training';
      case 'flexibility': return 'Flexibility Exercises';
      case 'walking': return 'Walking Programs';
      case 'seated': return 'Seated Exercises';
      default: return 'Exercises';
    }
  };
  
  // Get category color from ID
  const getCategoryColor = (categoryId: string) => {
    switch(categoryId) {
      case 'balance': return '#2E86C1'; // Primary Blue
      case 'strength': return '#27AE60'; // Primary Green
      case 'flexibility': return '#AED6F1'; // Light Blue
      case 'walking': return '#A9DFBF'; // Light Green
      case 'seated': return '#FAE5D3'; // Warm Beige
      default: return '#2E86C1';
    }
  };
  
  return (
    <Layout>
      <Header />
      
      <div className="mb-6">
        <a 
          href="/exercises"
          className="text-[#2E86C1] text-lg mb-2 inline-block"
        >
          ← Back to Categories
        </a>
        <h1 
          className="text-3xl font-bold mb-2"
          style={{ color: getCategoryColor(category) }}
        >
          {getCategoryName(category)}
        </h1>
      </div>
      
      {exercises.length === 0 ? (
        <Card>
          <p className="text-xl text-[#566573]">No exercises found in this category.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {exercises.map((exercise) => (
            <a 
              key={exercise.id}
              href={`/exercises/detail/${exercise.id}`}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0 md:mr-4">
                    <h2 className="text-2xl font-bold text-[#2C3E50]">{exercise.name}</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-gray-200 px-3 py-1 rounded-full text-[#566573]">
                        {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                      </span>
                      <span className="bg-gray-200 px-3 py-1 rounded-full text-[#566573]">
                        {exercise.duration} minutes
                      </span>
                      <span className="bg-gray-200 px-3 py-1 rounded-full text-[#566573]">
                        {exercise.equipment}
                      </span>
                    </div>
                  </div>
                  <Button variant="primary">View Details</Button>
                </div>
              </Card>
            </a>
          ))}
        </div>
      )}
    </Layout>
  );
}
