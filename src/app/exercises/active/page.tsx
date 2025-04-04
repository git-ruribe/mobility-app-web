"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import ActiveExercise from '@/components/exercises/ActiveExercise';
import useAppStore from '@/store/appStore';

export default function ActiveExercisePage() {
  const currentExercise = useAppStore((state) => state.currentExercise);
  
  return (
    <Layout>
      <Header />
      <ActiveExercise />
    </Layout>
  );
}
