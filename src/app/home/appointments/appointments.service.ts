import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Appointments } from 'src/app/models/appointments';
import { PaginationResponse } from 'src/app/models/pagination-response';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private baseUrl: string = environment.hostUrl;
  private api = `/api/v1`
  private appointmentsUrl = `/appointments`;
  private appointmentsByDoctorUrl = `/appointments/doctor`;

  /*   http://localhost:8080/api/appointments/doctor?pageNumber=0&pageSize=5 */

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAppointmentsByDoctor(
    pageNumber: number,
    pageSize: number,
    descriptionFilter?: string,
    customerNameFilter?: string,
    startDateFilter?: string,
    endDateFilter?: string,
    completedFilter?: string,
    sortField?: string,
    sortDirection?: string

  ): Observable<PaginationResponse<Appointments>> {
    console.log("getAppointmentsByDoctor is called")
    console.log("sortField in service:", sortField)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());


    params = this.setFilters(
      descriptionFilter, params,
      customerNameFilter, startDateFilter,
      endDateFilter, completedFilter,
      sortField, sortDirection);

    console.log("descriptionFilter in service:", descriptionFilter)
    console.log("customerNameFilter in service:", customerNameFilter)
    console.log("startDateFilter in service:", startDateFilter)
    console.log("endDateFilter in service:", endDateFilter)

    console.log("Params:", params.toString());

    const options = { headers: headers, params: params, withCredentials: true };


    return this.httpClient.get<PaginationResponse<Appointments>>(
      `${this.baseUrl}${this.api}${this.appointmentsByDoctorUrl}`,
      options
    );
  }

  private setFilters(
    descriptionFilter: string | undefined,
    params: HttpParams,
    customerNameFilter: string | undefined,
    startDateFilter: string | undefined,
    endDateFilter: string | undefined,
    completedFilter: string | undefined,
    sortField: string | undefined,
    sortDirection: string | undefined
  ) {
    console.log("completedFilter in service:", completedFilter);
    if (descriptionFilter) {
      params = params.set('descriptionFilter', descriptionFilter);
    }
    if (customerNameFilter) {
      params = params.set('customerNameFilter', customerNameFilter);
    }
    if (startDateFilter) {
      params = params.set('startDateFilter', startDateFilter);
    }
    if (endDateFilter) {
      console.log("endDateFilter in service:", endDateFilter)
      params = params.set('endDateFilter', endDateFilter);
    }
    if (completedFilter) {
      console.log("completedFilter in service:", completedFilter)
      params = params.set('completedFilter', completedFilter);
    }
    if (sortField) {
      params = params.set('sortField', sortField);
    }
    if (sortDirection) {
      params = params.set('sortDirection', sortDirection);
    }
    return params;
  }
}
