import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthenticationRepository,
  AuthenticationRepositoryToken,
} from '../repository/authentication-repository';

@Injectable()
export class SetAuthorizationTokenUseCase {
  constructor(
    @Inject(AuthenticationRepositoryToken)
    private authenticationRepository: AuthenticationRepository
  ) {}
  execute(token: string) {
    return this.authenticationRepository.setAuthorizationToken(token);
  }
}
