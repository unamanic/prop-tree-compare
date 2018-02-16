import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPropListComponent } from './dashboard-prop-list.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialImportsModule} from "../../material-imports/material-imports.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {DashboardFileListComponent} from "../dashboard-file-list/dashboard-file-list.component";
import {TagService} from "../tag.service";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {PropertyService} from "../property.service";
import {FileService} from "../file.service";

describe('DashboardPropListComponent', () => {
  let component: DashboardPropListComponent;
  let fixture: ComponentFixture<DashboardPropListComponent>;

  let tagServiceStub = {
    getTags: (): Observable<string[]> => {
      return of([
        'tag1',
        'tag2'
      ]);
    }
  };

  let propertyServiceStub = {

  };

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
        DashboardPropListComponent,
        DashboardFileListComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        MaterialImportsModule,
        FlexLayoutModule,
      ],
      providers:    [
        {provide: TagService, useValue: tagServiceStub },
        {provide: PropertyService, useValue: propertyServiceStub },
        {provide: FileService, useValue: fileServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
