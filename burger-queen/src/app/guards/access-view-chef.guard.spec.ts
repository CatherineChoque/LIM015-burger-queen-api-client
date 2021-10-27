import { TestBed } from '@angular/core/testing';

import { AccessViewChefGuard } from './access-view-chef.guard';

describe('AccessViewChefGuard', () => {
  let guard: AccessViewChefGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessViewChefGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
