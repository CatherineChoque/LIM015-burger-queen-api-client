import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProductosComponent } from './container-productos.component';

describe('ContainerProductosComponent', () => {
  let component: ContainerProductosComponent;
  let fixture: ComponentFixture<ContainerProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
