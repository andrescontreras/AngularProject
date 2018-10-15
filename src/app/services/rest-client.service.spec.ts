import { TestBed } from '@angular/core/testing';

import { RestCLientService } from './rest-client.service';

describe('RestCLientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestCLientService = TestBed.get(RestCLientService);
    expect(service).toBeTruthy();
  });
});
