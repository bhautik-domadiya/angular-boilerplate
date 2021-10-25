import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {clearLocalStorage, getAuthToken} from '../../helpers/localStorage';
import {environment} from '../../../../environments/environment';
import {IBaseErrorResponse} from '../models/base.http';

interface RequestHeader {
  key: string;
  value: string;
}

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const requestHeaders: RequestHeader[] = [{
      key: environment.BearerTokenKey,
      value: getAuthToken()
    }];
    request = this.addRequestHeader(request, requestHeaders);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            clearLocalStorage();
            // TODO: Redirect user to app initial Route
            // this.router.navigate(['/auth/login']);
            return throwError(error);
          case 500:
            // TODO: Display Toast Here
            // this.matSnackBar.open('please Report us', 'close');
            return throwError(error);
          default :
            // TODO: set your Error Response Here
            return throwError(error);
        }
      })
    );
  }

  addRequestHeader(request: HttpRequest<any>, requestHeaders: RequestHeader[]): HttpRequest<any> {
    let headers: HttpHeaders = request.headers;
    requestHeaders.forEach(requestHeader => headers = headers.append(requestHeader.key, requestHeader.value));
    return request.clone({headers});
  }
}
