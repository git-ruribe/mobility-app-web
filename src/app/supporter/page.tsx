"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';
import { FaUser, FaCalendarAlt, FaComments, FaBell } from 'react-icons/fa';

export default function SupporterPage() {
  const supporter = useAppStore((state) => state.supporter);
  
  if (!supporter) {
    return (
      <Layout>
        <Header />
        <Card>
          <p className="text-xl text-[#566573]">Supporter information not found.</p>
        </Card>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Header />
      
      <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">Supporter Dashboard</h1>
      
      <Card className="mb-6">
        <div className="flex items-center">
          <div className="bg-[#AED6F1] rounded-full p-6 mr-6">
            <FaUser className="text-4xl text-[#2E86C1]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#2C3E50]">
              Supporting: {supporter.supporting.name}
            </h2>
            <p className="text-xl text-[#566573]">
              Last activity: {supporter.supporting.lastActivity}
            </p>
          </div>
        </div>
      </Card>
      
      <Card title="Today's Progress" className="mb-6">
        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-[#27AE60]" 
            style={{ width: `${supporter.supporting.progress}%` }}
          ></div>
        </div>
        
        <p className="text-xl text-[#2C3E50]">
          {supporter.supporting.completedExercises} of {supporter.supporting.totalExercises} exercises completed today
        </p>
        
        <div className="mt-6 flex items-center">
          <div className="bg-[#A9DFBF] p-3 rounded-full mr-4">
            <FaCalendarAlt className="text-2xl text-[#27AE60]" />
          </div>
          <div>
            <p className="text-lg text-[#566573]">Current Streak</p>
            <p className="text-2xl font-bold text-[#2C3E50]">{supporter.supporting.streak} days</p>
          </div>
        </div>
      </Card>
      
      <Card title="Upcoming Exercise" className="mb-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#2C3E50]">
            {supporter.supporting.nextExercise.name} - {supporter.supporting.nextExercise.duration} min
          </h3>
          <p className="text-lg text-[#566573]">Scheduled for {supporter.supporting.nextExercise.time}</p>
        </div>
        
        <Button 
          variant="primary" 
          fullWidth
          onClick={() => alert('Reminder sent to Susan')}
        >
          SEND REMINDER
        </Button>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card title="Quick Actions">
          <div className="space-y-3">
            <Button 
              variant="outline" 
              fullWidth
              icon={FaComments}
              onClick={() => window.location.href = '/messages'}
            >
              SEND MESSAGE
            </Button>
            
            <Button 
              variant="outline" 
              fullWidth
              icon={FaBell}
              onClick={() => alert('Motivation notification sent!')}
            >
              SEND MOTIVATION
            </Button>
          </div>
        </Card>
        
        <Card title="Create Challenge">
          <div className="space-y-4">
            <div>
              <label className="block text-lg text-[#566573] mb-1">Challenge Type</label>
              <select className="w-full px-4 py-3 text-xl border-2 rounded-xl border-gray-300">
                <option>Complete 3 exercises in a day</option>
                <option>Maintain a 5-day streak</option>
                <option>Try a new exercise category</option>
              </select>
            </div>
            
            <Button 
              variant="secondary" 
              fullWidth
              onClick={() => alert('Challenge created and sent to Susan!')}
            >
              CREATE CHALLENGE
            </Button>
          </div>
        </Card>
      </div>
      
      <Card title="Recent Activity">
        <div className="space-y-4">
          <div className="border-l-4 border-[#2E86C1] pl-4">
            <p className="text-lg text-[#566573]">Today, 10:45 AM</p>
            <p className="text-xl text-[#2C3E50]">Completed Chair Exercises</p>
          </div>
          
          <div className="border-l-4 border-[#2E86C1] pl-4">
            <p className="text-lg text-[#566573]">Yesterday, 3:30 PM</p>
            <p className="text-xl text-[#2C3E50]">Completed Balance Training</p>
          </div>
          
          <div className="border-l-4 border-[#2E86C1] pl-4">
            <p className="text-lg text-[#566573]">Yesterday, 9:15 AM</p>
            <p className="text-xl text-[#2C3E50]">Completed Morning Stretches</p>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
