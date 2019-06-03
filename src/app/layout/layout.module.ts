import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
  ],
  exports:[
    MaterialModule,
    LayoutRoutingModule

  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutModule { }
