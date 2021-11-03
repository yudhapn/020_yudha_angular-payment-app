import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailRegisterComponent } from './presentation/payment-detail-register/payment-detail-register.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PaymentDetailRegisterViewModel } from './presentation/payment-detail-register/payment-detail-register-view-model';
import { GetPaymentDetailsUseCase } from './domain/usecase/get-payment-details-usecase';
import { GetPaymentDetailByIdUseCase } from './domain/usecase/get-payment-detail-by-id-usecase';
import { CreatePaymentDetailUseCase } from './domain/usecase/create-payment-detail-usecase';
import { UpdatePaymentDetailUseCase } from './domain/usecase/update-payment-detail-usecase';
import { DeletePaymentDetailUseCase } from './domain/usecase/delete-payment-detail-usecase';
import { PaymentDetailRepositoryToken } from './domain/repository/payment-detail-repository';
import { PaymentDetailRepositoryImpl } from './data/repository/payment-detail-repository-impl';
import { httpInterceptorProviders } from '../core/util/http-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [PaymentDetailRegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    CoreModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: PaymentDetailRegisterViewModel,
      useClass: PaymentDetailRegisterViewModel,
    },
    {
      provide: GetPaymentDetailsUseCase,
      useClass: GetPaymentDetailsUseCase,
    },
    {
      provide: GetPaymentDetailByIdUseCase,
      useClass: GetPaymentDetailByIdUseCase,
    },
    {
      provide: CreatePaymentDetailUseCase,
      useClass: CreatePaymentDetailUseCase,
    },
    {
      provide: UpdatePaymentDetailUseCase,
      useClass: UpdatePaymentDetailUseCase,
    },
    {
      provide: DeletePaymentDetailUseCase,
      useClass: DeletePaymentDetailUseCase,
    },
    {
      provide: PaymentDetailRepositoryToken,
      useClass: PaymentDetailRepositoryImpl,
    },
  ],
})
export class PaymentDetailRegisterModule {}
