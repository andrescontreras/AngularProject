import { TestBed } from '@angular/core/testing';

import { RestClienteService } from './rest-cliente.service';

describe('RestClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestClienteService = TestBed.get(RestClienteService);
    expect(service).toBeTruthy();
  });
});
