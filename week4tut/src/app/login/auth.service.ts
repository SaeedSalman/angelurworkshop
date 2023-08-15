import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '../environments/environment';  // Adjust the path based on your project structure

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';  // This is the URL to your Express server

  constructor(private http: HttpClient) { }

  authenticateUser(email: string, password: string): Observable<any> {
    const userCredentials = {
      email: email,
      password: password
    };
    return this.http.post<any>(this.apiUrl, userCredentials);
  }
}
