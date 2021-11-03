import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EmployeeRepository,
  EmployeeRepositoryToken,
} from '../repository/employee-repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject(EmployeeRepositoryToken)
    private employeeRepository: EmployeeRepository
  ) {}
  execute(id: number): Observable<any> {
    return this.employeeRepository.deleteUser(id);
  }
}
