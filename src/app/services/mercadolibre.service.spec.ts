import { TestBed } from '@angular/core/testing';

import { MercadolibreService } from './mercadolibre.service';

describe('MercadolibreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MercadolibreService = TestBed.get(MercadolibreService);
    expect(service).toBeTruthy();
  });
});
