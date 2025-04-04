"use client";

import React from 'react';
import { navIcons } from '@/components/ui/base-components';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const navItems = [
    { name: 'Home', path: '/', icon: navIcons.home },
    { name: 'Exercises', path: '/exercises', icon: navIcons.exercises },
    { name: 'Progress', path: '/progress', icon: navIcons.progress },
    { name: 'Messages', path: '/messages', icon: navIcons.messages },
    { name: 'Profile', path: '/profile', icon: navIcons.profile },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main content */}
        <main className="pb-20">
          {children}
        </main>
        
        {/* Bottom navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
          <div className="max-w-4xl mx-auto">
            <ul className="flex justify-around">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a 
                      href={item.path}
                      className="flex flex-col items-center py-3 px-2 text-[#566573] hover:text-[#2E86C1]"
                    >
                      <Icon className="text-2xl" />
                      <span className="text-sm mt-1">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
