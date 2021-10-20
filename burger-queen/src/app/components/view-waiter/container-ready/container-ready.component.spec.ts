import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerReadyComponent } from './container-ready.component';

describe('ContainerReadyComponent', () => {
  let component: ContainerReadyComponent;
  let fixture: ComponentFixture<ContainerReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
