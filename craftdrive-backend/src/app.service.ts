import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Employee } from './models/employee';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('Employee') private employeeSchema) {}
  async createEmployees(csvLocation: string): Promise<Employee[]> {
    return new Promise((resolve, reject) => {
      const employees: Employee[] = [];

      fs.createReadStream(csvLocation)
        .pipe(csv())
        .on('data', employee => employees.push(employee))
        .on('end', async () => {
          const createdEmployees = await this.employeeSchema.insertMany(
            employees,
          );

          resolve(createdEmployees);
        });
    });
  }

  async getEmployee(employeeId): Promise<Employee> {
    const employee = await this.employeeSchema.findOne({ id: employeeId });
    if (!employee) {
      throw new HttpException('Employee Not Found', HttpStatus.NOT_FOUND);
    }
    return employee;
  }

  async getEmployees(): Promise<Employee[]> {
    return this.employeeSchema.find();
  }
}
