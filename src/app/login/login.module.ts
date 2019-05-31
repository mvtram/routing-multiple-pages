import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule

  ],
  schemas:[

    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class LoginModule { }
