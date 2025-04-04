import { create } from 'zustand';
import { SAMPLE_USER, SAMPLE_SUPPORTER, SAMPLE_EXERCISES, SAMPLE_MESSAGES } from '@/lib/constants';

// Define types
type User = typeof SAMPLE_USER;
type Supporter = typeof SAMPLE_SUPPORTER;
type Exercise = (typeof SAMPLE_EXERCISES.balance)[0];
type Message = typeof SAMPLE_MESSAGES[0];

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  isSupporter: boolean;
  supporter: Supporter | null;
  
  // Exercise state
  exercises: Record<string, Exercise[]>;
  currentExercise: Exercise | null;
  exerciseProgress: number;
  
  // Progress state
  streak: number;
  completedExercises: number;
  totalExercises: number;
  
  // Messages state
  messages: Message[];
  
  // Actions
  login: (email: string, password: string) => void;
  logout: () => void;
  switchToSupporter: () => void;
  switchToUser: () => void;
  setCurrentExercise: (exercise: Exercise) => void;
  completeExercise: (exerciseId: string) => void;
  sendMessage: (text: string) => void;
}

// Create store
const useAppStore = create<AppState>((set) => ({
  // Initial state
  user: SAMPLE_USER,
  isAuthenticated: true, // For demo purposes
  isSupporter: false,
  supporter: SAMPLE_SUPPORTER,
  exercises: SAMPLE_EXERCISES,
  currentExercise: null,
  exerciseProgress: 0,
  streak: SAMPLE_USER.streak,
  completedExercises: SAMPLE_USER.completedExercises,
  totalExercises: SAMPLE_USER.totalExercises,
  messages: SAMPLE_MESSAGES,
  
  // Actions
  login: (email, password) => set({ 
    isAuthenticated: true,
    user: SAMPLE_USER,
  }),
  
  logout: () => set({ 
    isAuthenticated: false,
    user: null,
    supporter: null,
  }),
  
  switchToSupporter: () => set({ 
    isSupporter: true,
    user: null,
    supporter: SAMPLE_SUPPORTER,
  }),
  
  switchToUser: () => set({ 
    isSupporter: false,
    user: SAMPLE_USER,
    supporter: null,
  }),
  
  setCurrentExercise: (exercise) => set({ 
    currentExercise: exercise,
    exerciseProgress: 0,
  }),
  
  completeExercise: (exerciseId) => set((state) => {
    // In a real app, we would update the database
    return {
      completedExercises: state.completedExercises + 1,
      streak: state.streak + (state.completedExercises + 1 >= state.totalExercises ? 1 : 0),
    };
  }),
  
  sendMessage: (text) => set((state) => {
    const newMessage: Message = {
      id: String(state.messages.length + 1),
      sender: state.isSupporter ? 'supporter' : 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    return {
      messages: [...state.messages, newMessage],
    };
  }),
}));

export default useAppStore;
