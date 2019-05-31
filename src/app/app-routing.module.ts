import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'server', component: ServerComponent},
  {path: '', component: LayoutComponent},
  {path: 'dashboard', component: LayoutComponent
/*
  children: [
      {
        path: 'search',
        loadChildren: './dashboard/search/search.module#SearchModule'
      },
      {
        path: 'offers',
        loadChildren: './dashboard/offers/offers.module#OffersModule'
      },

    ],

*/
},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
