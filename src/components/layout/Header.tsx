"use client";

import React from 'react';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';

const Header: React.FC = () => {
  const user = useAppStore((state) => state.user);
  const isSupporter = useAppStore((state) => state.isSupporter);
  const supporter = useAppStore((state) => state.supporter);
  
  const name = isSupporter ? supporter?.name : user?.name;
  const supportingName = isSupporter ? supporter?.supporting.name : null;
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
  
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2C3E50]">
          {isSupporter ? `Supporting: ${supportingName}` : `Good ${getTimeOfDay()}, ${name}`}
        </h1>
        <p className="text-xl text-[#566573]">{currentDate}</p>
      </div>

    </div>
  );
};

// Helper function to get time of day greeting
function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Morning';
  if (hour < 18) return 'Afternoon';
  return 'Evening';
}

export default Header;
