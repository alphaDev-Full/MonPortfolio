import { TestBed } from '@angular/core/testing';

import { ServiceEducations } from './service-educations';

describe('ServiceEducations', () => {
  let service: ServiceEducations;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEducations);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
