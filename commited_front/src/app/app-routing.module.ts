import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RealLoginComponent } from './real-login/real-login.component';
import { RegisterComponent } from './register-user/register-user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full',
  },
  {
    path: 'mainpage',
    component: MainPageComponent,
  },
  {
    path: 'reallogin',
    component: RealLoginComponent,
  },
  { 
      path: "register",
      component: RegisterComponent,
  },
  {
    path: "signup",
    component: SignUpComponent, 
  },  
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
