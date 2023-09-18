import { TestBed } from '@angular/core/testing';

import { NewAppointmentService } from './new-appointment.service';

describe('NewAppointmentService', () => {
  let service: NewAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
