import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PaymentDetailRepository,
  PaymentDetailRepositoryToken,
} from '../repository/payment-detail-repository';

@Injectable()
export class CreatePaymentDetailUseCase {
  constructor(
    @Inject(PaymentDetailRepositoryToken)
    private paymentDetailRepository: PaymentDetailRepository
  ) {}
  execute(paymentDetail: any): Observable<any> {
    return this.paymentDetailRepository.createPaymentDetail(paymentDetail);
  }
}
