import { TestBed } from '@angular/core/testing';

import { AngularDaterangepickerService } from './angular-daterangepicker.service';

describe('AngularDaterangepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDaterangepickerService = TestBed.get(AngularDaterangepickerService);
    expect(service).toBeTruthy();
  });
});
