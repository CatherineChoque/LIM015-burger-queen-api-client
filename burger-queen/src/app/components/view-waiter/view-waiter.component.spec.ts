import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWaiterComponent } from './view-waiter.component';

describe('ViewWaiterComponent', () => {
  let component: ViewWaiterComponent;
  let fixture: ComponentFixture<ViewWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWaiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
