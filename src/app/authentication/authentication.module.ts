import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './presentation/authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthenticationViewModel } from './presentation/authentication/authentication-view-model';
import { LoginUseCase } from './domain/usecase/login-usecase';
import { RegisterUseCase } from './domain/usecase/register-usecase';
import { AuthenticationRepositoryToken } from './domain/repository/authentication-repository';
import { AuthenticationRepositoryImpl } from './data/repository/authentication-repository-impl';
import { LoginComponent } from './presentation/login/login.component';
import { RegisterComponent } from './presentation/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SetAuthorizationTokenUseCase } from './domain/usecase/set-authorization-token-usecase';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: AuthenticationViewModel, useClass: AuthenticationViewModel },
    { provide: LoginUseCase, useClass: LoginUseCase },
    { provide: RegisterUseCase, useClass: RegisterUseCase },
    {
      provide: SetAuthorizationTokenUseCase,
      useClass: SetAuthorizationTokenUseCase,
    },
    {
      provide: AuthenticationRepositoryToken,
      useClass: AuthenticationRepositoryImpl,
    },
  ],
})
export class AuthenticationModule {}
