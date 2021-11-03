import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/presentation/authentication/authentication.component';
import { AuthGuard } from './core/util/guard/auth.guard';
import { PaymentDetailRegisterComponent } from './payment-detail-register/presentation/payment-detail-register/payment-detail-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/payment-register',
    pathMatch: 'full',
  },
  {
    path: 'payment-register',
    component: PaymentDetailRegisterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
