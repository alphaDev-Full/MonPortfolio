import { TestBed } from '@angular/core/testing';

import { ServiceProjets } from './service-projets';

describe('ServiceProjets', () => {
  let service: ServiceProjets;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProjets);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
