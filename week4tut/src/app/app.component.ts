import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'week4tut';

  constructor(private router: Router, private authService: AuthService) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    // Ensure the right login status is loaded when the component initializes
    this.isLoggedIn;
  }

  logOut() {
    sessionStorage.removeItem('currentUser'); 
    this.router.navigate(['/login']); 
  }
}
