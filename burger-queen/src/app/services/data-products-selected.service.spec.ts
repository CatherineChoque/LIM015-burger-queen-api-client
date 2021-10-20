import { TestBed } from '@angular/core/testing';

import { DataProductsSelectedService } from './data-products-selected.service';

describe('DataProductsSelectedService', () => {
  let service: DataProductsSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProductsSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
