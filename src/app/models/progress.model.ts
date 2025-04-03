export interface Progress {
  _id: string;
  userId: string;
  date: Date;
  weight?: number;
  bodyFatPercentage?: number;
  muscleMassPercentage?: number;
  measurements?: {
    chest?: number;
    waist?: number;
    hips?: number;
    arms?: number;
    legs?: number;
    neck?: number;
  };
  photos?: {
    front?: string;
    back?: string;
    side?: string;
  };
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Goal {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  type: 'weight' | 'bodyFat' | 'muscleMass' | 'measurements' | 'custom';
  target: {
    value: number;
    unit: string;
  };
  startDate: Date;
  targetDate: Date;
  status: 'active' | 'completed' | 'abandoned';
  progress?: {
    currentValue: number;
    percentage: number;
  };
  milestones?: {
    date: Date;
    targetValue: number;
    achieved: boolean;
  }[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProgressStats {
  userId: string;
  startDate: Date;
  endDate: Date;
  weightChange?: number;
  bodyFatChange?: number;
  muscleMassChange?: number;
  measurementChanges?: {
    chest?: number;
    waist?: number;
    hips?: number;
    arms?: number;
    legs?: number;
    neck?: number;
  };
  averageCalories?: number;
  averageProtein?: number;
  averageCarbs?: number;
  averageFat?: number;
  averageFiber?: number;
  workoutsCompleted?: number;
  goalsAchieved?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Workout {
  _id?: string;
  userId: string;
  date: Date;
  type: string;
  duration: number; // in minutes
  caloriesBurned: number;
  exercises: {
    name: string;
    sets: number;
    reps: number;
    weight?: number;
    duration?: number;
    notes?: string;
  }[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkoutPlan {
  _id?: string;
  userId: string;
  name: string;
  description: string;
  type: 'strength' | 'cardio' | 'flexibility' | 'custom';
  frequency: string; // e.g., "3 times per week"
  exercises: {
    name: string;
    sets: number;
    reps: number;
    weight?: number;
    duration?: number;
    notes?: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
} 