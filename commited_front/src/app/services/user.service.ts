import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/add-user'; // Update the URL to match your backend API

  constructor(private http: HttpClient) {}

  registerUser(userData: any) {
    return this.http.post(`${this.baseUrl}/add-user`, userData);
  }
}
