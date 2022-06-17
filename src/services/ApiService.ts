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
        try{
            let res2 = await this.http.post<any>(Url,Req).toPromise();
            let res1 = {
                StatusCode:"S",
                StatusMessage:"Success"
            }
            return [res1,res2];
        }catch(e){
            let res1 = {
                StatusCode:"F",
                StatusMessage:e.message
            }
            return [res1];
        }
    }
    
    async GET(Url:string,Req:any) {
        try{
            let res2 = await this.http.post<any>(Url,Req).toPromise();
            let res1 = {
                StatusCode:"S",
                StatusMessage:"Success"
            }
            return [res1,res2];
        }catch(e){
            let res1 = {
                StatusCode:"F",
                StatusMessage:e.message
            }
            return [res1];
        }
    }

    
}