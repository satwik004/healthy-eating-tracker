import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SignupData } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="signup-container">
      <div class="signup-card">
        <div class="signup-header">
          <h1>Create Account</h1>
          <p>Join us to start your health journey</p>
        </div>
        
        <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="signup-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              formControlName="name" 
              placeholder="Enter your full name"
              [class.error]="signupForm.get('name')?.invalid && signupForm.get('name')?.touched"
            >
            <div class="error-message" *ngIf="signupForm.get('name')?.invalid && signupForm.get('name')?.touched">
              Please enter your full name
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email" 
              placeholder="Enter your email"
              [class.error]="signupForm.get('email')?.invalid && signupForm.get('email')?.touched"
            >
            <div class="error-message" *ngIf="signupForm.get('email')?.invalid && signupForm.get('email')?.touched">
              Please enter a valid email address
            </div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              formControlName="password" 
              placeholder="Create a password"
              [class.error]="signupForm.get('password')?.invalid && signupForm.get('password')?.touched"
            >
            <div class="error-message" *ngIf="signupForm.get('password')?.invalid && signupForm.get('password')?.touched">
              Password must be at least 6 characters
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              formControlName="confirmPassword" 
              placeholder="Confirm your password"
              [class.error]="signupForm.get('confirmPassword')?.invalid && signupForm.get('confirmPassword')?.touched"
            >
            <div class="error-message" *ngIf="signupForm.get('confirmPassword')?.invalid && signupForm.get('confirmPassword')?.touched">
              Passwords do not match
            </div>
          </div>

          <div class="form-group terms">
            <label class="checkbox-label">
              <input type="checkbox" formControlName="terms">
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
          </div>

          <button type="submit" [disabled]="signupForm.invalid" class="signup-button">
            Create Account
          </button>

          <div class="login-link">
            Already have an account? <a routerLink="/login" class="login">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .signup-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #3498db, #2ecc71);
      padding: 2rem;
    }

    .signup-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      padding: 2.5rem;
      width: 100%;
      max-width: 400px;
    }

    .signup-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .signup-header h1 {
      color: #2c3e50;
      margin: 0;
      font-size: 2rem;
    }

    .signup-header p {
      color: #666;
      margin: 0.5rem 0 0;
    }

    .signup-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      color: #2c3e50;
      font-weight: 500;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="password"]:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }

    input.error {
      border-color: #e74c3c;
    }

    .error-message {
      color: #e74c3c;
      font-size: 0.875rem;
    }

    .terms {
      margin: 1rem 0;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #666;
      font-size: 0.875rem;
    }

    .checkbox-label input[type="checkbox"] {
      width: 1rem;
      height: 1rem;
    }

    .signup-button {
      background: linear-gradient(45deg, #3498db, #2980b9);
      color: white;
      border: none;
      padding: 0.75rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .signup-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(41, 128, 185, 0.3);
    }

    .signup-button:disabled {
      background: #bdc3c7;
      cursor: not-allowed;
    }

    .login-link {
      text-align: center;
      color: #666;
    }

    .login {
      color: #3498db;
      text-decoration: none;
      font-weight: 500;
    }

    .login:hover {
      text-decoration: underline;
    }
  `]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    // Check if user is already logged in
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      const signupData: SignupData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        terms: formData.terms
      };

      this.authService.signup(signupData).subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = response.message;
          }
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'An error occurred during signup';
        }
      });
    }
  }
}
