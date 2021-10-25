import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpIgnoreInterceptorService {

  private finalUrl = `${environment.apiUrl}`;
  private customHttpClient: HttpClient;
  constructor(httpBackend: HttpBackend) {
    this.customHttpClient = new HttpClient(httpBackend);
  }

  get<T>(endpoint: string, params = new HttpParams): Observable<T>{
    return this.customHttpClient.get<T>(`${this.finalUrl}/${endpoint}`, {params})
  }

  post<T>(endpoint: string, data: any): Observable<T>{
    return this.customHttpClient.post<T>(`${this.finalUrl}/${endpoint}`, data);
  }

  put<T>(endpoint: string, data: any): Observable<T>{
    return this.customHttpClient.put<T>(`${this.finalUrl}/${endpoint}`, data);
  }

  delete<T>(endpoint: string): Observable<T>{
    return this.customHttpClient.delete<T>(`${this.finalUrl}/${endpoint}`);
  }
}
