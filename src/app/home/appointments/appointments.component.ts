import { ChangeDetectorRef, Component } from '@angular/core';
import { AppointmentsService } from './appointments.service';
import { Appointments } from 'src/app/models/appointments';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { PaginationResponse } from 'src/app/models/pagination-response';
import { PagResponseMeta } from 'src/app/models/pag-response-meta';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
})
export class AppointmentsComponent {
  isLoading: boolean = true;
  private currentFilters?: { [key: string]: string };


  appointments: Appointments[] = [];
  metaData!: PagResponseMeta;

  constructor(private appointmentsService: AppointmentsService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadAppointmentsForDoctor(0, 10);



    this.filterChangeSubject.pipe(
      debounceTime(200),             // wait for 2 seconds pause
      distinctUntilChanged()         // only if the value has changed
    ).subscribe(filters => {
      console.log("Received filters in AppointmentsComponent as sub:", filters);
      this.loadAppointmentsForDoctor(0, 10, filters);
    });

  }



  private filterChangeSubject: Subject<any> = new Subject();

  onTableFilterChanged(filters: { [key: string]: string }) {
    console.log("onTableFilterChanged filters:", filters);
    this.currentFilters = filters;
    this.filterChangeSubject.next(filters);

    this.loadAppointmentsForDoctor(0, 10, filters);
  }

  private loadAppointmentsForDoctor(page: number, itemsPerPage: number, filters?: { [key: string]: string }) {
    console.log("load appointments is called")
    console.log("loadAppointmentsForDoctor filters §§§:", filters);
    const descriptionFilter = filters?.['description'];
    const customerNameFilter = filters?.['customer'];
    const startDateFilter = filters?.['startDate'];
    const endDateFilter = filters?.['endDate'];
    const completedFilter = filters?.['appointment_completed'];
    const sortField = filters?.['sortField'];
    const sortDirection = filters?.['sortDirection'];

    console.log("%%%%%%%%%%%%%%%")
    console.log(sortField)
    console.log(sortDirection)

    this.appointmentsService.getAppointmentsByDoctor(
      page,
      itemsPerPage,
      descriptionFilter,
      customerNameFilter,
      startDateFilter,
      endDateFilter,
      completedFilter,
      sortField,
      sortDirection

    ).subscribe(
      (data: PaginationResponse<Appointments>) => {
        this.appointments = data.data;
        this.metaData = data.meta;
        console.log('Appointments:', this.appointments);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching appointments:', error);
        this.isLoading = false;
      }
    );
  }

  loadDataForPage(pageNumber: number) {
    this.loadAppointmentsForDoctor(pageNumber, 10, this.currentFilters);
  }
}
