import { TestBed, inject } from '@angular/core/testing';

import { TagService } from './tag.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagService],
      imports: [
        HttpClientTestingModule,
      ],
    });
  });

  it('should be created', inject([TagService], (service: TagService) => {
    expect(service).toBeTruthy();
  }));
});
