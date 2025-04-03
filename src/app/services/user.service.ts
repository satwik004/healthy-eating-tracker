import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserProfile } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:5050/api/users';

  constructor(private http: HttpClient) {}

  // User operations
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/me`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

  updateUser(id: string, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/${id}`, user);
  }

  deleteUser(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/${id}`);
  }

  // Profile operations
  getProfile(userId: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.API_URL}/${userId}/profile`);
  }

  updateProfile(userId: string, profile: Partial<UserProfile>): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.API_URL}/${userId}/profile`, profile);
  }

  // User preferences
  updatePreferences(userId: string, preferences: any): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/${userId}/preferences`, preferences);
  }

  // User settings
  updateSettings(userId: string, settings: any): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/${userId}/settings`, settings);
  }

  // User statistics
  getUserStats(userId: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${userId}/stats`);
  }

  // Password operations
  changePassword(userId: string, currentPassword: string, newPassword: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.API_URL}/${userId}/password`, {
      currentPassword,
      newPassword
    });
  }

  resetPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.API_URL}/reset-password`, { email });
  }
} 