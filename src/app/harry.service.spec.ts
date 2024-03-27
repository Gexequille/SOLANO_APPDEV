import { TestBed } from '@angular/core/testing';

import { HarryService } from './harry.service';

describe('HarryService', () => {
  let service: HarryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
