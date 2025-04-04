import React from 'react';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';

const SupporterMessage: React.FC = () => {
  const user = useAppStore((state) => state.user);
  const isSupporter = useAppStore((state) => state.isSupporter);
  const supporter = useAppStore((state) => state.supporter);
  
  // Don't show this component in supporter view
  if (isSupporter) return null;
  
  const lastMessage = user?.supporter?.lastMessage;
  
  return (
    <Card title="Message from Supporter" className="mb-6">
      <div className="mb-4">
        <p className="text-xl text-[#2C3E50] italic">"{lastMessage?.text}"</p>
        <p className="text-lg text-[#566573] mt-2">- {user?.supporter?.name}, {lastMessage?.time}</p>
      </div>
      
      <Button 
        variant="primary" 
        fullWidth
        onClick={() => window.location.href = '/messages'}
      >
        REPLY
      </Button>
    </Card>
  );
};

export default SupporterMessage;
