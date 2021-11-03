import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user';
import {
  EmployeeRepository,
  EmployeeRepositoryToken,
} from '../repository/employee-repository';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(EmployeeRepositoryToken)
    private employeeRepository: EmployeeRepository
  ) {}
  execute(user: User): Observable<any> {
    return this.employeeRepository.updateUser(user);
  }
}
