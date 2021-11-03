import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user';
import {
  EmployeeRepository,
  EmployeeRepositoryToken,
} from '../repository/employee-repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(EmployeeRepositoryToken)
    private employeeRepository: EmployeeRepository
  ) {}
  execute(user: any): Observable<any> {
    return this.employeeRepository.createUser(user);
  }
}
