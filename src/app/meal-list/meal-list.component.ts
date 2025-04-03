import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meal } from '../models/food.model';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="meal-list">
      <h2>My Meals</h2>
      <div class="meals">
        <div *ngFor="let meal of meals" class="meal-card">
          <h3>{{ meal.name }}</h3>
          <div class="meal-details">
            <p><span>Type:</span> <span>{{ meal.type }}</span></p>
            <p><span>Calories:</span> <span>{{ meal.totalCalories }}</span></p>
            <p><span>Protein:</span> <span>{{ meal.totalProtein }}g</span></p>
            <p><span>Carbs:</span> <span>{{ meal.totalCarbs }}g</span></p>
            <p><span>Fat:</span> <span>{{ meal.totalFat }}g</span></p>
            <p><span>Fiber:</span> <span>{{ meal.totalFiber }}g</span></p>
          </div>
          <button (click)="deleteMeal(meal._id)">Delete</button>
        </div>
      </div>
      <button (click)="addMeal()">Add Meal</button>
    </div>
  `,
  styles: [`
    .meal-list {
      padding: 1rem;
    }

    .meals {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      margin: 1rem 0;
    }

    .meal-card {
      background: white;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .meal-details {
      margin: 1rem 0;
    }

    .meal-details p {
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0;
    }

    button {
      background: #3498db;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background: #2980b9;
    }
  `]
})
export class MealListComponent {
  meals: Meal[] = [
    {
      _id: '1',
      userId: '1',
      name: 'Breakfast',
      type: 'breakfast',
      foods: [],
      totalCalories: 150,
      totalProtein: 5,
      totalCarbs: 27,
      totalFat: 3,
      totalFiber: 4,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  addMeal() {
    const newMeal: Meal = {
      _id: Date.now().toString(),
      userId: '1', // This should come from the authenticated user
      name: 'New Meal',
      type: 'snack',
      foods: [],
      totalCalories: 0,
      totalProtein: 0,
      totalCarbs: 0,
      totalFat: 0,
      totalFiber: 0,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.meals.push(newMeal);
  }

  deleteMeal(_id: string) {
    this.meals = this.meals.filter(meal => meal._id !== _id);
  }
}