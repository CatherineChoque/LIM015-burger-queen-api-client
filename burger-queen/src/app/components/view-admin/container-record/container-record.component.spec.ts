import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRecordComponent } from './container-record.component';

describe('ContainerRecordComponent', () => {
  let component: ContainerRecordComponent;
  let fixture: ComponentFixture<ContainerRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
