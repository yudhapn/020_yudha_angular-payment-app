import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentDetail } from 'src/app/core/domain/model/payment-detail';

export interface PaymentDetailRepository {
  getPaymentDetails(): Observable<any>;
  getPaymentDetailById(id: number): Observable<any>;
  createPaymentDetail(paymentDetail: any): Observable<any>;
  updatePaymentDetail(paymentDetail: PaymentDetail): Observable<any>;
  deletePaymentDetail(id: number): Observable<any>;
}

export const PaymentDetailRepositoryToken =
  new InjectionToken<PaymentDetailRepository>('PaymentDetailRepositoryToken');
