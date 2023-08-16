import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'week4tut';
  isLoggedIn = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.checkIfUserIsLoggedIn();
  }

  checkIfUserIsLoggedIn() {
    const currentUser = sessionStorage.getItem('currentUser');
    this.isLoggedIn = !!currentUser;
    this.cdr.detectChanges();  // manually triggering change detection
  }

  logOut() {
    sessionStorage.removeItem('currentUser'); 
    this.isLoggedIn = false; 
    this.checkIfUserIsLoggedIn();  // ensure the button updates
    this.router.navigate(['/login']); 
  }
}