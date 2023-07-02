import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiMenuService {
    url = 'https://cms-back-sanroque.up.railway.app/api';
    constructor(private http: HttpClient) { }

    getCategories(): Observable<any> {
        return this.http.get(`${this.url}/companies`);
    }

    dishes(): Observable<any> {
        return this.http.get(`${this.url}/dish`);
    }

    filterDishes(filterDish: string): Observable<any> {
        return this.http.get(`${this.url}/dish/category/${filterDish}`);
    }
}