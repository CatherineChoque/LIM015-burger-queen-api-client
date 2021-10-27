import { TestBed } from '@angular/core/testing';

import { AccessViewWaiterGuard } from './access-view-waiter.guard';

describe('AccessViewWaiterGuard', () => {
  let guard: AccessViewWaiterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessViewWaiterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
