import React from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Card, Button } from '@/components/ui/base-components';
import { EXERCISE_CATEGORIES } from '@/lib/constants';
import useAppStore from '@/store/appStore';
import { FaChevronRight } from 'react-icons/fa';

export default function ExercisesPage() {
  return (
    <Layout>
      <Header />
      
      <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">Exercise Categories</h1>
      
      <div className="space-y-4">
        {EXERCISE_CATEGORIES.map((category) => (
          <a 
            key={category.id}
            href={`/exercises/${category.id}`}
            className="block"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: category.color }}
                  >
                    <span className="text-white text-2xl">
                      {/* This would be an actual icon in a real implementation */}
                      {category.icon.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#2C3E50]">{category.name}</h2>
                    <p className="text-lg text-[#566573]">
                      {category.id === 'balance' ? 'Improve stability and prevent falls' : 
                       category.id === 'strength' ? 'Build muscle and functional strength' :
                       category.id === 'flexibility' ? 'Enhance range of motion and comfort' :
                       category.id === 'walking' ? 'Boost endurance and cardiovascular health' :
                       'Exercise safely while seated'}
                    </p>
                  </div>
                </div>
                <FaChevronRight className="text-[#566573] text-xl" />
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Layout>
  );
}
