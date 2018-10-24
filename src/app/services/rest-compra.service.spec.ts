import { TestBed } from '@angular/core/testing';

import { RestCompraService } from './rest-compra.service';

describe('RestCompraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestCompraService = TestBed.get(RestCompraService);
    expect(service).toBeTruthy();
  });
});
