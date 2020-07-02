import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee/model/employee';
import { config } from 'src/app/config';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Employee[]>(`${config.apiUrl}/employee`);
  }

  getById(id: String) {
    return this.http.get(`${config.apiUrl}/employee/` + id);
  }

}
