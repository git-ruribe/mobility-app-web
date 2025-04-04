"use client";

import React, { useState } from 'react';
import { Card, Button, ProgressBar } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';
import { FaCalendarAlt, FaChartLine, FaTrophy } from 'react-icons/fa';

const ProgressTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const streak = useAppStore((state) => state.streak);
  const completedExercises = useAppStore((state) => state.completedExercises);
  const totalExercises = useAppStore((state) => state.totalExercises);
  
  // Sample data for the activity calendar
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  // Generate calendar days
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Sample activity data (in a real app, this would come from a database)
  const activityDays = [1, 3, 4, 5, 8, 9, 10, 12, 15, 16, 19, 20, 21, 22, 25, 26, 27];
  
  // Sample weekly data
  const weeklyData = [
    { day: 'Mon', completed: 3, total: 3 },
    { day: 'Tue', completed: 2, total: 3 },
    { day: 'Wed', completed: 3, total: 3 },
    { day: 'Thu', completed: 1, total: 3 },
    { day: 'Fri', completed: 2, total: 3 },
    { day: 'Sat', completed: 0, total: 3 },
    { day: 'Sun', completed: 0, total: 3 },
  ];
  
  // Sample achievements
  const achievements = [
    {
      id: 1,
      title: '5-Day Streak',
      description: 'Completed exercises for 5 consecutive days',
      icon: '🏆',
      color: '#2E86C1',
      achieved: true,
    },
    {
      id: 2,
      title: 'Balance Master',
      description: 'Completed all beginner balance exercises',
      icon: '⭐',
      color: '#2E86C1',
      achieved: true,
    },
    {
      id: 3,
      title: 'Consistency Champion',
      description: 'Completed at least one exercise every day for a week',
      icon: '🌟',
      color: '#2E86C1',
      achieved: true,
    },
    {
      id: 4,
      title: 'Strength Builder',
      description: 'Completed all beginner strength exercises',
      icon: '💪',
      color: '#2E86C1',
      achieved: false,
    },
    {
      id: 5,
      title: '10-Day Streak',
      description: 'Completed exercises for 10 consecutive days',
      icon: '🔥',
      color: '#2E86C1',
      achieved: false,
    },
  ];
  
  return (
    <div className="space-y-6">
      <Card title="Current Streak" className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-[#2C3E50]">{streak} days</h2>
            <p className="text-lg text-[#566573]">Keep it up!</p>
          </div>
          <div className="bg-[#A9DFBF] p-4 rounded-full">
            <span className="text-3xl">🔥</span>
          </div>
        </div>
      </Card>
      
      <Card title="Progress Tracking">
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`py-2 px-4 text-xl font-medium ${
              activeTab === 'daily' 
                ? 'text-[#2E86C1] border-b-2 border-[#2E86C1]' 
                : 'text-[#566573]'
            }`}
            onClick={() => setActiveTab('daily')}
          >
            Daily
          </button>
          <button
            className={`py-2 px-4 text-xl font-medium ${
              activeTab === 'weekly' 
                ? 'text-[#2E86C1] border-b-2 border-[#2E86C1]' 
                : 'text-[#566573]'
            }`}
            onClick={() => setActiveTab('weekly')}
          >
            Weekly
          </button>
          <button
            className={`py-2 px-4 text-xl font-medium ${
              activeTab === 'achievements' 
                ? 'text-[#2E86C1] border-b-2 border-[#2E86C1]' 
                : 'text-[#566573]'
            }`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
        </div>
        
        {activeTab === 'daily' && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Today's Progress</h3>
              <ProgressBar 
                progress={Math.round((completedExercises / totalExercises) * 100)} 
                label={`${completedExercises} of ${totalExercises} exercises completed`}
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
              </h3>
              
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div key={index} className="text-center font-bold text-[#566573]">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {/* Empty cells for days before the first of the month */}
                {Array.from({ length: firstDayOfMonth }, (_, i) => (
                  <div key={`empty-${i}`} className="h-12"></div>
                ))}
                
                {/* Calendar days */}
                {calendarDays.map((day) => {
                  const isToday = day === currentDate.getDate();
                  const hasActivity = activityDays.includes(day);
                  
                  return (
                    <div 
                      key={day} 
                      className={`h-12 rounded-lg flex items-center justify-center ${
                        isToday ? 'bg-[#2E86C1] text-white' : 
                        hasActivity ? 'bg-[#A9DFBF]' : 'bg-gray-100'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'weekly' && (
          <div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4">This Week's Activity</h3>
            
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center">
                  <div className="w-12 text-lg font-medium text-[#566573]">{day.day}</div>
                  <div className="flex-1">
                    <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#27AE60]" 
                        style={{ width: `${(day.completed / day.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-20 text-lg text-[#566573] text-right">
                    {day.completed}/{day.total}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-[#EBF5FB] rounded-lg">
              <h4 className="text-lg font-bold text-[#2C3E50] mb-2">Weekly Summary</h4>
              <p className="text-lg text-[#566573]">
                You completed 11 out of 21 exercises this week.
              </p>
              <p className="text-lg text-[#566573]">
                That's 52% of your weekly goal!
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'achievements' && (
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className={`flex items-center p-3 rounded-lg ${
                  achievement.achieved ? 'bg-[#EBF5FB]' : 'bg-gray-100'
                }`}
              >
                <div 
                  className={`${
                    achievement.achieved ? 'bg-[#2E86C1] text-white' : 'bg-gray-300'
                  } p-3 rounded-full mr-4`}
                >
                  <span className="text-xl">{achievement.icon}</span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${
                    achievement.achieved ? 'text-[#2C3E50]' : 'text-[#566573]'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-lg text-[#566573]">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProgressTracker;
