import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <div class="overview-cards">
        <div class="card calories-card">
          <h3>Daily Calories</h3>
          <canvas #caloriesChart></canvas>
          <div class="progress-info">
            <span>1,500 / 2,000 kcal</span>
            <span class="percentage">75%</span>
          </div>
        </div>
        
        <div class="card macros-card">
          <h3>Macronutrients</h3>
          <canvas #macrosChart></canvas>
          <div class="macros-legend">
            <div class="macro-item">
              <span class="dot protein"></span>
              <span>Protein: 25%</span>
            </div>
            <div class="macro-item">
              <span class="dot carbs"></span>
              <span>Carbs: 50%</span>
            </div>
            <div class="macro-item">
              <span class="dot fats"></span>
              <span>Fats: 25%</span>
            </div>
          </div>
        </div>

        <div class="card water-card">
          <h3>Water Intake</h3>
          <div class="water-tracker">
            <div class="water-level" style="height: 60%"></div>
            <span>6/10 glasses</span>
          </div>
        </div>
      </div>

      <div class="quick-actions">
        <button class="add-meal-btn">
          <span class="material-icons">add</span>
          Quick Add Meal
        </button>
      </div>

      <div class="streak-calendar">
        <h3>Logging Streak</h3>
        <div class="calendar-grid">
          <div *ngFor="let day of weekDays; let i = index" 
               class="day-box" 
               [class.completed]="i < 5">
            <span>{{day}}</span>
          </div>
        </div>
        <p class="streak-text">Current streak: 5 days! 🔥</p>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .overview-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .card h3 {
      margin-top: 0;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .water-tracker {
      height: 200px;
      width: 60px;
      margin: 0 auto;
      background: #f0f0f0;
      border-radius: 30px;
      position: relative;
      overflow: hidden;
    }

    .water-level {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(180deg, #3498db, #2980b9);
      transition: height 0.3s ease;
    }

    .quick-actions {
      margin-bottom: 2rem;
    }

    .add-meal-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      background: linear-gradient(45deg, #3498db, #2980b9);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .add-meal-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(41, 128, 185, 0.3);
    }

    .streak-calendar {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .day-box {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f0f0f0;
      border-radius: 8px;
      font-weight: bold;
      color: #666;
    }

    .day-box.completed {
      background: #2ecc71;
      color: white;
    }

    .streak-text {
      text-align: center;
      color: #2c3e50;
      font-weight: bold;
      margin: 1rem 0 0;
    }

    .macros-legend {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .macro-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .dot.protein { background: #3498db; }
    .dot.carbs { background: #2ecc71; }
    .dot.fats { background: #f1c40f; }
  `]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('caloriesChart') caloriesChartRef!: ElementRef;
  @ViewChild('macrosChart') macrosChartRef!: ElementRef;

  weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  private caloriesChart: Chart | null = null;
  private macrosChart: Chart | null = null;

  ngOnInit() {
    // Any initialization logic that doesn't depend on view elements
  }

  ngAfterViewInit() {
    this.initializeCharts();
  }

  private initializeCharts() {
    // Initialize calories chart
    const caloriesCtx = this.caloriesChartRef.nativeElement.getContext('2d');
    this.caloriesChart = new Chart(caloriesCtx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [75, 25],
          backgroundColor: ['#3498db', '#f0f0f0']
        }]
      },
      options: {
        cutout: '80%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    // Initialize macros chart
    const macrosCtx = this.macrosChartRef.nativeElement.getContext('2d');
    this.macrosChart = new Chart(macrosCtx, {
      type: 'pie',
      data: {
        labels: ['Protein', 'Carbs', 'Fats'],
        datasets: [{
          data: [25, 50, 25],
          backgroundColor: ['#3498db', '#2ecc71', '#f1c40f']
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  ngOnDestroy() {
    // Clean up charts when component is destroyed
    if (this.caloriesChart) {
      this.caloriesChart.destroy();
    }
    if (this.macrosChart) {
      this.macrosChart.destroy();
    }
  }
}