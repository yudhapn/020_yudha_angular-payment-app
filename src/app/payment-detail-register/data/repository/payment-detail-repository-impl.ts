import { PaymentDetailRepository } from '../../domain/repository/payment-detail-repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentDetailService } from 'src/app/core/data/service/payment-detail.service';
import { PaymentDetail } from 'src/app/core/domain/model/payment-detail';

@Injectable()
export class PaymentDetailRepositoryImpl implements PaymentDetailRepository {
  constructor(private employeeService: PaymentDetailService) {}

  getPaymentDetails(): Observable<any> {
    return this.employeeService.getPaymentDetails();
  }
  getPaymentDetailById(id: number): Observable<any> {
    return this.employeeService.getPaymentDetailById(id);
  }
  createPaymentDetail(paymentDetail: any): Observable<any> {
    return this.employeeService.createPaymentDetail(paymentDetail);
  }
  updatePaymentDetail(paymentDetail: PaymentDetail): Observable<any> {
    return this.employeeService.updatePaymentDetail(paymentDetail);
  }
  deletePaymentDetail(id: number): Observable<any> {
    return this.employeeService.deletePaymentDetail(id);
  }
}
