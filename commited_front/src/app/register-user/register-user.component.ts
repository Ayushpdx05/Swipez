import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterComponent {
  registrationData: any = {}; // Define the registrationData property

  constructor(private http: HttpClient, private router : Router) {}

  registerUser() {
    // Send the registration data to your Express API
    this.http.post('http://localhost:3000/register', this.registrationData)
      .subscribe(
        (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['signup'])
          // You can redirect or display a success message here
        },
        (error) => {
          console.error('Registration failed', error);
          // Handle registration failure
        }
      );
  }
}
