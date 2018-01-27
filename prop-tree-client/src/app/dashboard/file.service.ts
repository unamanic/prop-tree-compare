import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FileService {

  uri = "api/fileNames";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getFiles(tag: string): Observable<string[]>{
    return this.httpClient.get<string[]>(this.uri + "/" + tag)
  }
}
