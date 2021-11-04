import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChefComponent } from './view-chef.component';

describe('ViewChefComponent', () => {
  let component: ViewChefComponent;
  let fixture: ComponentFixture<ViewChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
