import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TagService {

  uri = "api/tags";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTags(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.uri);
  }

}
