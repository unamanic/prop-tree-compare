import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {MaterialImportsModule} from "../material-imports/material-imports.module";
import {TagService} from "./tag.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FileService} from "./file.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PropertyService} from "./property.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [DashboardHomeComponent],
  providers: [TagService, FileService, PropertyService]
})
export class DashboardModule { }
