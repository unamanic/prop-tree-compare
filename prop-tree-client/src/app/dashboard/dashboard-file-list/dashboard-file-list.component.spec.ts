import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardFileListComponent} from './dashboard-file-list.component';
import {of} from "rxjs/observable/of";
import {FileEntity, FileService} from "../file.service";
import {BrowserModule, By} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialImportsModule} from "../../material-imports/material-imports.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";


describe('DashboardFileListComponent', () => {
  let component: DashboardFileListComponent;
  let fixture: ComponentFixture<DashboardFileListComponent>;
  let spy: any;
  let fileService: any;

  let files: FileEntity[] = [
    {
      id: 1,
      fileName: 'File1',
      tag: 'tag1',
      relPath: 'path/File1'
    },
    {
      id: 2,
      fileName: 'File2',
      tag: 'tag1',
      relPath: 'path/File1'
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardFileListComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        MaterialImportsModule,
        FlexLayoutModule,
        HttpClientModule
      ],
      providers: [FileService]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fileService = fixture.debugElement.injector.get(FileService);
    spy = spyOn(fileService, 'getFiles').and.returnValue(of(files));


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call the File Service when getting files', () => {

    component.tag = 'tag1';
    fixture.detectChanges();
    expect(component.files).toEqual(files);
    expect(fileService.getFiles).toHaveBeenCalledWith('tag1');
  });

  it('should emit a file when the file button is clicked', () => {
    component.tag = 'tag1';
    component.fileFilter = '';
    fixture.detectChanges();

    let fileButtons = fixture.debugElement.queryAll(By.css('button'));
    let file;

    component.fileSelected.subscribe((f) => file = f);

    expect(fileButtons.length).toEqual(files.length);

    fileButtons[0].triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(file).toEqual(files[0]);
  });

  it('should filter files when filter is provided', () => {
    component.tag = 'tag1';
    component.fileFilter = '2';
    fixture.detectChanges();

    let fileButtons = fixture.debugElement.queryAll(By.css('button'));


    expect(fileButtons.length).toEqual(1);

    expect(component.filteredFiles()[0]).toEqual(files[1]);
  })
});
