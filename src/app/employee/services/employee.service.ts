import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/model/employee';
import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Employee[]>(`${config.apiUrl}/employees`);
  }

  getById(id: number) {
    return this.http.get(`${config.apiUrl}/employees/` + id);
  }

}
