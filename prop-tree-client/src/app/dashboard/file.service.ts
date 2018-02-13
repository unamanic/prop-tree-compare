import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export interface FileEntity {
  id: number,
  fileName: string,
  relPath: string,
  tag: string,
}

@Injectable()
export class FileService {

  uri = "api/tags";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getFiles(tag: string): Observable<FileEntity[]>{
    return this.httpClient.get<FileEntity[]>(this.uri + "/" + tag + "/files")
  }
}
