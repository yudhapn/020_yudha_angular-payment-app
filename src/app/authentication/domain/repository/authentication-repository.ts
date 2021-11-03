import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/domain/model/user';

export interface AuthenticationRepository {
  register(user: User): Observable<any>;
  login(user: User): Observable<any>;
  setAuthorizationToken(token: string): void;
}

export const AuthenticationRepositoryToken =
  new InjectionToken<AuthenticationRepository>('AuthenticationRepositoryToken');
