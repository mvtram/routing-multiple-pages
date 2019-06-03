import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LayoutComponent } from './layout/layout.component';
import { ServerComponent } from './server/server.component';
//import { MDBBootstrapModule } from '../../.node_modules/angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ServerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    LoginModule,
  AppRoutingModule,


     //MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
