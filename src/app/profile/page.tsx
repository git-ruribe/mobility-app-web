"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';
import { FaUser, FaEnvelope, FaSignOutAlt, FaExchangeAlt } from 'react-icons/fa';
import { signOut } from 'next-auth/react';

export default function ProfilePage() {
  const user = useAppStore((state) => state.user);
  const isSupporter = useAppStore((state) => state.isSupporter);
  const supporter = useAppStore((state) => state.supporter);
  const logout = useAppStore((state) => state.logout);
  const switchToSupporter = useAppStore((state) => state.switchToSupporter);
  const switchToUser = useAppStore((state) => state.switchToUser);
  
  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };
  
  const handleSwitchRole = () => {
    if (isSupporter) {
      switchToUser();
      window.location.href = '/';
    } else {
      switchToSupporter();
      window.location.href = '/supporter';
    }
  };
  
  return (
    <Layout>
      <Header />
      
      <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">Profile</h1>
      
      <Card className="mb-6">
        <div className="flex items-center">
          <div className="bg-[#AED6F1] rounded-full p-6 mr-6">
            <FaUser className="text-4xl text-[#2E86C1]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#2C3E50]">
              {isSupporter ? supporter?.name : user?.name}
            </h2>
            <p className="text-xl text-[#566573]">
              {isSupporter ? 'Supporter' : 'User'} Account
            </p>
          </div>
        </div>
      </Card>
      
      <Card title="Account Information" className="mb-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="text-xl text-[#566573] mr-3" />
            <div>
              <p className="text-lg text-[#566573]">Email</p>
              <p className="text-xl text-[#2C3E50]">
                {isSupporter ? 'john@example.com' : 'susan@example.com'}
              </p>
            </div>
          </div>
          
          {!isSupporter && (
            <div>
              <p className="text-lg text-[#566573]">Supporter</p>
              <p className="text-xl text-[#2C3E50]">{user?.supporter?.name} ({user?.supporter?.relationship})</p>
            </div>
          )}
          
          {isSupporter && (
            <div>
              <p className="text-lg text-[#566573]">Supporting</p>
              <p className="text-xl text-[#2C3E50]">{supporter?.supporting.name}</p>
            </div>
          )}
        </div>
      </Card>
      
      <Card title="App Settings" className="mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-lg text-[#566573]">Notification Preferences</p>
            <div className="flex items-center mt-2">
              <input 
                type="checkbox" 
                id="exercise-reminders" 
                className="w-6 h-6 mr-3" 
                defaultChecked 
              />
              <label htmlFor="exercise-reminders" className="text-xl text-[#2C3E50]">
                Exercise Reminders
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input 
                type="checkbox" 
                id="supporter-messages" 
                className="w-6 h-6 mr-3" 
                defaultChecked 
              />
              <label htmlFor="supporter-messages" className="text-xl text-[#2C3E50]">
                Supporter Messages
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input 
                type="checkbox" 
                id="achievement-alerts" 
                className="w-6 h-6 mr-3" 
                defaultChecked 
              />
              <label htmlFor="achievement-alerts" className="text-xl text-[#2C3E50]">
                Achievement Alerts
              </label>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-[#566573]">Accessibility Settings</p>
            <div className="flex items-center mt-2">
              <input 
                type="checkbox" 
                id="larger-text" 
                className="w-6 h-6 mr-3" 
                defaultChecked 
              />
              <label htmlFor="larger-text" className="text-xl text-[#2C3E50]">
                Larger Text
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input 
                type="checkbox" 
                id="high-contrast" 
                className="w-6 h-6 mr-3" 
              />
              <label htmlFor="high-contrast" className="text-xl text-[#2C3E50]">
                High Contrast
              </label>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="space-y-4">
        <Button 
          variant="outline" 
          fullWidth 
          icon={FaExchangeAlt}
          onClick={handleSwitchRole}
        >
          {isSupporter ? 'SWITCH TO USER VIEW' : 'SWITCH TO SUPPORTER VIEW'}
        </Button>
        
        <Button 
          variant="outline" 
          fullWidth 
          icon={FaSignOutAlt}
          onClick={handleLogout}
        >
          LOG OUT
        </Button>
      </div>
    </Layout>
  );
}
