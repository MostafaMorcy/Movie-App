import { TestBed } from '@angular/core/testing';

import { MoiveService } from './moive.service';

describe('MoiveService', () => {
  let service: MoiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
