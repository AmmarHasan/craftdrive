import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/employee/11111')
      .expect(404)
      .expect('Employee not found');
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/employee/1')
      .expect(200)
      .expect({"_id":"5efe263482e7a223b889ccff","id":"1","first_name":"Romeo","last_name":"Duerdin","email":"rduerdin0@reddit.com","gender":"Male","phone":"6638243591"});
  });
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/employees')
      .expect(200)
  });
});
