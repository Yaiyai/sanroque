import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable()
export class ApiMenuService {
    url = 'https://cms-back-sanroque.up.railway.app/api/';
    constructor(private http: HttpClient) { }

    dishes(): Observable<any> {
        return this.http.get(`${this.url}dish`);
    }
}