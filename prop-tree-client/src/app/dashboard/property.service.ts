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

  getChanged(fileName: string, sourceTag: string, destTag: string): Observable<Property[]>  {
    return this.httpClient.get<Property[]>(this.uri + "/changed/" + fileName + "/" + sourceTag + "/" + destTag);
  }

  getAdded(fileName: string, sourceTag: string, destTag: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.uri + "/added/" + fileName + "/" + sourceTag + "/" + destTag);
  }

  getRemoved(fileName: string, sourceTag: string, destTag: string): Observable<Property[]> {
    return this.httpClient.get<Property[]>(this.uri + "/removed/" + fileName + "/" + sourceTag + "/" + destTag);
  }
}

export interface Property {
  id: number;
  fileName: string;
  tag: string;
  propertyName: string;
  propertyValus: string;
}
