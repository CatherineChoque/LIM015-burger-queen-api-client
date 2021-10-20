import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSentComponent } from './container-sent.component';

describe('ContainerSentComponent', () => {
  let component: ContainerSentComponent;
  let fixture: ComponentFixture<ContainerSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
