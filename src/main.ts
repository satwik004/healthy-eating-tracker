import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './app/components/header/header.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { MealListComponent } from './app/meal-list/meal-list.component';
import { MealPlanningComponent } from './app/meal-planning/meal-planning.component';
import { ProgressComponent } from './app/progress/progress.component';
import { LoginComponent } from './app/auth/login/login.component';
import { SignupComponent } from './app/auth/signup/signup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <app-header *ngIf="showHeader"></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule]
})
export class App {
  showHeader = true;
}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'food-log', component: MealListComponent },
  { path: 'meal-planning', component: MealPlanningComponent },
  { path: 'progress', component: ProgressComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient()
  ]
}).catch(err => console.error(err));