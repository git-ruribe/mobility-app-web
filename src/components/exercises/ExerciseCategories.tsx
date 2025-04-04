import React from 'react';
import { Card, Button } from '@/components/ui/base-components';
import { EXERCISE_CATEGORIES } from '@/lib/constants';
import useAppStore from '@/store/appStore';
import { FaChevronRight } from 'react-icons/fa6';

const ExerciseCategories: React.FC = () => {
  return (
    <Card title="Exercise Categories" className="mb-6">
      <div className="space-y-4">
        {EXERCISE_CATEGORIES.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </Card>
  );
};

interface CategoryItemProps {
  category: typeof EXERCISE_CATEGORIES[0];
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <a 
      href={`/exercises/${category.id}`}
      className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#2E86C1] transition-colors"
    >
      <div className="flex items-center">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
          style={{ backgroundColor: category.color }}
        >
          <span className="text-white text-2xl">
            {/* This would be an actual icon in a real implementation */}
            {category.icon.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="text-xl font-medium text-[#2C3E50]">{category.name}</span>
      </div>
      <FaChevronRight className="text-[#566573]" />
    </a>
  );
};

export default ExerciseCategories;
