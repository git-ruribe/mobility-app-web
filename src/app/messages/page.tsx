"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';
import { SAMPLE_MESSAGES, QUICK_REPLIES } from '@/lib/constants';
import { FaPaperPlane } from 'react-icons/fa';

export default function MessagesPage() {
  const [newMessage, setNewMessage] = React.useState('');
  const messages = useAppStore((state) => state.messages);
  const sendMessage = useAppStore((state) => state.sendMessage);
  const isSupporter = useAppStore((state) => state.isSupporter);
  const user = useAppStore((state) => state.user);
  const supporter = useAppStore((state) => state.supporter);
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };
  
  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };
  
  return (
    <Layout>
      <Header />
      
      <Card title={isSupporter ? `Messages with ${supporter?.supporting.name}` : `Messages with ${user?.supporter?.name}`} className="mb-6">
        <div className="space-y-4 mb-6 max-h-[60vh] overflow-y-auto p-2">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`p-4 rounded-xl max-w-[80%] ${
                message.sender === 'user' 
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
            <p className="text-lg text-[#566573] mb-2">Quick Replies:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="bg-gray-200 hover:bg-gray-300 text-[#2C3E50] px-4 py-2 rounded-full text-lg"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
