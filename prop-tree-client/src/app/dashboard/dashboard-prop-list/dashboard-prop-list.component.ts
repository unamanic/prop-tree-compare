import { Component, OnInit } from '@angular/core';
import {TagService} from "../tag.service";
import {Property, PropertyService} from "../property.service";
import {MatTableDataSource} from "@angular/material";
import {FileEntity} from "../file.service";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


@Component({
  selector: 'app-dashboard-prop-list',
  templateUrl: './dashboard-prop-list.component.html',
  styleUrls: ['./dashboard-prop-list.component.scss']
})
export class DashboardPropListComponent implements OnInit {

  private tags: string[];
  private tag: string;

  private selectedFile: FileEntity;

  private fileFilter: string = "";

  private diffLoading: boolean = false;

  private properties: Property[] = [];
  private propertiesDataSource = new MatTableDataSource<Property>(this.properties);

  private displayedColumns = [
    "propertyName",
    "propertyValue"
  ];

  constructor(
    private tagService: TagService,
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  select(file: FileEntity): void{
    this.selectedFile = file;

    this.diffLoading = true;

    this.propertyService.getProperties(this.selectedFile.id).subscribe( (results: Property[]) =>{
      this.properties = results;

      this.propertiesDataSource = new MatTableDataSource<Property>(this.properties);

      this.diffLoading = false;
    });
  }

  export(){

    let data: CsvData[] =[];

    data.push({
      property: this.selectedFile.fileName
    });

    data.push({
      property: ""
    });


    this.properties.forEach(p =>{
      data.push({
        property: p.propertyName,
        value: p.propertyValue
      });
    });

    let options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true
    };

    new Angular2Csv(data, this.selectedFile.fileName + ".csv", options);

  }

  clearSelected() {
    this.selectedFile = null;
  }
}

interface CsvData {
  property: string;
  value?: string;
}
