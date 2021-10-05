import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RouteComponent } from './pages/route/route.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'route',
    component: RouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
