import React from 'react';
import { Card, Button, Input } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';

const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const login = useAppStore((state) => state.login);
  const switchToSupporter = useAppStore((state) => state.switchToSupporter);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // For demo purposes, we'll accept any credentials
    login(email, password);
    window.location.href = '/';
  };
  
  const handleSupporterLogin = () => {
    switchToSupporter();
    window.location.href = '/supporter';
  };
  
  return (
    <Card className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">Mobility App Login</h1>
      
      {error && (
        <div className="bg-[#FADBD8] border-l-4 border-[#E74C3C] p-4 mb-6 rounded">
          <p className="text-[#E74C3C]">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        
        <div className="mt-8 space-y-4">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            size="xl"
          >
            LOG IN
          </Button>
          
          <Button
            type="button"
            variant="outline"
            fullWidth
            onClick={handleSupporterLogin}
          >
            LOG IN AS SUPPORTER
          </Button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-lg text-[#566573]">
          For demo purposes, you can log in with any credentials
        </p>
      </div>
    </Card>
  );
};

export default LoginForm;
