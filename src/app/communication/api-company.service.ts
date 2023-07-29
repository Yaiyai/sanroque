import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiCompanyService {
    url = 'https://cms-back-sanroque.up.railway.app/api';
    constructor(private http: HttpClient) { }

    getCompany(): Observable<any> {
        return this.http.get(`${this.url}/companies`);
    }

}