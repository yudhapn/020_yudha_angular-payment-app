import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentDetail } from 'src/app/core/domain/model/payment-detail';
import {
  PaymentDetailRepository,
  PaymentDetailRepositoryToken,
} from '../repository/payment-detail-repository';

@Injectable()
export class UpdatePaymentDetailUseCase {
  constructor(
    @Inject(PaymentDetailRepositoryToken)
    private paymentDetailRepository: PaymentDetailRepository
  ) {}
  execute(paymentDetail: PaymentDetail): Observable<any> {
    return this.paymentDetailRepository.updatePaymentDetail(paymentDetail);
  }
}
