// src/store/appStore.ts

import { create } from 'zustand';
import { SAMPLE_EXERCISES, SAMPLE_MESSAGES, SAMPLE_PROGRESS, SAMPLE_ACHIEVEMENTS } from '@/lib/constants';

// Define the store state type
interface AppState {
  // User and authentication
  isLoggedIn: boolean;
  userProfile: {
    name: string;
    age: number;
    mobilityLevel: string;
    supporterEmail: string;
  } | null;
  userType: 'user' | 'supporter';
  
  // Exercise related
  currentExercise: any | null;
  completedExercises: string[];
  exerciseProgress: {
    [key: string]: {
      lastCompleted: string;
      timesCompleted: number;
      difficulty: number;
    }
  };
  
  // Progress tracking
  progress: typeof SAMPLE_PROGRESS;
  achievements: typeof SAMPLE_ACHIEVEMENTS;
  
  // Communication
  messages: typeof SAMPLE_MESSAGES;
  
  // Weekly program
  weeklyProgram: {
    [key: string]: string[];
  };
  
  // Store initialization
  initializeStore: () => void;
  
  // Actions
  login: (email: string, password: string) => void;
  logout: () => void;
  setUserType: (type: 'user' | 'supporter') => void;
  setUserProfile: (profile: AppState['userProfile']) => void;
  setCurrentExercise: (exercise: any) => void;
  completeExercise: (exerciseId: string) => void;
  addMessage: (message: { sender: string; text: string }) => void;
  generateWeeklyProgram: () => void;
  updateProgress: () => void;
}

// Use a unique key for our app state to avoid conflicts with NextAuth
const STORAGE_KEY = 'mobilityAppCustomState';

// Helper function to load state from localStorage
const loadState = () => {
  try {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem(STORAGE_KEY);
      if (savedState) {
        return JSON.parse(savedState);
      }
    }
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
  }
  return null;
};

