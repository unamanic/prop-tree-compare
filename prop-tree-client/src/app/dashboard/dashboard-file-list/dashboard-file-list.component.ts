import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileEntity, FileService} from "../file.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-dashboard-file-list',
  templateUrl: './dashboard-file-list.component.html',
  styleUrls: ['./dashboard-file-list.component.scss'],
})
export class DashboardFileListComponent implements OnInit {

  private files: FileEntity[] = [];
  private selectedFile: FileEntity;
  private fileLoading=false;
  private _tag = null;
  private _fileFilter = null;


  @Input()
  set fileFilter(fileFilter: String){
    this._fileFilter = fileFilter;
  }

  @Input()
  set tag(tag: String){
    this._tag = tag;
    this.getFiles();
  }

  @Output() fileSelected = new EventEmitter<FileEntity>();

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  getFiles() {
    if(this._tag) {
      this.fileLoading = true;
      this.selectedFile = null;
      this.fileService.getFiles(this._tag).subscribe(files => {
        this.files = files;
        this.fileLoading = false;
      });
    }
  }

  filteredFiles(): FileEntity[]{
    return this.files.filter(f => f.fileName.lastIndexOf(this._fileFilter) >= 0);
  }

  select(file: FileEntity): void{
    this.selectedFile = file;
    this.fileSelected.emit(file);
  }

}
