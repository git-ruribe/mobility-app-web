"use client";

//import { AuthProvider } from '@/components/auth/AuthProvider';
import { SessionProvider } from 'next-auth/react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import useAppStore from '@/store/appStore';

const inter = Inter({ subsets: ['latin'] });


export default function Layout({ children }) {
  const initializeStore = useAppStore(state => state.initializeStore);
  
  useEffect(() => {
    // Initialize the store when the app loads
    initializeStore();
  }, [initializeStore]);
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
