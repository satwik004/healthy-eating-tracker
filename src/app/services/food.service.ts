import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food, Meal, MealPlan, FoodLog } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private readonly API_URL = 'http://localhost:5050/api/food';

  constructor(private http: HttpClient) {}

  // Food operations
  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.API_URL}/foods`);
  }

  getFoodById(id: string): Observable<Food> {
    return this.http.get<Food>(`${this.API_URL}/foods/${id}`);
  }

  createFood(food: Omit<Food, '_id'>): Observable<Food> {
    return this.http.post<Food>(`${this.API_URL}/foods`, food);
  }

  updateFood(id: string, food: Partial<Food>): Observable<Food> {
    return this.http.put<Food>(`${this.API_URL}/foods/${id}`, food);
  }

  deleteFood(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/foods/${id}`);
  }

  // Meal operations
  getMeals(userId: string, date: Date): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.API_URL}/meals`, {
      params: {
        userId,
        date: date.toISOString()
      }
    });
  }

  createMeal(meal: Omit<Meal, '_id'>): Observable<Meal> {
    return this.http.post<Meal>(`${this.API_URL}/meals`, meal);
  }

  updateMeal(id: string, meal: Partial<Meal>): Observable<Meal> {
    return this.http.put<Meal>(`${this.API_URL}/meals/${id}`, meal);
  }

  deleteMeal(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/meals/${id}`);
  }

  // Meal plan operations
  getMealPlan(userId: string, date: Date): Observable<MealPlan> {
    return this.http.get<MealPlan>(`${this.API_URL}/meal-plans`, {
      params: {
        userId,
        date: date.toISOString()
      }
    });
  }

  createMealPlan(plan: Omit<MealPlan, '_id'>): Observable<MealPlan> {
    return this.http.post<MealPlan>(`${this.API_URL}/meal-plans`, plan);
  }

  updateMealPlan(id: string, plan: Partial<MealPlan>): Observable<MealPlan> {
    return this.http.put<MealPlan>(`${this.API_URL}/meal-plans/${id}`, plan);
  }

  deleteMealPlan(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/meal-plans/${id}`);
  }

  // Food log operations
  getFoodLog(userId: string, date: Date): Observable<FoodLog> {
    return this.http.get<FoodLog>(`${this.API_URL}/food-logs`, {
      params: {
        userId,
        date: date.toISOString()
      }
    });
  }

  createFoodLog(log: Omit<FoodLog, '_id'>): Observable<FoodLog> {
    return this.http.post<FoodLog>(`${this.API_URL}/food-logs`, log);
  }

  updateFoodLog(id: string, log: Partial<FoodLog>): Observable<FoodLog> {
    return this.http.put<FoodLog>(`${this.API_URL}/food-logs/${id}`, log);
  }

  deleteFoodLog(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/food-logs/${id}`);
  }
} 