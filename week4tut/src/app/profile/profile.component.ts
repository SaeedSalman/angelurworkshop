import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router) { } 

  ngOnInit() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      this.user = JSON.parse(currentUser);
    } else {
      this.router.navigate(['/login']);
    }
  }  

  onSave() {
    sessionStorage.setItem('currentUser', JSON.stringify(this.user));
    alert('User details saved successfully!');
  }
  
}

