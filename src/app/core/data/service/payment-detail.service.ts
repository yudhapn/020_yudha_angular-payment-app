import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { PaymentDetail } from '../../domain/model/payment-detail';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  // baseUrl: string = 'https://localhost:5001/api';
  baseUrl: string = 'http://payment-api-stormborax.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getPaymentDetails(): Observable<any> {
    let api = `${this.baseUrl}/PaymentDetail`;
    return this.http
      .get<PaymentDetail[]>(api)
      .pipe(catchError(this.handleError));
  }

  getPaymentDetailById(id: number): Observable<any> {
    let api = `${this.baseUrl}/PaymentDetail/${id}`;
    return this.http.get<PaymentDetail>(api).pipe(catchError(this.handleError));
  }

  createPaymentDetail(paymentDetail: any): Observable<any> {
    let api = `${this.baseUrl}/PaymentDetail`;
    return this.http
      .post(api, paymentDetail)
      .pipe(catchError(this.handleError));
  }

  updatePaymentDetail(paymentDetail: PaymentDetail): Observable<any> {
    let api = `${this.baseUrl}/PaymentDetail`;
    const params = new HttpParams().set('id', paymentDetail.paymentDetailId);
    return this.http
      .put(api, paymentDetail, { params: params })
      .pipe(catchError(this.handleError));
  }

  deletePaymentDetail(id: number): Observable<any> {
    let api = `${this.baseUrl}/PaymentDetail/${id}`;
    return this.http.delete(api).pipe(catchError(this.handleError));
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
