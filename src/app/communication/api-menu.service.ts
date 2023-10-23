import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class ApiMenuService {
    url = 'https://cms-back-sanroque.up.railway.app/api';
    constructor(private http: HttpClient, private translate: TranslateService) { }

    getCategories(): Observable<any> {
        return this.http.get(`${this.url}/companies`);
    }

    dishes(): Observable<any> {
        return this.http.get(`${this.url}/dish/language?language=${this.translate.currentLang.toUpperCase()}`);
    }

    getDayMenu(): Observable<any> {
        return this.http.get(`${this.url}/daymenu`);
    }

    filterDishes(filterDish: string): Observable<any> {
        return this.http.get(`${this.url}/dish/category/${filterDish}?language=${this.translate.currentLang.toUpperCase()}`);
    }
}