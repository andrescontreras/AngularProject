import { TestBed } from '@angular/core/testing';

import { RestUsuarioService } from './rest-usuario.service';

describe('RestUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestUsuarioService = TestBed.get(RestUsuarioService);
    expect(service).toBeTruthy();
  });
});
