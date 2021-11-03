import { Injectable } from '@angular/core';
import { CreatePaymentDetailUseCase } from '../../domain/usecase/create-payment-detail-usecase';
import { GetPaymentDetailByIdUseCase } from '../../domain/usecase/get-payment-detail-by-id-usecase';
import { GetPaymentDetailsUseCase } from '../../domain/usecase/get-payment-details-usecase';
import { UpdatePaymentDetailUseCase } from '../../domain/usecase/update-payment-detail-usecase';
import { DeletePaymentDetailUseCase } from '../../domain/usecase/delete-payment-detail-usecase';
import { PaymentDetail } from 'src/app/core/domain/model/payment-detail';

@Injectable()
export class PaymentDetailRegisterViewModel {
  constructor(
    private getPaymentDetailsUseCase: GetPaymentDetailsUseCase,
    private getPaymentDetailByIdUseCase: GetPaymentDetailByIdUseCase,
    private createPaymentDetailUseCase: CreatePaymentDetailUseCase,
    private updatePaymentDetailUseCase: UpdatePaymentDetailUseCase,
    private deletePaymentDetailUseCase: DeletePaymentDetailUseCase
  ) {}

  getPaymentDetails() {
    return this.getPaymentDetailsUseCase.execute();
  }

  getPaymentDetailById(id: number) {
    return this.getPaymentDetailByIdUseCase.execute(id);
  }

  createPaymentDetail(paymentDetail: any) {
    return this.createPaymentDetailUseCase.execute(paymentDetail);
  }

  updatePaymentDetail(paymentDetail: PaymentDetail) {
    return this.updatePaymentDetailUseCase.execute(paymentDetail);
  }
  deletePaymentDetail(id: number) {
    return this.deletePaymentDetailUseCase.execute(id);
  }
}
