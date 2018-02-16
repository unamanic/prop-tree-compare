import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardHomeComponent} from "../dashboard/dashboard-home/dashboard-home.component";
import {DashboardPropListComponent} from "../dashboard/dashboard-prop-list/dashboard-prop-list.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'properties',
    component: DashboardPropListComponent
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
