import { TestBed } from '@angular/core/testing';

import { ValidarLoginService } from './validar-login.service';

describe('ValidarLoginService', () => {
  let service: ValidarLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
