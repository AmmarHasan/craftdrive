import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { dbCredentials } from './config/db.config';
import { EmployeeSchema } from './schema/employee.schema';

@Module({
  imports: [MongooseModule.forRoot(dbCredentials()),
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
