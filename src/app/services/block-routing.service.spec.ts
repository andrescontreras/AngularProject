import { TestBed } from '@angular/core/testing';

import { BlockRoutingService } from './block-routing.service';

describe('BlockRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockRoutingService = TestBed.get(BlockRoutingService);
    expect(service).toBeTruthy();
  });
});
