import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server.component';
import { ServerRoutingModule } from './server-routing.module';
import { MaterialModule } from '../material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ServerRoutingModule
    //no components wil be imported
  ],
  exports:[
    //no components wil be imported
    MaterialModule,
    ServerRoutingModule
  ]
})
export class ServerModule { }
