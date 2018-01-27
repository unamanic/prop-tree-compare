import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardHomeComponent} from "../dashboard/dashboard-home/dashboard-home.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
