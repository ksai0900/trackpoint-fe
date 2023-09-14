import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {


    private baseUrl: string = environment.hostUrl;
    
    private api = `/api/v1`
    private loginUrl = `/login`;

    constructor(
        private httpClient: HttpClient, private router: Router) { }


    login(user: any):Observable<Object> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const BODY = JSON.stringify(user);

    const options = { headers: headers, withCredentials: true };

    return this.httpClient.post(` ${this.baseUrl}${this.api}${this.loginUrl}`, BODY, options);
    }

    /* ${ this.api } */
}