import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
selector: 'login-demo',
styleUrls: ['real-login.component.css'],
templateUrl: 'real-login.component.html',
})
export class RealLoginComponent {

logged_in_user: any = {}; 
constructor(private http: HttpClient, private router : Router) {}

submit(){
    this.http.post('http://localhost:3000/checklogin', this.logged_in_user)
    .subscribe(
        (response)=>{
            console.log('user exists', response);
            this.router.navigate(['signup'])
        },
        (error)=>{
            console.log("sorry user does not exist")
        }
    );
}

}
