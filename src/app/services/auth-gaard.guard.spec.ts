import { TestBed } from '@angular/core/testing';

import { AuthGaardGuard } from './auth-gaard.guard';

describe('AuthGaardGuard', () => {
  let guard: AuthGaardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGaardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
