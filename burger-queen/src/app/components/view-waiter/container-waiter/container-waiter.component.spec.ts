import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWaiterComponent } from './container-waiter.component';

describe('ContainerWaiterComponent', () => {
  let component: ContainerWaiterComponent;
  let fixture: ComponentFixture<ContainerWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerWaiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
