import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerUsersComponent } from './container-users.component';

describe('ContainerUsersComponent', () => {
  let component: ContainerUsersComponent;
  let fixture: ComponentFixture<ContainerUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
