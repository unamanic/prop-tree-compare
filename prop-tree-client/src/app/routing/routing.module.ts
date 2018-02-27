import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardHomeComponent} from "../dashboard/dashboard-home/dashboard-home.component";
import {DashboardPropListComponent} from "../dashboard/dashboard-prop-list/dashboard-prop-list.component";
import {PropToJsonComponent} from "../dashboard/prop-to-json/prop-to-json.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'properties',
    component: DashboardPropListComponent
  },
  {
    path: 'prop-to-json',
    component: PropToJsonComponent
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
