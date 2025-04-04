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
// src/lib/constants.ts

export const SAMPLE_EXERCISES = {
  balance: [
    {
      id: "balance-1",
      name: "Single-Leg Stand",
      category: "balance",
      difficulty: "beginner",
      duration: 5,
      equipment: "None",
      description: "Improve your balance by standing on one leg at a time.",
      benefits: "Improves stability and reduces fall risk",
      instructions: [
        "Stand behind a sturdy chair, holding onto the back for support",
        "Lift one foot off the ground, bending the knee slightly",
        "Hold the position for 10-30 seconds",
        "Repeat with the other leg",
        "Complete 2-3 sets on each side"
      ],
      modifications: [
        "For more support, keep fingertips on the chair",
        "For more challenge, try without holding onto the chair",
        "Advanced: Close your eyes while balancing"
      ],
      videoId: "dummyVideo1"
    },
    {
      id: "balance-2",
      name: "Heel-to-Toe Walk",
      category: "balance",
      difficulty: "beginner",
      duration: 5,
      equipment: "None",
      description: "Walk by placing your heel directly in front of the toes of your other foot.",
      benefits: "Improves dynamic balance and coordination",
      instructions: [
        "Stand near a wall or countertop for support if needed",
        "Place your right heel directly in front of the toes of your left foot",
        "Then place your left heel directly in front of the toes of your right foot",
        "Continue for 15-20 steps",
        "Repeat 2-3 times"
      ],
      modifications: [
        "Use a wall or railing for support",
        "For more challenge, try with arms crossed over chest",
        "Advanced: Try walking backward heel-to-toe"
      ],
      videoId: "dummyVideo2"
    },
    {
      id: "balance-3",
      name: "Tai Chi Weight Shifting",
      category: "balance",
      difficulty: "intermediate",
      duration: 8,
      equipment: "None",
      description: "Gentle shifting of weight from one leg to another in a controlled manner.",
      benefits: "Improves balance, body awareness, and reduces stress",
      instructions: [
        "Stand with feet shoulder-width apart, knees slightly bent",
        "Slowly shift your weight to the right leg",
        "Lift your left foot slightly off the ground",
        "Hold for 3-5 seconds",
        "Slowly shift weight to the left leg and lift right foot",
        "Continue alternating for 1-2 minutes"
      ],
      modifications: [
        "Keep both feet on the ground initially",
        "Hold onto a chair for support if needed",
        "Advanced: Add arm movements as you shift weight"
      ],
      videoId: "dummyVideo3"
    },
    {
      id: "balance-4",
      name: "Balance Board Training",
      category: "balance",
      difficulty: "advanced",
      duration: 10,
      equipment: "Balance board or cushion",
      description: "Stand on an unstable surface to challenge and improve your balance.",
      benefits: "Significantly improves proprioception and stability",
      instructions: [
        "Place the balance board on a non-slip surface",
        "Step onto the board with feet shoulder-width apart",
        "Try to maintain balance for 30 seconds",
        "Rest and repeat 3-5 times",
        "Progress to gentle weight shifts while on the board"
      ],
      modifications: [
        "Start with a folded towel or cushion instead of a balance board",
        "Stand near a wall or counter for support",
        "Advanced: Try simple exercises like knee bends while on the board"
      ],
      videoId: "dummyVideo4"
    },
    {
      id: "balance-5",
      name: "Stability Ball Sitting",
      category: "balance",
      difficulty: "intermediate",
      duration: 7,
      equipment: "Stability ball",
      description: "Sit on a stability ball to improve core strength and balance.",
      benefits: "Strengthens core muscles and improves posture",
      instructions: [
        "Sit on a stability ball with feet flat on the floor",
        "Find your balance point with good posture",
        "Start by simply sitting for 1-2 minutes",
        "Progress to small bounces or leg lifts",
        "Practice for 5-7 minutes"
      ],
      modifications: [
        "Use a smaller ball for more stability",
        "Sit near a wall or counter for support",
        "Advanced: Try marching in place while sitting on the ball"
      ],
      videoId: "dummyVideo5"
    }
  ],
  strength: [
    {
      id: "strength-1",
      name: "Chair Squats",
      category: "strength",
      difficulty: "beginner",
      duration: 5,
      equipment: "Sturdy chair",
      description: "Lower yourself to sitting position and stand back up to strengthen legs.",
      benefits: "Builds lower body strength essential for mobility",
      instructions: [
        "Stand in front of a sturdy chair with feet shoulder-width apart",
        "Slowly lower your body toward the chair, keeping your back straight",
        "Lightly touch the chair with your bottom, then stand back up",
        "Repeat 8-12 times for 2-3 sets"
      ],
      modifications: [
        "Use chair arms for support if needed",
        "For more challenge, hold the position halfway down for 3 seconds",
        "Advanced: Hold light weights while performing the exercise"
      ],
      videoId: "dummyVideo6"
    },
    {
      id: "strength-2",
      name: "Wall Push-Ups",
      category: "strength",
      difficulty: "beginner",
      duration: 5,
      equipment: "Wall",
      description: "Modified push-ups performed against a wall to build upper body strength.",
      benefits: "Strengthens chest, shoulders, and arms with minimal joint stress",
      instructions: [
        "Stand facing a wall, about arm's length away",
        "Place your palms flat against the wall at shoulder height",
        "Bend your elbows to bring your body toward the wall",
        "Push back to the starting position",
        "Repeat 10-15 times for 2-3 sets"
      ],
      modifications: [
        "Stand closer to the wall for less resistance",
        "For more challenge, stand farther from the wall",
        "Advanced: Try with one foot slightly raised"
      ],
      videoId: "dummyVideo7"
    },
    {
      id: "strength-3",
      name: "Resistance Band Rows",
      category: "strength",
      difficulty: "intermediate",
      duration: 7,
      equipment: "Resistance band",
      description: "Pull a resistance band to strengthen back and arm muscles.",
      benefits: "Improves posture and strengthens upper back",
      instructions: [
        "Secure a resistance band to a doorknob or sturdy object",
        "Hold the ends with both hands and step back until there's tension",
        "Pull the band toward your body, squeezing shoulder blades together",
        "Slowly return to starting position",
        "Complete 10-12 repetitions for 2-3 sets"
      ],
      modifications: [
        "Use a lighter resistance band if needed",
        "Sit in a chair to perform the exercise if standing is difficult",
        "Advanced: Use a stronger band or perform single-arm rows"
      ],
      videoId: "dummyVideo8"
    },
    {
      id: "strength-4",
      name: "Ankle Weights Leg Lifts",
      category: "strength",
      difficulty: "intermediate",
      duration: 8,
      equipment: "Ankle weights (optional)",
      description: "Lift legs with ankle weights to strengthen hip and leg muscles.",
      benefits: "Targets hip stabilizers and improves leg strength",
      instructions: [
        "Stand behind a sturdy chair for support",
        "Attach ankle weights if available",
        "Slowly lift one leg to the side, keeping it straight",
        "Hold for 2-3 seconds, then lower",
        "Complete 10 repetitions, then switch legs",
        "Perform 2-3 sets on each leg"
      ],
      modifications: [
        "Start without weights if needed",
        "Reduce range of motion if you feel discomfort",
        "Advanced: Increase weight or hold the lifted position longer"
      ],
      videoId: "dummyVideo9"
    },
    {
      id: "strength-5",
      name: "Bicep Curls with Light Weights",
      category: "strength",
      difficulty: "beginner",
      duration: 5,
      equipment: "Light dumbbells or water bottles",
      description: "Curl weights toward shoulders to strengthen arm muscles.",
      benefits: "Builds arm strength for daily activities",
      instructions: [
        "Sit or stand with good posture",
        "Hold weights with arms extended, palms facing forward",
        "Bend at the elbows to bring weights toward shoulders",
        "Slowly lower back to starting position",
        "Complete 10-12 repetitions for 2-3 sets"
      ],
      modifications: [
        "Use lighter weights or no weights",
        "Perform one arm at a time if needed",
        "Advanced: Try alternating arms or holding at the top position"
      ],
      videoId: "dummyVideo10"
    },
    {
      id: "strength-6",
      name: "Core Strengthening",
      category: "strength",
      difficulty: "intermediate",
      duration: 7,
      equipment: "Mat",
      description: "Gentle exercises to strengthen the core muscles.",
      benefits: "Improves stability, posture, and reduces back pain",
      instructions: [
        "Lie on your back with knees bent, feet flat on the floor",
        "Tighten your abdominal muscles",
        "Hold for 5 seconds, then release",
        "Repeat 10 times",
        "Progress to gentle leg slides or marches"
      ],
      modifications: [
        "Support head with a small pillow if needed",
        "Keep movements small and controlled",
        "Advanced: Try bird-dog exercise (opposite arm/leg extensions)"
      ],
      videoId: "dummyVideo11"
    }
  ],
  flexibility: [
    {
      id: "flexibility-1",
      name: "Seated Hamstring Stretch",
      category: "flexibility",
      difficulty: "beginner",
      duration: 5,
      equipment: "Chair",
      description: "Stretch the back of your legs while seated for improved flexibility.",
      benefits: "Reduces muscle tension and improves range of motion",
      instructions: [
        "Sit on the edge of a chair with one leg extended, heel on floor",
        "Keep your back straight",
        "Gently lean forward from the hips until you feel a stretch",
        "Hold for 20-30 seconds",
        "Repeat on the other leg",
        "Complete 2-3 stretches per leg"
      ],
      modifications: [
        "Bend the extended leg slightly if needed",
        "Use a strap around the foot for easier reach",
        "Advanced: Reach for your toes if flexibility allows"
      ],
      videoId: "dummyVideo12"
    },
    {
      id: "flexibility-2",
      name: "Standing Calf Stretch",
      category: "flexibility",
      difficulty: "beginner",
      duration: 4,
      equipment: "Wall",
      description: "Stretch your calf muscles while standing for better ankle mobility.",
      benefits: "Improves ankle flexibility and walking gait",
      instructions: [
        "Stand facing a wall with hands at shoulder height",
        "Step one foot back, keeping it straight with heel on the floor",
        "Bend the front knee slightly",
        "Feel the stretch in the back leg's calf",
        "Hold for 20-30 seconds",
        "Switch legs and repeat",
        "Complete 2-3 stretches per leg"
      ],
      modifications: [
        "Take a smaller step back for a gentler stretch",
        "Hold onto a chair for balance if needed",
        "Advanced: Perform on a step with heel hanging off the edge"
      ],
      videoId: "dummyVideo13"
    },
    {
      id: "flexibility-3",
      name: "Shoulder Rolls and Stretches",
      category: "flexibility",
      difficulty: "beginner",
      duration: 3,
      equipment: "None",
      description: "Gentle movements to improve shoulder mobility and reduce tension.",
      benefits: "Relieves upper body tension and improves posture",
      instructions: [
        "Sit or stand with good posture",
        "Roll shoulders forward 5 times, then backward 5 times",
        "Bring one arm across your chest, hold with opposite hand",
        "Hold for 15-20 seconds, then switch arms",
        "Repeat 2-3 times per arm"
      ],
      modifications: [
        "Perform smaller movements if you feel discomfort",
        "Support the stretching arm below the elbow",
        "Advanced: Add gentle neck stretches"
      ],
      videoId: "dummyVideo14"
    },
    {
      id: "flexibility-4",
      name: "Neck Mobility Exercises",
      category: "flexibility",
      difficulty: "beginner",
      duration: 3,
      equipment: "None",
      description: "Gentle movements to improve neck flexibility and reduce stiffness.",
      benefits: "Reduces neck tension and improves range of motion",
      instructions: [
        "Sit with good posture, shoulders relaxed",
        "Slowly turn head to look over right shoulder",
        "Hold for 5 seconds, return to center",
        "Turn to look over left shoulder",
        "Repeat 5 times each side",
        "Then gently tilt ear toward each shoulder"
      ],
      modifications: [
        "Use smaller ranges of motion if needed",
        "Support head with hand for gentler stretch",
        "Advanced: Add diagonal neck stretches"
      ],
      videoId: "dummyVideo15"
    },
    {
      id: "flexibility-5",
      name: "Hip Flexor Stretch",
      category: "flexibility",
      difficulty: "intermediate",
      duration: 5,
      equipment: "Chair",
      description: "Stretch the front of your hips to improve mobility and reduce stiffness.",
      benefits: "Improves hip mobility and reduces lower back tension",
      instructions: [
        "Stand beside a sturdy chair for support",
        "Step one foot back into a split stance",
        "Bend front knee slightly, keeping back leg straight",
        "Tuck pelvis under slightly to feel stretch in front of back hip",
        "Hold for 20-30 seconds",
        "Switch legs and repeat",
        "Complete 2-3 stretches per side"
      ],
      modifications: [
        "Take a smaller step back for less intensity",
        "Use two chairs for support if needed",
        "Advanced: Add a gentle torso rotation toward the front leg"
      ],
      videoId: "dummyVideo16"
    }
  ],
  walking: [
    {
      id: "walking-1",
      name: "Indoor Walking Circuit",
      category: "walking",
      difficulty: "beginner",
      duration: 10,
      equipment: "None",
      description: "Walk indoors following a set path to improve endurance safely.",
      benefits: "Builds stamina and maintains mobility in a controlled environment",
      instructions: [
        "Map out a circuit in your home (e.g., around furniture, through rooms)",
        "Start with 5 minutes of walking at a comfortable pace",
        "Include 2-3 stops for simple exercises (e.g., marching in place)",
        "Gradually increase duration to 10-15 minutes",
        "Complete the circuit 1-2 times"
      ],
      modifications: [
        "Use furniture for support as needed",
        "Take rest breaks when necessary",
        "Advanced: Add arm movements or light weights while walking"
      ],
      videoId: "dummyVideo17"
    },
    {
      id: "walking-2",
      name: "Outdoor Nature Walk",
      category: "walking",
      difficulty: "beginner",
      duration: 15,
      equipment: "Supportive shoes",
      description: "Walk outdoors in nature at a comfortable pace.",
      benefits: "Combines physical activity with mental well-being benefits of nature",
      instructions: [
        "Choose a flat, even path in a park or garden",
        "Start with 5 minutes of gentle walking to warm up",
        "Maintain a comfortable pace for 10-15 minutes",
        "Focus on deep breathing and observing nature",
        "Cool down with 5 minutes of slower walking"
      ],
      modifications: [
        "Use a walking stick or walker if needed",
        "Choose paths with benches for rest breaks",
        "Advanced: Include gentle inclines or longer duration"
      ],
      videoId: "dummyVideo18"
    },
    {
      id: "walking-3",
      name: "Interval Walking",
      category: "walking",
      difficulty: "intermediate",
      duration: 20,
      equipment: "Timer or watch",
      description: "Alternate between faster and slower walking periods.",
      benefits: "Improves cardiovascular fitness and walking efficiency",
      instructions: [
        "Warm up with 5 minutes of gentle walking",
        "Walk at a slightly faster pace for 1 minute",
        "Return to normal pace for 2 minutes",
        "Repeat this pattern 5-7 times",
        "Cool down with 5 minutes of gentle walking"
      ],
      modifications: [
        "Adjust the interval timing (e.g., 30 seconds fast, 2 minutes recovery)",
        "Define 'faster' based on your ability level",
        "Advanced: Increase the number of intervals or speed difference"
      ],
      videoId: "dummyVideo19"
    },
    {
      id: "walking-4",
      name: "Walking with Direction Changes",
      category: "walking",
      difficulty: "intermediate",
      duration: 15,
      equipment: "Cones or markers (optional)",
      description: "Walk with planned direction changes to improve agility and balance.",
      benefits: "Enhances coordination and prepares for real-world navigation challenges",
      instructions: [
        "Set up markers or identify points in your walking area",
        "Walk normally between points, changing direction at each marker",
        "Include forward, backward (if safe), and sideways walking",
        "Start with 5-7 minutes and gradually increase",
        "Focus on controlled, deliberate movements"
      ],
      modifications: [
        "Hold onto support during direction changes if needed",
        "Make smaller direction changes initially",
        "Advanced: Add stops and starts or change walking speeds"
      ],
      videoId: "dummyVideo20"
    }
  ],
  seated: [
    {
      id: "seated-1",
      name: "Seated Marching",
      category: "seated",
      difficulty: "beginner",
      duration: 5,
      equipment: "Sturdy chair",
      description: "Lift knees alternately while seated to improve leg strength.",
      benefits: "Maintains leg mobility and strength for those with standing limitations",
      instructions: [
        "Sit toward the front of a sturdy chair, back straight",
        "Hold the sides of the chair for stability if needed",
        "Lift right knee up, then lower",
        "Lift left knee up, then lower",
        "Continue alternating for 1-2 minutes",
        "Rest and repeat 2-3 times"
      ],
      modifications: [
        "Lift knees lower if needed",
        "For more challenge, hold each lift for 2-3 seconds",
        "Advanced: Add ankle weights or extend leg while lifting"
      ],
      videoId: "dummyVideo21"
    },
    {
      id: "seated-2",
      name: "Chair Yoga Poses",
      category: "seated",
      difficulty: "beginner",
      duration: 10,
      equipment: "Sturdy chair",
      description: "Gentle yoga movements performed while seated.",
      benefits: "Improves flexibility, reduces stress, and enhances body awareness",
      instructions: [
        "Sit with good posture, feet flat on the floor",
        "Perform gentle twists: place hand on opposite knee and turn",
        "Forward bends: slide hands down legs toward feet",
        "Seated cat-cow: arch and round back alternately",
        "Hold each pose for 3-5 breaths",
        "Complete the sequence 2-3 times"
      ],
      modifications: [
        "Keep movements smaller if you have limited flexibility",
        "Use chair arms for support during twists",
        "Advanced: Add arm movements or deeper stretches"
      ],
      videoId: "dummyVideo22"
    },
    {
      id: "seated-3",
      name: "Seated Arm Circles",
      category: "seated",
      difficulty: "beginner",
      duration: 3,
      equipment: "Chair",
      description: "Circular arm movements to improve shoulder mobility.",
      benefits: "Maintains upper body range of motion and reduces stiffness",
      instructions: [
        "Sit tall with feet flat on the floor",
        "Extend arms out to sides at shoulder height",
        "Make small circles with arms, 10 forward and 10 backward",
        "Rest briefly, then repeat with larger circles",
        "Complete 2-3 sets"
      ],
      modifications: [
        "Keep arms lower than shoulder height if needed",
        "Use smaller circles if you feel discomfort",
        "Advanced: Hold light weights or water bottles"
      ],
      videoId: "dummyVideo23"
    },
    {
      id: "seated-4",
      name: "Ankle and Wrist Rotations",
      category: "seated",
      difficulty: "beginner",
      duration: 3,
      equipment: "Chair",
      description: "Rotate ankles and wrists to maintain joint mobility.",
      benefits: "Improves circulation and maintains flexibility in extremities",
      instructions: [
        "Sit comfortably with good posture",
        "Extend one leg and rotate ankle 10 times in each direction",
        "Repeat with other ankle",
        "Extend arms and rotate wrists 10 times in each direction",
        "Complete 2-3 sets"
      ],
      modifications: [
        "Perform smaller rotations if needed",
        "Support leg with hands during ankle rotations if helpful",
        "Advanced: Combine with finger exercises for hand dexterity"
      ],
      videoId: "dummyVideo24"
    },
    {
      id: "seated-5",
      name: "Seated Torso Twists",
      category: "seated",
      difficulty: "beginner",
      duration: 4,
      equipment: "Chair",
      description: "Twist upper body while seated to improve core strength and spinal mobility.",
      benefits: "Enhances core engagement and maintains rotational flexibility",
      instructions: [
        "Sit toward the front of the chair, feet flat on floor",
        "Cross arms over chest or place hands on shoulders",
        "Twist upper body to the right, looking over right shoulder",
        "Return to center, then twist to the left",
        "Perform 10 twists to each side",
        "Complete 2-3 sets"
      ],
      modifications: [
        "Keep the twist smaller if you have back concerns",
        "Hold the chair with one hand for support if needed",
        "Advanced: Hold a ball or light weight while twisting"
      ],
      videoId: "dummyVideo25"
    }
  ]
};

