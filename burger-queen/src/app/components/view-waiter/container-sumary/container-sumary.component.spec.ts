import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSumaryComponent } from './container-sumary.component';

describe('ContainerSumaryComponent', () => {
  let component: ContainerSumaryComponent;
  let fixture: ComponentFixture<ContainerSumaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSumaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
