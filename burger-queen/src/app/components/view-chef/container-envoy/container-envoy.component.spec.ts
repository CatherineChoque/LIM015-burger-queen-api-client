import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEnvoyComponent } from './container-envoy.component';

describe('ContainerEnvoyComponent', () => {
  let component: ContainerEnvoyComponent;
  let fixture: ComponentFixture<ContainerEnvoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerEnvoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerEnvoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
