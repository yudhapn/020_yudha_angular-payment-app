import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PaymentDetailRepository,
  PaymentDetailRepositoryToken,
} from '../repository/payment-detail-repository';

@Injectable()
export class GetPaymentDetailByIdUseCase {
  constructor(
    @Inject(PaymentDetailRepositoryToken)
    private paymentDetailRepository: PaymentDetailRepository
  ) {}
  execute(id: number): Observable<any> {
    return this.paymentDetailRepository.getPaymentDetailById(id);
  }
}
