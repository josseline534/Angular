import { TestBed } from '@angular/core/testing';

import { GreenBtnJossService } from './green-btn-joss.service';

describe('GreenBtnJossService', () => {
  let service: GreenBtnJossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenBtnJossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
