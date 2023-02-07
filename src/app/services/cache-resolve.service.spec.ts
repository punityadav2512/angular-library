import { TestBed } from '@angular/core/testing';

import { CacheResolveService } from './cache-resolve.service';

describe('CacheResolveService', () => {
  let service: CacheResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
