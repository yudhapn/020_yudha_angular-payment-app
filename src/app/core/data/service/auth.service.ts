import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { User } from '../../domain/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // endpoint: string = 'https://localhost:5001/api';
  endpoint: string = 'http://payment-api-stormborax.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    let api = `${this.endpoint}/AuthManagement/Register`;
    return this.http.post(api, user, {responseType: 'text'}).pipe(catchError(this.handleError));
  }

  login(user: User): Observable<any> {
    let api = `${this.endpoint}/AuthManagement/Login`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  logout() {
    localStorage.clear();
  }

  getAuthorizationToken() {
    return localStorage.getItem('app_token');
  }

  setAuthorizationToken(token: string) {
    return localStorage.setItem('app_token', token);
  }

  get isAuthenticated() {
    return !!this.getAuthorizationToken();
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status} \n Message; ${error.message}`;
    }
    return throwError(msg);
  }
}
