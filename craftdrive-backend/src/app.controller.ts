import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './models/employee';

@Controller('api/employee')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createEmployees(): Promise<Employee[]> {
    const csvLocation = 'employees.csv';
    return await this.appService.createEmployees(csvLocation);
  }

  @Get(':id')
  async getEmployee(@Param('id') employeeId): Promise<Employee> {
    return await this.appService.getEmployee(employeeId);
  }

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return await this.appService.getEmployees();
  }
}
