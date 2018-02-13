import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialImportsModule} from "./material-imports/material-imports.module";
import {RoutingModule} from "./routing/routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PtcHeaderComponent } from './ptc-header/ptc-header.component';


@NgModule({
  declarations: [
    AppComponent,
    PtcHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    MaterialImportsModule,
    FlexLayoutModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
