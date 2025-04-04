"use client";

import React, { useState } from 'react';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';
import { FaPaperPlane, FaSmile, FaThumbsUp, FaCalendarAlt } from 'react-icons/fa';

const SupporterMessaging: React.FC = () => {
  const [newMessage, setNewMessage] = useState('');
  const messages = useAppStore((state) => state.messages);
  const sendMessage = useAppStore((state) => state.sendMessage);
  const supporter = useAppStore((state) => state.supporter);
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };
  
  const quickMessages = [
    "Great job on your exercises today!",
    "Don't forget your balance exercises",
    "How are you feeling today?",
    "I'm proud of your progress!",
    "Need any help with the exercises?"
  ];
  
  const handleQuickMessage = (message: string) => {
    sendMessage(message);
  };
  
  if (!supporter) {
    return (
      <Card>
        <p className="text-xl text-[#566573]">Supporter information not found.</p>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      <Card title={`Messages with ${supporter.supporting.name}`}>
        <div className="space-y-4 mb-6 max-h-[60vh] overflow-y-auto p-2">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`p-4 rounded-xl max-w-[80%] ${
                message.sender === 'supporter' 
                  ? 'bg-[#A9DFBF] ml-auto' 
                  : 'bg-[#AED6F1]'
              }`}
            >
              <p className="text-xl text-[#2C3E50]">{message.text}</p>
              <p className="text-sm text-[#566573] mt-1 text-right">{message.time}</p>
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-4 text-xl border-2 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-[#2E86C1] border-gray-300"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#2E86C1] text-white px-6 rounded-r-xl flex items-center justify-center"
            >
              <FaPaperPlane className="text-xl" />
            </button>
          </div>
          
          <div>
            <p className="text-lg text-[#566573] mb-2">Quick Messages:</p>
            <div className="flex flex-wrap gap-2">
              {quickMessages.map((message) => (
                <button
                  key={message}
                  onClick={() => handleQuickMessage(message)}
                  className="bg-gray-200 hover:bg-gray-300 text-[#2C3E50] px-4 py-2 rounded-full text-lg"
                >
                  {message}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      <Card title="Motivation Tools">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            variant="outline" 
            fullWidth
            icon={FaSmile}
            onClick={() => alert('Encouragement sent!')}
          >
            SEND ENCOURAGEMENT
          </Button>
          
          <Button 
            variant="outline" 
            fullWidth
            icon={FaThumbsUp}
            onClick={() => alert('Congratulations sent!')}
          >
            SEND CONGRATULATIONS
          </Button>
          
          <Button 
            variant="outline" 
            fullWidth
            icon={FaCalendarAlt}
            onClick={() => alert('Reminder sent!')}
          >
            SEND REMINDER
          </Button>
        </div>
      </Card>
      
      <Card title="Schedule Message">
        <div className="space-y-4">
          <div>
            <label className="block text-lg text-[#566573] mb-1">Message</label>
            <textarea
              placeholder="Type your scheduled message..."
              className="w-full px-4 py-3 text-xl border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E86C1] border-gray-300 h-32"
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg text-[#566573] mb-1">Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 text-xl border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E86C1] border-gray-300"
              />
            </div>
            
            <div>
              <label className="block text-lg text-[#566573] mb-1">Time</label>
              <input
                type="time"
                className="w-full px-4 py-3 text-xl border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E86C1] border-gray-300"
              />
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            fullWidth
            onClick={() => alert('Message scheduled!')}
          >
            SCHEDULE MESSAGE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SupporterMessaging;
