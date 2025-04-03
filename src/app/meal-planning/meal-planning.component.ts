import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-planning',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="meal-planning">
      <h2>Meal Planning</h2>
      
      <div class="weekly-calendar">
        <div class="calendar-header">
          <button class="nav-btn"><span class="material-icons">chevron_left</span></button>
          <h3>Week of March 18, 2024</h3>
          <button class="nav-btn"><span class="material-icons">chevron_right</span></button>
        </div>
        
        <div class="days-grid">
          <div *ngFor="let day of days; let i = index" class="day-column">
            <div class="day-header">
              <span class="day-name">{{day}}</span>
              <span class="date">{{18 + i}}</span>
            </div>
            <div class="meal-slots">
              <div class="meal-slot breakfast">
                <span class="meal-type">Breakfast</span>
                <div class="meal-placeholder">
                  <span class="material-icons">add</span>
                  <span>Add meal</span>
                </div>
              </div>
              <div class="meal-slot lunch">
                <span class="meal-type">Lunch</span>
                <div class="meal-placeholder">
                  <span class="material-icons">add</span>
                  <span>Add meal</span>
                </div>
              </div>
              <div class="meal-slot dinner">
                <span class="meal-type">Dinner</span>
                <div class="meal-placeholder">
                  <span class="material-icons">add</span>
                  <span>Add meal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="meal-templates">
        <h3>Meal Templates</h3>
        <div class="template-grid">
          <div class="template-card">
            <div class="template-header">
              <h4>Healthy Breakfast Bowl</h4>
              <span class="calories">450 kcal</span>
            </div>
            <p>Oatmeal, banana, almonds, honey</p>
            <button class="use-template-btn">Use Template</button>
          </div>
          <div class="template-card">
            <div class="template-header">
              <h4>Protein Lunch</h4>
              <span class="calories">650 kcal</span>
            </div>
            <p>Grilled chicken, quinoa, vegetables</p>
            <button class="use-template-btn">Use Template</button>
          </div>
          <div class="template-card">
            <div class="template-header">
              <h4>Light Dinner</h4>
              <span class="calories">400 kcal</span>
            </div>
            <p>Salmon, sweet potato, broccoli</p>
            <button class="use-template-btn">Use Template</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .meal-planning {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .weekly-calendar {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .calendar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    .nav-btn {
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      color: #666;
    }

    .days-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1rem;
      min-height: 500px;
    }

    .day-column {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
    }

    .day-header {
      background: #f8f9fa;
      padding: 0.75rem;
      text-align: center;
      border-bottom: 1px solid #e0e0e0;
    }

    .day-name {
      display: block;
      font-weight: 500;
      color: #2c3e50;
    }

    .date {
      font-size: 0.9rem;
      color: #666;
    }

    .meal-slots {
      padding: 0.5rem;
    }

    .meal-slot {
      padding: 0.5rem;
      border: 1px dashed #ccc;
      border-radius: 6px;
      margin-bottom: 0.5rem;
      min-height: 80px;
    }

    .meal-type {
      display: block;
      font-size: 0.8rem;
      color: #666;
      margin-bottom: 0.5rem;
    }

    .meal-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #999;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .meal-placeholder:hover {
      color: #3498db;
    }

    .meal-templates {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      padding: 1.5rem;
    }

    .template-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }

    .template-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1rem;
      transition: all 0.3s ease;
    }

    .template-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .template-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .template-header h4 {
      margin: 0;
      color: #2c3e50;
    }

    .calories {
      font-size: 0.9rem;
      color: #666;
    }

    .use-template-btn {
      width: 100%;
      margin-top: 1rem;
      background: linear-gradient(45deg, #3498db, #2980b9);
      color: white;
      border: none;
      padding: 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .use-template-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(41, 128, 185, 0.3);
    }
  `]
})
export class MealPlanningComponent {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}