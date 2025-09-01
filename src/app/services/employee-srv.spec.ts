import { TestBed } from '@angular/core/testing';

import { EmployeeSrv } from './employee-srv';

describe('EmployeeSrv', () => {
  let service: EmployeeSrv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSrv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
