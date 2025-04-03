import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-page">
      <h2>Progress & Reports</h2>

      <div class="charts-grid">
        <div class="chart-card">
          <h3>Weekly Calorie Intake</h3>
          <canvas #weeklyCalories></canvas>
        </div>

        <div class="chart-card">
          <h3>Nutrient Balance</h3>
          <canvas #nutrientBalance></canvas>
        </div>

        <div class="chart-card achievements">
          <h3>Achievements</h3>
          <div class="achievement-grid">
            <div class="achievement-card">
              <span class="material-icons achievement-icon">star</span>
              <h4>Perfect Week</h4>
              <p>Logged meals for 7 days straight</p>
            </div>
            <div class="achievement-card locked">
              <span class="material-icons achievement-icon">fitness_center</span>
              <h4>Protein Master</h4>
              <p>Hit protein goals for 30 days</p>
            </div>
            <div class="achievement-card">
              <span class="material-icons achievement-icon">local_drink</span>
              <h4>Hydration Hero</h4>
              <p>Met water intake goal for 5 days</p>
            </div>
          </div>
        </div>

        <div class="chart-card">
          <h3>Monthly Overview</h3>
          <canvas #monthlyOverview></canvas>
        </div>
      </div>

      <div class="stats-summary">
        <div class="stat-card">
          <h4>Average Daily Calories</h4>
          <p class="stat-value">2,145</p>
          <span class="trend positive">↑ 2% from last week</span>
        </div>
        <div class="stat-card">
          <h4>Protein Goal Achievement</h4>
          <p class="stat-value">85%</p>
          <span class="trend positive">↑ 5% from last week</span>
        </div>
        <div class="stat-card">
          <h4>Meal Logging Streak</h4>
          <p class="stat-value">12 days</p>
          <span class="trend">Personal best!</span>
        </div>
        <div class="stat-card">
          <h4>Water Intake</h4>
          <p class="stat-value">2.8L</p>
          <span class="trend negative">↓ 0.2L from last week</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .progress-page {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .chart-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .chart-card h3 {
      margin-top: 0;
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .achievement-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .achievement-card {
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .achievement-card:hover {
      transform: translateY(-5px);
    }

    .achievement-card.locked {
      background: linear-gradient(135deg, #95a5a6, #7f8c8d);
      opacity: 0.7;
    }

    .achievement-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .achievement-card h4 {
      margin: 0.5rem 0;
      color: white;
    }

    .achievement-card p {
      margin: 0;
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .stats-summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
    }

    .stat-card h4 {
      margin: 0;
      color: #2c3e50;
      font-size: 1.1rem;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #2c3e50;
      margin: 1rem 0;
    }

    .trend {
      font-size: 0.9rem;
      color: #666;
    }

    .trend.positive {
      color: #27ae60;
    }

    .trend.negative {
      color: #c0392b;
    }
  `]
})
export class ProgressComponent implements OnInit {
  ngOnInit() {
    this.initializeCharts();
  }

  initializeCharts() {
    // Weekly Calories Chart
    const weeklyCalories = document.querySelector('#weeklyCalories') as HTMLCanvasElement;
    new Chart(weeklyCalories, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Calories',
          data: [2100, 1950, 2200, 2000, 1800, 2300, 2150],
          borderColor: '#3498db',
          tension: 0.4,
          fill: true,
          backgroundColor: 'rgba(52, 152, 219, 0.1)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    // Nutrient Balance Chart
    const nutrientBalance = document.querySelector('#nutrientBalance') as HTMLCanvasElement;
    new Chart(nutrientBalance, {
      type: 'radar',
      data: {
        labels: ['Protein', 'Carbs', 'Fats', 'Fiber', 'Vitamins', 'Minerals'],
        datasets: [{
          label: 'Current',
          data: [85, 75, 80, 70, 90, 85],
          borderColor: '#3498db',
          backgroundColor: 'rgba(52, 152, 219, 0.2)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });

    // Monthly Overview Chart
    const monthlyOverview = document.querySelector('#monthlyOverview') as HTMLCanvasElement;
    new Chart(monthlyOverview, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Calories',
            data: [14500, 15200, 14800, 15500],
            backgroundColor: '#3498db'
          },
          {
            label: 'Protein (g)',
            data: [420, 450, 430, 460],
            backgroundColor: '#2ecc71'
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}