import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EmployeeRepository,
  EmployeeRepositoryToken,
} from '../repository/employee-repository';

@Injectable()
export class GetUserByIdUseCase {
  constructor(
    @Inject(EmployeeRepositoryToken)
    private employeeRepository: EmployeeRepository
  ) {}
  execute(id: number): Observable<any> {
    return this.employeeRepository.getUserById(id);
  }
}
