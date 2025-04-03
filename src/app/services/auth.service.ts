import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User, LoginCredentials, SignupData, AuthResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private readonly API_URL = 'http://localhost:5050/api/auth';

  constructor(private http: HttpClient) {
    this.loadSavedSession();
  }

  private loadSavedSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  signup(data: SignupData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/signup`, data)
      .pipe(
        tap(response => {
          if (response.success && response.user) {
            this.handleAuthentication(response);
          }
        })
      );
  }

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/login`, credentials)
      .pipe(
        tap(response => {
          if (response.success && response.user) {
            this.handleAuthentication(response);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  updateProfile(userId: string, data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/user/${userId}`, data)
      .pipe(
        tap(updatedUser => {
          this.currentUserSubject.next(updatedUser);
          localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        })
      );
  }

  deleteAccount(userId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/user/${userId}`)
      .pipe(
        tap(() => this.logout())
      );
  }

  private handleAuthentication(response: AuthResponse): void {
    if (response.user) {
      this.currentUserSubject.next(response.user);
      localStorage.setItem('currentUser', JSON.stringify(response.user));
    }
    if (response.token) {
      localStorage.setItem('token', response.token);
    }
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