// Helper function to save state to localStorage
const saveState = (state: Partial<AppState>) => {
  try {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      // Only save the data we want to persist, not the functions
      const stateToSave = {
        isLoggedIn: state.isLoggedIn,
        userProfile: state.userProfile,
        userType: state.userType,
        completedExercises: state.completedExercises,
        exerciseProgress: state.exerciseProgress,
        progress: state.progress,
        achievements: state.achievements,
        messages: state.messages,
        weeklyProgram: state.weeklyProgram,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

// Default state with demo data
const defaultState = {
  isLoggedIn: true, // Set to true by default for demo
  userProfile: {
    name: "Demo User",
    age: 68,
    mobilityLevel: "beginner",
    supporterEmail: "supporter@example.com"
  },
  userType: 'user' as 'user' | 'supporter', // Type assertion to fix the error
  currentExercise: null,
  completedExercises: [],
  exerciseProgress: {},
  progress: SAMPLE_PROGRESS,
  achievements: SAMPLE_ACHIEVEMENTS,
  messages: SAMPLE_MESSAGES,
  weeklyProgram: {
    monday: ['balance-1', 'strength-1'],
    tuesday: ['flexibility-1', 'walking-1'],
    wednesday: ['seated-1', 'balance-2'],
    thursday: ['strength-2', 'flexibility-2'],
    friday: ['walking-2', 'seated-2'],
    saturday: ['balance-3'],
    sunday: ['rest']
  }
};

// Create the store
const useAppStore = create<AppState>((set, get) => ({
  // Initialize with defaults (will be replaced with loaded state when available)
  ...defaultState,
  
  // Add an initialization function that runs on first access
  initializeStore: () => {
    const loadedState = loadState();
    if (loadedState) {
      set({
        ...loadedState,
        // Ensure userType is correctly typed
        userType: loadedState.userType as 'user' | 'supporter'
      });
    }
  },
  
  // Actions
  login: (email, password) => {
    set({ 
      isLoggedIn: true,
      userProfile: {
        name: email.split('@')[0],
        age: 65,
        mobilityLevel: 'beginner',
        supporterEmail: 'supporter@example.com'
      }
    });
    
    // Save to localStorage
    saveState(get());
  },
  
  logout: () => {
    set({ 
      isLoggedIn: false,
      userProfile: null
    });
    
    // Save to localStorage
    saveState(get());
  },
  
  setUserType: (type) => {
    set({ userType: type });
    
    // Save to localStorage
    saveState(get());
  },
  
  setUserProfile: (profile) => {
    set({ userProfile: profile });
    
    // Save to localStorage
    saveState(get());
  },
  
  setCurrentExercise: (exercise) => {
    set({ currentExercise: exercise });
    
    // We don't save currentExercise to localStorage as it's a temporary state
  },
  
  completeExercise: (exerciseId) => {
    const { completedExercises, exerciseProgress } = get();
    const now = new Date().toISOString();
    
    // Update completed exercises
    const updatedCompletedExercises = [...completedExercises, exerciseId];
    
    // Update exercise progress
    const updatedExerciseProgress = { ...exerciseProgress };
    if (updatedExerciseProgress[exerciseId]) {
      updatedExerciseProgress[exerciseId] = {
        ...updatedExerciseProgress[exerciseId],
        lastCompleted: now,
        timesCompleted: updatedExerciseProgress[exerciseId].timesCompleted + 1
      };
    } else {
      updatedExerciseProgress[exerciseId] = {
        lastCompleted: now,
        timesCompleted: 1,
        difficulty: 3 // Default perceived difficulty (1-10 scale)
      };
    }
    
    set({ 
      completedExercises: updatedCompletedExercises,
      exerciseProgress: updatedExerciseProgress
    });
    
    // Update progress stats
    get().updateProgress();
    
    // Save to localStorage
    saveState(get());
  },
  
  addMessage: (message) => {
    const { messages } = get();
    const newMessage = {
      id: `msg${messages.length + 1}`,
      sender: message.sender,
      text: message.text,
      timestamp: new Date().toISOString()
    };
    
    set({ messages: [...messages, newMessage] });
    
    // Save to localStorage
    saveState(get());
  },
  
  generateWeeklyProgram: () => {
    const { userProfile, exerciseProgress } = get();
    
    // This would normally be a complex algorithm based on user progress
    // For demo, we'll create a simple program based on mobility level
    const level = userProfile?.mobilityLevel || 'beginner';
    
    let program = {
      monday: ['balance-1', 'strength-1'],
      tuesday: ['flexibility-1', 'walking-1'],
      wednesday: ['seated-1', 'balance-2'],
      thursday: ['strength-2', 'flexibility-2'],
      friday: ['walking-2', 'seated-2'],
      saturday: ['balance-3'],
      sunday: ['rest']
    };
    
    // Adjust based on level
    if (level === 'intermediate') {
      program = {
        monday: ['balance-3', 'strength-3'],
        tuesday: ['flexibility-3', 'walking-3'],
        wednesday: ['seated-3', 'balance-4'],
        thursday: ['strength-4', 'flexibility-4'],
        friday: ['walking-3', 'seated-4'],
        saturday: ['balance-4', 'strength-5'],
        sunday: ['flexibility-5']
      };
    } else if (level === 'advanced') {
      program = {
        monday: ['balance-4', 'strength-5'],
        tuesday: ['flexibility-5', 'walking-4'],
        wednesday: ['seated-5', 'balance-5'],
        thursday: ['strength-6', 'flexibility-5'],
        friday: ['walking-4', 'seated-5'],
        saturday: ['balance-5', 'strength-6'],
        sunday: ['walking-3']
      };
    }
    
    // Further personalize based on exercise progress
    // This is a simplified version of what would be a more complex algorithm
    if (Object.keys(exerciseProgress).length > 0) {
      // Find exercises that have been completed many times
      const mastered = Object.entries(exerciseProgress)
        .filter(([_, data]) => data.timesCompleted > 5)
        .map(([id, _]) => id);
      
      // Replace some exercises with more challenging ones if they've been mastered
      if (mastered.includes('balance-1')) {
        program.monday[0] = 'balance-3';
      }
      if (mastered.includes('strength-1')) {
        program.monday[1] = 'strength-3';
      }
    }
    
    set({ weeklyProgram: program });
    
    // Save to localStorage
    saveState(get());
  },
  
  updateProgress: () => {
    const { completedExercises, progress, achievements } = get();
    
    // Update streak
    const today = new Date().toISOString().split('T')[0];
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toISOString().split('T')[0];
    
    // Check if any exercises were completed today
    const completedToday = completedExercises.some(ex => {
      const date = get().exerciseProgress[ex]?.lastCompleted.split('T')[0];
      return date === today;
    });
    
    // Check if any exercises were completed yesterday
    const completedYesterday = completedExercises.some(ex => {
      const date = get().exerciseProgress[ex]?.lastCompleted.split('T')[0];
      return date === yesterday;
    });
    
    // Update streak
    let streakDays = progress.streakDays;
    if (completedToday) {
      if (completedYesterday || streakDays === 0) {
        streakDays += 1;
      }
    } else if (!completedYesterday) {
      streakDays = 0;
    }
    
    // Count exercises by category
    const exercisesByCategory = {
      balance: 0,
      strength: 0,
      flexibility: 0,
      walking: 0,
      seated: 0
    };
    
    completedExercises.forEach(exId => {
      // Find the category of this exercise
      for (const [category, exercises] of Object.entries(SAMPLE_EXERCISES)) {
        if (exercises.some(ex => ex.id === exId)) {
          exercisesByCategory[category as keyof typeof exercisesByCategory] += 1;
          break;
        }
      }
    });
    
    // Update monthly completion percentage
    const daysInMonth = 30; // Simplified
    const targetExercisesPerDay = 2;
    const totalTargetForMonth = daysInMonth * targetExercisesPerDay;
    const monthlyCompletion = Math.min(
      100,
      Math.round((completedExercises.length / totalTargetForMonth) * 100)
    );
    
    // Update weekly activity (simplified)
    const weeklyActivity = [...progress.weeklyActivity];
    const dayOfWeek = new Date().getDay();
    if (completedToday) {
      weeklyActivity[dayOfWeek] += 1;
    }
    
    // Update achievements
    const updatedAchievements = [...achievements];
    
    // Check for "Consistency Champion" achievement
    if (streakDays >= 3) {
      const consistencyAchievement = updatedAchievements.find(a => a.id === "ach2");
      if (consistencyAchievement && !consistencyAchievement.unlocked) {
        consistencyAchievement.unlocked = true;
        consistencyAchievement.date = today;
      }
    }
    
    // Check for "Strength Builder" achievement
    if (exercisesByCategory.strength >= 10) {
      const strengthAchievement = updatedAchievements.find(a => a.id === "ach4");
      if (strengthAchievement && !strengthAchievement.unlocked) {
        strengthAchievement.unlocked = true;
        strengthAchievement.date = today;
      }
    }
    
    // Update progress state
    set({
      progress: {
        ...progress,
        streakDays,
        monthlyCompletion,
        weeklyActivity,
        exercisesByCategory
      },
      achievements: updatedAchievements
    });
    
    // Save to localStorage
    saveState(get());
  }
}));

// Initialize the store if in browser environment
if (typeof window !== 'undefined') {
  // Run on next tick to ensure browser environment
  setTimeout(() => {
    useAppStore.getState().initializeStore();
  }, 0);
}

export default useAppStore;
