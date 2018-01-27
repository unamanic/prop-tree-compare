import { Component, OnInit } from '@angular/core';
import {TagService} from "../tag.service";
import {FileService} from "../file.service";
import {FormControl} from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {Property, PropertyService} from "../property.service";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  private tags: string[];
  private newTag: string;
  private oldTag: string;

  private files: string[] = [];
  private selectedFile: string;

  private fileFilter: string = "";

  private loading: boolean = false;

  myControl: FormControl = new FormControl();
  private added: Property[] = [];
  private changed: Property[] = [];
  private removed: Property[] = [];
  private addedDataSource = new MatTableDataSource<Property>(this.added);
  private changedDataSource = new MatTableDataSource<Property>(this.changed);
  private removedDataSource = new MatTableDataSource<Property>(this.removed);
  private displayedColumns = [
    "propertyName",
    "propertyValue"
  ];

  constructor(
    private tagService: TagService,
    private fileService: FileService,
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  getFiles() {
    if(this.newTag) {
      this.fileService.getFiles(this.newTag).subscribe(files => this.files = files);
    }
  }

  filteredFiles(): string[]{
    return this.files.filter(f => f.lastIndexOf(this.fileFilter) >= 0);
  }

  select(file: string): void{
    this.selectedFile = file;

    this.loading = true;

    Observable.forkJoin(
      this.propertyService.getAdded(this.selectedFile, this.newTag, this.oldTag),
      this.propertyService.getChanged(this.selectedFile, this.newTag, this.oldTag),
      this.propertyService.getRemoved(this.selectedFile, this.newTag, this.oldTag)
    ).subscribe( (results: Property[][]) =>{
      this.added = results[0];
      this.changed = results[1];
      this.removed = results[2];

      this.addedDataSource = new MatTableDataSource<Property>(this.added);
      this.changedDataSource = new MatTableDataSource<Property>(this.changed);
      this.removedDataSource = new MatTableDataSource<Property>(this.removed);

      this.loading = false;
    });
  }
}