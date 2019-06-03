import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SigninComponent } from '../login/signin/signin.component';
import { LoginComponent } from '../login/login.component';
import { ServerComponent } from '../server/server.component';




const routes: Routes = [

  { path: 'server', component: ServerComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
