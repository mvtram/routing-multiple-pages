import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server.component';

@NgModule({
  declarations: [
    ServerComponent,
  ],
  imports: [
    ServerComponent,
    CommonModule
  ],
  exports:[
    ServerComponent,
  ]
})
export class ServerModule { }
