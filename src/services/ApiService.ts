import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
export class ApiService {
    
    constructor(private http: HttpClient) {}

    async POST(Url:string,Req:any) {
        let res = await this.http.post<any>(Url,Req).toPromise();
        return res;
    }
    async GET(Url:string,Req:any) {
        let res = await this.http.get<any>(Url,Req).toPromise();
        return res;
    }

    
}