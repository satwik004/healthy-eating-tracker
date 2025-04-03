import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Progress, Goal } from '../models/progress.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private readonly API_URL = 'http://localhost:5050/api/progress';

  constructor(private http: HttpClient) {}

  // Progress operations
  getProgress(userId: string, date: Date): Observable<Progress> {
    return this.http.get<Progress>(`${this.API_URL}/progress`, {
      params: {
        userId,
        date: date.toISOString()
      }
    });
  }

  createProgress(progress: Omit<Progress, '_id'>): Observable<Progress> {
    return this.http.post<Progress>(`${this.API_URL}/progress`, progress);
  }

  updateProgress(id: string, progress: Partial<Progress>): Observable<Progress> {
    return this.http.put<Progress>(`${this.API_URL}/progress/${id}`, progress);
  }

  deleteProgress(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/progress/${id}`);
  }

  // Goal operations
  getGoals(userId: string): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${this.API_URL}/goals`, {
      params: { userId }
    });
  }

  getGoalById(id: string): Observable<Goal> {
    return this.http.get<Goal>(`${this.API_URL}/goals/${id}`);
  }

  createGoal(goal: Omit<Goal, '_id'>): Observable<Goal> {
    return this.http.post<Goal>(`${this.API_URL}/goals`, goal);
  }

  updateGoal(id: string, goal: Partial<Goal>): Observable<Goal> {
    return this.http.put<Goal>(`${this.API_URL}/goals/${id}`, goal);
  }

  deleteGoal(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/goals/${id}`);
  }

  // Progress tracking
  getProgressHistory(userId: string, startDate: Date, endDate: Date): Observable<Progress[]> {
    return this.http.get<Progress[]>(`${this.API_URL}/progress/history`, {
      params: {
        userId,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      }
    });
  }

  getGoalProgress(userId: string, goalId: string): Observable<Progress[]> {
    return this.http.get<Progress[]>(`${this.API_URL}/progress/goal/${goalId}`, {
      params: { userId }
    });
  }
} 