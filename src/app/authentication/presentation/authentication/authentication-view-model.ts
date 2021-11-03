import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/domain/model/user';
import { LoginUseCase } from '../../domain/usecase/login-usecase';
import { RegisterUseCase } from '../../domain/usecase/register-usecase';
import { SetAuthorizationTokenUseCase } from '../../domain/usecase/set-authorization-token-usecase';

@Injectable()
export class AuthenticationViewModel {
  constructor(
    private loginUseCase: LoginUseCase,
    private registerUseCase: RegisterUseCase,
    private setAuthorizationTokenUseCase: SetAuthorizationTokenUseCase
  ) {}

  login(user: User): Observable<any> {
    return this.loginUseCase.execute(user);
  }

  register(user: User): Observable<any> {
    return this.registerUseCase.execute(user);
  }
  setAuthorizationToken(token: string) {
    return this.setAuthorizationTokenUseCase.execute(token);
  }
}
