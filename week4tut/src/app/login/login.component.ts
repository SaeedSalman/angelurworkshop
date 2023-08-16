import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';  // Make sure the path is correct based on your project structure

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.authenticateUser(this.email, this.password).subscribe(response => {
      if (response.valid) {
        // Store user details in session storage (without password)
        sessionStorage.setItem('currentUser', JSON.stringify(response));

        // Navigate to account page
        this.router.navigate(['/account']);
        window.location.reload();
      } else {
        this.errorMessage = 'Invalid email or password.';
      }
    });
  }
}
