import React from 'react';
import { Card, Button } from '@/components/ui/base-components';
import useAppStore from '@/store/appStore';
import { FaChartLine, FaCalendarAlt, FaTrophy } from 'react-icons/fa';

const SupporterProgressView: React.FC = () => {
  const supporter = useAppStore((state) => state.supporter);
  
  if (!supporter) {
    return (
      <Card>
        <p className="text-xl text-[#566573]">Supporter information not found.</p>
      </Card>
    );
  }
  
  // Sample data for the activity calendar
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  // Generate calendar days
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Sample activity data (in a real app, this would come from a database)
  const activityDays = [1, 3, 4, 5, 8, 9, 10, 12, 15, 16, 19, 20, 21, 22, 25, 26, 27];
  
  return (
    <div className="space-y-6">
      <Card title={`${supporter.supporting.name}'s Progress`} className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-[#2C3E50]">{supporter.supporting.streak} days</h2>
            <p className="text-lg text-[#566573]">Current streak</p>
          </div>
          <div className="bg-[#A9DFBF] p-4 rounded-full">
            <span className="text-3xl">🔥</span>
          </div>
        </div>
        
        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-[#27AE60]" 
            style={{ width: `${supporter.supporting.progress}%` }}
          ></div>
        </div>
        
        <p className="text-xl text-[#2C3E50] mb-6">
          {supporter.supporting.completedExercises} of {supporter.supporting.totalExercises} exercises completed today
        </p>
        
        <Button 
          variant="primary" 
          fullWidth
          onClick={() => alert('Encouragement message sent!')}
        >
          SEND ENCOURAGEMENT
        </Button>
      </Card>
      
      <Card title="Monthly Activity Calendar">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h3>
        </div>
        
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
      </Card>
      
      <Card title="Recent Achievements">
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-[#EBF5FB] rounded-lg">
            <div className="bg-[#2E86C1] text-white p-3 rounded-full mr-4">
              <span className="text-xl">🏆</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2C3E50]">5-Day Streak</h3>
              <p className="text-lg text-[#566573]">Completed exercises for 5 consecutive days</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-[#EBF5FB] rounded-lg">
            <div className="bg-[#2E86C1] text-white p-3 rounded-full mr-4">
              <span className="text-xl">⭐</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2C3E50]">Balance Master</h3>
              <p className="text-lg text-[#566573]">Completed all beginner balance exercises</p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            fullWidth
            onClick={() => alert('Congratulations message sent!')}
          >
            SEND CONGRATULATIONS
          </Button>
        </div>
      </Card>
      
      <Card title="Motivation Tools">
        <div className="space-y-4">
          <div>
            <label className="block text-lg text-[#566573] mb-1">Create Challenge</label>
            <select className="w-full px-4 py-3 text-xl border-2 rounded-xl border-gray-300">
              <option>Complete 3 exercises in a day</option>
              <option>Maintain a 5-day streak</option>
              <option>Try a new exercise category</option>
            </select>
          </div>
          
          <Button 
            variant="secondary" 
            fullWidth
            onClick={() => alert('Challenge created and sent!')}
          >
            CREATE CHALLENGE
          </Button>
          
          <div className="border-t border-gray-200 pt-4">
            <label className="block text-lg text-[#566573] mb-1">Schedule Reminder</label>
            <div className="flex space-x-2">
              <select className="flex-1 px-4 py-3 text-xl border-2 rounded-xl border-gray-300">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Custom</option>
              </select>
              <Button 
                variant="primary"
                onClick={() => alert('Reminder scheduled!')}
              >
                SCHEDULE
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SupporterProgressView;
