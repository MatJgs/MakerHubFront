import { TestBed } from '@angular/core/testing';

import { SujetsService } from './sujets.service';

describe('SujetsService', () => {
  let service: SujetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SujetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
