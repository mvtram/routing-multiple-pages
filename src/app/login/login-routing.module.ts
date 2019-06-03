import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [

{path: 'login',

children:[

 {path: 'signin', component: SigninComponent},

 {path: 'signup', component: SignupComponent},
],
},


]
@NgModule({

  imports: [
RouterModule.forChild(routes),


],
exports: [
  RouterModule
]

})
export class LoginRoutingModule { }
