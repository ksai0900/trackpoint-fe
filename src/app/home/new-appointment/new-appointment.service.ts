import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Doctor } from 'src/app/models/doctor';
import { NewAppointment } from 'src/app/models/new-appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewAppointmentService {
  private baseUrl: string = environment.hostUrl;
  private api = `/api/v1`
  private customersUrl = `/customers`;
  private doctorsUrl = `/doctors`;
  private appointmentUrl = `/appointments`;

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  constructor(private http: HttpClient) { }


  createAppointment(appointment: NewAppointment, customer?: Number, newCustomer?: String): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    let params = new HttpParams();
    if (customer) {
      params = params.set('existingCustomer', customer.toString());
    }
    if (newCustomer) {
      params = params.set('newCustomerName', newCustomer.toString());
    }
  
    return this.http.post(`${this.baseUrl}${this.api}${this.appointmentUrl}`, 
                          appointment,
                          {headers: headers, params: params, withCredentials: true});
  }
  

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}${this.api}${this.customersUrl}`, { headers: this.headers, withCredentials: true });
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}${this.api}${this.doctorsUrl}`, { headers: this.headers, withCredentials: true });
  }

}
