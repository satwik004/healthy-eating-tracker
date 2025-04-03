export interface Food {
  _id: string;
  name: string;
  description?: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
  servingSize: number;
  servingUnit: string;
  category: string;
  tags?: string[];
  imageUrl?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Meal {
  _id: string;
  userId: string;
  name: string;
  description?: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  date: Date;
  foods: MealFood[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  totalFiber: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MealFood {
  foodId: string;
  food: Food;
  quantity: number;
  unit: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
}

export interface MealPlan {
  _id: string;
  userId: string;
  date: Date;
  meals: {
    breakfast?: Meal;
    lunch?: Meal;
    dinner?: Meal;
    snacks?: Meal[];
  };
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  totalFiber: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoodLog {
  _id: string;
  userId: string;
  date: Date;
  meals: Meal[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  totalFiber: number;
  waterIntake?: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
} 