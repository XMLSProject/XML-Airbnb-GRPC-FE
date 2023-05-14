import { TestBed } from '@angular/core/testing';

import { AcommodationService } from './acommodation.service';

describe('AcommodationService', () => {
  let service: AcommodationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcommodationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
