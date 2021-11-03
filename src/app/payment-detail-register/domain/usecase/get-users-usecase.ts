import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EmployeeRepository,
  EmployeeRepositoryToken,
} from '../repository/employee-repository';

@Injectable()
export class GetUsersUseCase {
  constructor(
    @Inject(EmployeeRepositoryToken)
    private employeeRepository: EmployeeRepository
  ) {}
  execute(): Observable<any> {
    return this.employeeRepository.getUsers();
  }
}
