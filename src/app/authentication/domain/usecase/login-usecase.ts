import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthenticationRepository,
  AuthenticationRepositoryToken,
} from '../repository/authentication-repository';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(AuthenticationRepositoryToken)
    private authenticationRepository: AuthenticationRepository
  ) {}
  execute(user: any): Observable<any> {
    return this.authenticationRepository.login(user);
  }
}
