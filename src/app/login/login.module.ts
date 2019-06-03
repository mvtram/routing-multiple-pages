import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login.component';


/*

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];
*/
@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoginRoutingModule,
   //RouterModule.forChild(routes),
  ],
  /*
  exports: [
    MaterialModule,
    LoginRoutingModule,
    RouterModule,
  ],*/
  //No CUSTOM SCHEMA

})
export class LoginModule { }
