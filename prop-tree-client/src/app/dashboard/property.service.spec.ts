import { TestBed, inject } from '@angular/core/testing';
import {PropertyService} from "./property.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('PropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyService],
      imports: [
        HttpClientTestingModule,
      ],
    });
  });

  it('should be created', inject([PropertyService], (service: PropertyService) => {
    expect(service).toBeTruthy();
  }));
});
