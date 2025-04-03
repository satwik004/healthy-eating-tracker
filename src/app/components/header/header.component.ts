import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="logo">
        <h1>HealthyEats</h1>
      </div>
      <nav class="nav-menu">
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/food-log" routerLinkActive="active">Log Food</a>
        <a routerLink="/meal-planning" routerLinkActive="active">Meal Planning</a>
        <a routerLink="/progress" routerLinkActive="active">Progress</a>
      </nav>
      <div class="profile">
        <a routerLink="/login" class="login-button">
          <span class="material-icons">account_circle</span>
          <span>Login</span>
        </a>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .logo h1 {
      color: #2c3e50;
      margin: 0;
      font-size: 1.5rem;
    }

    .nav-menu {
      display: flex;
      gap: 2rem;
    }

    .nav-menu a {
      color: #666;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .nav-menu a:hover, .nav-menu a.active {
      color: #3498db;
      background: rgba(52, 152, 219, 0.1);
    }

    .login-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(45deg, #3498db, #2980b9);
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .login-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(41, 128, 185, 0.3);
    }

    .login-button span {
      font-size: 1rem;
    }
  `]
})
export class HeaderComponent {}