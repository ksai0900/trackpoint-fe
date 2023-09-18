import { Component, OnInit } from '@angular/core';
import { NewAppointmentService } from './new-appointment.service';
import { Customer } from 'src/app/models/customer';
import { Doctor } from 'src/app/models/doctor';
import { NewAppointment } from 'src/app/models/new-appointment';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
})
export class NewAppointmentComponent implements OnInit {
  showSuccessPopup: boolean = false;

  description: string = '';
  startDate: string = '';
  duration: number = 0;
  existingCustomer?: Number = undefined;
  newCustomer?: string = '';

  doctor: Doctor = { id: 0, name: '', specialty: '', secretary: 0, user: 0 }


  doctorsList: Doctor[] = []; // This should be populated from the backend
  customersList: Customer[] = []; // This should be populated from the backend


  newAppointment: NewAppointment = {
    description: '',
    startDate: new Date(),
    duration: 0,
    doctor: 0
  };

  constructor(private newAppointmentService: NewAppointmentService) { }

  ngOnInit(): void {
    this.newAppointmentService.getDoctors().subscribe(response => {
      this.doctorsList = response;
    });

    this.newAppointmentService.getCustomers().subscribe(response => {
      this.customersList = response;
    });
  }

  onFormSubmit() {

    if (this.newCustomer !== '') {
      this.existingCustomer = undefined;
    } else {
      this.newCustomer = undefined;
    }
    this.newAppointmentService.createAppointment({
      description: this.description,
      startDate: new Date(this.startDate),
      duration: this.duration,
      doctor: this.doctor.id,

    },
      this.existingCustomer,
      this.newCustomer).subscribe(response => {
        this.showSuccessPopup = true;

        // Hide the popup after 3 seconds
        setTimeout(() => {
          this.showSuccessPopup = false;

          // Reset form for a new appointment
          this.resetForm();
        }, 3000);
      });
  }


  resetForm() {
    this.description = '';
    this.startDate = '';
    this.duration = 0;
    this.existingCustomer = undefined;
    this.newCustomer = '';
    this.doctor = { id: 0, name: '', specialty: '', secretary: 0, user: 0 };
  }


}
