"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import ProgressTracker from '@/components/progress/ProgressTracker';
import useAppStore from '@/store/appStore';

export default function ProgressPage() {
  return (
    <Layout>
      <Header />
      <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">Progress Tracking</h1>
      <ProgressTracker />
    </Layout>
  );
}
