import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardHomeComponent} from './dashboard-home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialImportsModule} from "../../material-imports/material-imports.module";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {TagService} from "../tag.service";
import {PropertyService} from "../property.service";
import {FileService} from "../file.service";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "protractor";

describe('DashboardHomeComponent', () => {
  let component: DashboardHomeComponent;
  let fixture: ComponentFixture<DashboardHomeComponent>;

  beforeEach(async(() => {
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

    TestBed.configureTestingModule({
      declarations: [DashboardHomeComponent],
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
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call the File Service when getting files', () => {
  //   const newTagSelect = fixture.debugElement.query(By.id('newTagSelect')).nativeElement;
  //   newTagSelect.value = 'Tag1';
  //   component.getFiles();
  //   fixture.detectChanges();
  // });
});
