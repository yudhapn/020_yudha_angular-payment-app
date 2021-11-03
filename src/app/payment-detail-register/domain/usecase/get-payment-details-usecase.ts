import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PaymentDetailRepository,
  PaymentDetailRepositoryToken,
} from '../repository/payment-detail-repository';

@Injectable()
export class GetPaymentDetailsUseCase {
  constructor(
    @Inject(PaymentDetailRepositoryToken)
    private paymentDetailRepository: PaymentDetailRepository
  ) {}
  execute(): Observable<any> {
    return this.paymentDetailRepository.getPaymentDetails();
  }
}
