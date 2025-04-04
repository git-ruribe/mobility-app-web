import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import SupporterProgressView from '@/components/supporter/SupporterProgressView';
import useAppStore from '@/store/appStore';

export default function SupporterProgressPage() {
  return (
    <Layout>
      <Header />
      <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">User Progress</h1>
      <SupporterProgressView />
    </Layout>
  );
}