export const SAMPLE_MESSAGES = [
  {
    id: "msg1",
    sender: "supporter",
    text: "I noticed you completed all your exercises yesterday. Great job keeping up with your routine!",
    timestamp: "2023-10-15T09:30:00"
  },
  {
    id: "msg2",
    sender: "user",
    text: "Thanks! The balance exercises are getting easier. I think I'm making progress.",
    timestamp: "2023-10-15T10:15:00"
  },
  {
    id: "msg3",
    sender: "supporter",
    text: "That's wonderful to hear! Would you like to try adding the intermediate balance exercise this week?",
    timestamp: "2023-10-15T10:30:00"
  },
  {
    id: "msg4",
    sender: "user",
    text: "I think I could try that. Maybe on Thursday when you're visiting?",
    timestamp: "2023-10-15T11:00:00"
  },
  {
    id: "msg5",
    sender: "supporter",
    text: "Perfect! I'll be there around 2pm. We can do it together. 👍",
    timestamp: "2023-10-15T11:15:00"
  }
];

export const QUICK_REPLIES = [
  "Great job!",
  "Keep it up!",
  "I'm proud of you!",
  "How did it go today?",
  "Need any help?",
  "Let's do this together next time"
];

export const SAMPLE_ACHIEVEMENTS = [
  {
    id: "ach1",
    title: "First Steps",
    description: "Completed your first exercise session",
    unlocked: true,
    date: "2023-09-28"
  },
  {
    id: "ach2",
    title: "Consistency Champion",
    description: "Completed exercises 3 days in a row",
    unlocked: true,
    date: "2023-10-05"
  },
  {
    id: "ach3",
    title: "Balance Master",
    description: "Completed all beginner balance exercises",
    unlocked: true,
    date: "2023-10-12"
  },
  {
    id: "ach4",
    title: "Strength Builder",
    description: "Completed 10 strength training sessions",
    unlocked: false
  },
  {
    id: "ach5",
    title: "Flexibility Guru",
    description: "Reached intermediate level in flexibility exercises",
    unlocked: false
  }
];

export const SAMPLE_PROGRESS = {
  weeklyActivity: [3, 4, 2, 5, 4, 3, 2], // Days of the week (Sun-Sat)
  monthlyCompletion: 68, // Percentage
  streakDays: 3,
  exercisesByCategory: {
    balance: 12,
    strength: 8,
    flexibility: 10,
    walking: 14,
    seated: 6
  },
  recentMilestones: [
    "Increased walking duration to 15 minutes",
    "Progressed to intermediate balance exercises",
    "Completed first chair yoga session"
  ]
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

