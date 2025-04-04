"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import DailyProgress from '@/components/progress/DailyProgress';
import NextExercise from '@/components/exercises/NextExercise';
import SupporterMessage from '@/components/supporter/SupporterMessage';
import ExerciseCategories from '@/components/exercises/ExerciseCategories';
import useAppStore from '@/store/appStore';

export default function HomePage() {
  const isSupporter = useAppStore((state) => state.isSupporter);
  
  return (
    <Layout>
      <Header />
      <DailyProgress />
      <NextExercise />
      {!isSupporter && <SupporterMessage />}
      <ExerciseCategories />
    </Layout>
  );
}
