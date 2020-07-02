import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee/model/employee';
import { config } from 'src/app/config';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    new Employee("1","Romeo","Duerdin","rduerdin0@reddit.com","Male","6638243591"),
    new Employee("2","Wood","Cleobury","wcleobury1@taobao.com","Male","1272716107"),
    new Employee("3","Fidelity","Barnbrook","fbarnbrook2@rediff.com","Female","2045241026"),
    new Employee("4","Cal","Ducker","cducker3@utexas.edu","Female","8292559046"),
    new Employee("5","Sutton","Ozanne","sozanne4@pinterest.com","Male","1073859525"),
  ]

  constructor(private http: HttpClient) { }

  getAll() {
    return of(this.employees)
    // return this.http.get<Employee[]>(`${config.apiUrl}/employees`);
  }

  getById(id: String) {
    return of(this.employees[Number(id) - 1])
    // return this.http.get(`${config.apiUrl}/employees/` + id);
  }

}
