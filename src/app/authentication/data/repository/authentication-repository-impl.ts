import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/data/service/auth.service';
import { AuthenticationRepository } from '../../domain/repository/authentication-repository';

@Injectable()
export class AuthenticationRepositoryImpl implements AuthenticationRepository {
  constructor(private authService: AuthService) {}

  register(user: any): Observable<any> {
    return this.authService.register(user);
  }

  login(user: any): Observable<any> {
    return this.authService.login(user);
  }

  setAuthorizationToken(token: string): void {
    return this.authService.setAuthorizationToken(token);
  }
}
