import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ServerComponent
  }

];

@NgModule({
  declarations: [
   // ServerComponent
  ],
  imports: [RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ServerRoutingModule { }
