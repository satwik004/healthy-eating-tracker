export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  lastLogin?: Date;
  isActive: boolean;
  profile?: {
    height?: number;
    weight?: number;
    age?: number;
    gender?: 'male' | 'female' | 'other';
    activityLevel?: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
    goals?: string[];
  };
  preferences?: {
    dailyCalories?: number;
    macroSplit?: {
      protein: number;
      carbs: number;
      fats: number;
    };
    mealReminders?: boolean;
    waterReminders?: boolean;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

export interface UserProfile {
  userId: string;
  bio?: string;
  avatar?: string;
  height?: number;
  weight?: number;
  dateOfBirth?: Date;
  gender?: string;
  activityLevel?: string;
  dietaryRestrictions?: string[];
  healthConditions?: string[];
  goals?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  language: string;
  timezone: string;
  measurementSystem: 'metric' | 'imperial';
}

export interface UserSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  privacySettings: {
    profileVisibility: 'public' | 'private' | 'friends';
    progressVisibility: 'public' | 'private' | 'friends';
  };
  dietaryPreferences: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
  };
} 