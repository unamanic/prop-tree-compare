import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFileListComponent } from './dashboard-file-list.component';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {FileService} from "../file.service";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialImportsModule} from "../../material-imports/material-imports.module";
import {FlexLayoutModule} from "@angular/flex-layout";

describe('DashboardFileListComponent', () => {
  let component: DashboardFileListComponent;
  let fixture: ComponentFixture<DashboardFileListComponent>;


  let fileServiceStub = {
    getFiles: (tag: string): Observable<string[]> => {
      return of([
        'file1',
        'file2'
      ]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardFileListComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        MaterialImportsModule,
        FlexLayoutModule,
      ],
      providers:    [
        {provide: FileService, useValue: fileServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
