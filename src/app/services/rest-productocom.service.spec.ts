import { TestBed } from '@angular/core/testing';

import { RestProductocomService } from './rest-productocom.service';

describe('RestProductocomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestProductocomService = TestBed.get(RestProductocomService);
    expect(service).toBeTruthy();
  });
});
