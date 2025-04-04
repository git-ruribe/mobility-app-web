import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import SupporterMessaging from '@/components/supporter/SupporterMessaging';
import useAppStore from '@/store/appStore';

export default function SupporterMessagesPage() {
  return (
    <Layout>
      <Header />
      <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">Messages</h1>
      <SupporterMessaging />
    </Layout>
  );
}
