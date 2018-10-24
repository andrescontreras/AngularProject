import { TestBed } from '@angular/core/testing';

import { RestProductoService } from './rest-producto.service';

describe('RestProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestProductoService = TestBed.get(RestProductoService);
    expect(service).toBeTruthy();
  });
});
