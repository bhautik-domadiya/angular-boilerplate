import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  private finalUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
  }

  get<T>(endpoint: string, params = new HttpParams): Observable<T> {
    return this.http.get<T>(`${this.finalUrl}/${endpoint}`, {params});
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.finalUrl}/${endpoint}`, data);
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.finalUrl}/${endpoint}`, data);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.finalUrl}/${endpoint}`);
  }
}
