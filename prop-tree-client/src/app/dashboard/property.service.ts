import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {assertNumber} from "@angular/core/src/render3/assert";

@Injectable()
export class PropertyService {

  uri = "api";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getProperty(id: number): Observable<Property>{
    return this.httpClient.get<Property>(this.uri + "/" + id);

  }

  getChanged(fileId: number, sourceTag: string, destTag: string): Observable<Property[]>  {
    return this.httpClient.get<Property[]>(this.uri + "/changed/" + fileId + "/" + sourceTag + "/" + destTag);
  }

  getAdded(fileId: number, sourceTag: string, destTag: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.uri + "/added/" + fileId + "/" + sourceTag + "/" + destTag);
  }

  getRemoved(fileId: number, sourceTag: string, destTag: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.uri + "/removed/" + fileId + "/" + sourceTag + "/" + destTag);
  }

  getProperties(fileId: number): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.uri +  "/file/" + fileId )
  }
}

export interface Property {
  id: number;
  fileName: string;
  tag: string;
  propertyName: string;
  propertyValue: string;
}
