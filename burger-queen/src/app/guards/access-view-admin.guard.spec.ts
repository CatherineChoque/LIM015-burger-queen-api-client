import { TestBed } from '@angular/core/testing';

import { AccessViewAdminGuard } from './access-view-admin.guard';

describe('AccessViewAdminGuard', () => {
  let guard: AccessViewAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessViewAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
