// Color constants
export const COLORS = {
  primaryBlue: '#2E86C1',
  primaryGreen: '#27AE60',
  lightBlue: '#AED6F1',
  lightGreen: '#A9DFBF',
  warmBeige: '#FAE5D3',
  highlightOrange: '#F39C12',
  successGreen: '#2ECC71',
  alertRed: '#E74C3C',
  primaryText: '#2C3E50',
  secondaryText: '#566573',
  disabledText: '#B3B6B7',
  white: '#FFFFFF',
};

// Exercise categories
export const EXERCISE_CATEGORIES = [
  {
    id: 'balance',
    name: 'Balance Exercises',
    icon: 'scale-balanced',
    color: COLORS.primaryBlue,
  },
  {
    id: 'strength',
    name: 'Strength Training',
    icon: 'dumbbell',
    color: COLORS.primaryGreen,
  },
  {
    id: 'flexibility',
    name: 'Flexibility Exercises',
    icon: 'person-stretching',
    color: COLORS.lightBlue,
  },
  {
    id: 'walking',
    name: 'Walking Programs',
    icon: 'person-walking',
    color: COLORS.lightGreen,
  },
  {
    id: 'seated',
    name: 'Seated Exercises',
    icon: 'chair',
    color: COLORS.warmBeige,
  },
];

// Difficulty levels
export const DIFFICULTY_LEVELS = [
  {
    id: 'beginner',
    name: 'Beginner',
    description: 'Simple exercises with support options',
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    description: 'Moderate difficulty with some challenge',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'More challenging exercises for experienced users',
  },
];

// Navigation items
export const NAV_ITEMS = [
  {
    name: 'Home',
    path: '/',
    icon: 'house',
  },
  {
    name: 'Exercises',
    path: '/exercises',
    icon: 'dumbbell',
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: 'chart-line',
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: 'user',
  },
];

// Supporter navigation items
export const SUPPORTER_NAV_ITEMS = [
  {
    name: 'Home',
    path: '/supporter',
    icon: 'house',
  },
  {
    name: 'Exercises',
    path: '/supporter/exercises',
    icon: 'dumbbell',
  },
  {
    name: 'Messages',
    path: '/supporter/messages',
    icon: 'message',
  },
  {
    name: 'Settings',
    path: '/supporter/settings',
    icon: 'gear',
  },
];

// Sample exercises (placeholder data)
export const SAMPLE_EXERCISES = {
  balance: [
    {
      id: 'standing-heel-toe',
      name: 'Standing Heel-Toe Balance',
      difficulty: 'beginner',
      duration: 5,
      equipment: 'Chair for support (optional)',
      videoUrl: '/videos/placeholder.mp4',
      instructions: [
        'Stand near a chair or wall for support if needed',
        'Place your right heel directly in front of your left toes',
        'Hold this position for 10 seconds',
        'Switch feet and repeat',
        'Complete 5 repetitions with each foot',
      ],
      modifications: [
        'For easier version: Hold onto a chair for support',
        'For more challenge: Try with eyes closed (only with support nearby)',
      ],
    },
    {
      id: 'seated-weight-shifts',
      name: 'Seated Weight Shifts',
      difficulty: 'beginner',
      duration: 5,
      equipment: 'Sturdy chair',
      videoUrl: '/videos/placeholder.mp4',
      instructions: [
        'Sit toward the front of a sturdy chair',
        'Place your feet flat on the floor, hip-width apart',
        'Slowly shift your weight to the right side',
        'Hold for 3 seconds, then return to center',
        'Shift to the left side and hold for 3 seconds',
        'Repeat 10 times on each side',
      ],
      modifications: [
        'For easier version: Reduce the distance you shift',
        'For more challenge: Increase hold time to 5 seconds',
      ],
    },
  ],
  strength: [
    {
      id: 'seated-leg-lifts',
      name: 'Seated Leg Lifts',
      difficulty: 'beginner',
      duration: 8,
      equipment: 'Sturdy chair',
      videoUrl: '/videos/placeholder.mp4',
      instructions: [
        'Sit toward the front of a sturdy chair',
        'Straighten one leg out in front of you',
        'Hold for 2 seconds, then lower your leg',
        'Repeat with the other leg',
        'Complete 10 repetitions with each leg',
      ],
      modifications: [
        'For easier version: Lift leg only partially',
        'For more challenge: Hold position longer',
      ],
    },
    {
      id: 'wall-push-ups',
      name: 'Wall Push-Ups',
      difficulty: 'beginner',
      duration: 5,
      equipment: 'Wall',
      videoUrl: '/videos/placeholder.mp4',
      instructions: [
        'Stand facing a wall, arms length away',
        'Place your hands on the wall at shoulder height',
        'Bend your elbows to bring your body toward the wall',
        'Push back to the starting position',
        'Complete 10 repetitions',
      ],
      modifications: [
        'For easier version: Stand closer to the wall',
        'For more challenge: Stand farther from the wall',
      ],
    },
  ],
};

// Sample user data (placeholder)
export const SAMPLE_USER = {
  id: '1',
  name: 'Susan',
  age: 72,
  streak: 4,
  completedExercises: 2,
  totalExercises: 3,
  progress: 65,
  nextExercise: {
    id: 'balance-training',
    name: 'Balance Training',
    duration: 15,
    time: '2:00 PM',
  },
  supporter: {
    id: '2',
    name: 'John',
    relationship: 'Son',
    lastMessage: {
      text: 'Great job on your morning exercises! Keep it up!',
      time: '10:50 AM',
    },
  },
};

// Sample supporter data (placeholder)
export const SAMPLE_SUPPORTER = {
  id: '2',
  name: 'John',
  supporting: {
    id: '1',
    name: 'Susan',
    progress: 65,
    completedExercises: 2,
    totalExercises: 3,
    lastActivity: '10:45 AM',
    nextExercise: {
      id: 'balance-training',
      name: 'Balance Training',
      duration: 15,
      time: '2:00 PM',
    },
    streak: 4,
  },
};

// Sample messages (placeholder)
export const SAMPLE_MESSAGES = [
  {
    id: '1',
    sender: 'supporter',
    text: 'Good morning Susan! Ready for your exercises today?',
    time: '8:30 AM',
  },
  {
    id: '2',
    sender: 'user',
    text: 'Yes! Starting with chair exercises now.',
    time: '8:45 AM',
  },
  {
    id: '3',
    sender: 'supporter',
    text: 'Great job on your morning exercises! Keep it up!',
    time: '10:50 AM',
  },
  {
    id: '4',
    sender: 'user',
    text: 'Thanks! The chair exercises were easier today.',
    time: '11:05 AM',
  },
];

// Quick reply options
export const QUICK_REPLIES = [
  'Thanks!',
  'Need help',
  'Feeling good',
  'Exercise completed',
  'Too difficult',
  'Will try later',
];
