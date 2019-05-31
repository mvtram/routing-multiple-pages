import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerRoutingModule } from './server/server-routing.module';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginRoutingModule } from './login-routing.module';
import { LayoutRoutingModule } from './layout-routing.module';
//import { MDBBootstrapModule } from '@angular/angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LayoutComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    LoginRoutingModule,
    LayoutRoutingModule,
    //MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
