import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

let app: INestApplication;
let server: any;
let api: request.SuperTest<request.Test>;

afterAll(async () => {
  await app.close();
});

describe('AppController (e2e)', () => {
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();
    api = request(server);
  }, 60000);
  // test('All data delete', () => {
  //   return api.delete('/users/test/all-delete').expect(200);
  // });
  test('create users', () => {
    const usersBody = {
      name: 'Anton',
      phone: '+79287882132',
    };

    return api.post('/users').send(usersBody).expect(201);
  });
  test('create  doctor', () => {
    const usersBody = {
      name: 'Ivan',
      spec: 'Хирург',
    };

    return api.post('/doctors').send(usersBody).expect(201);
  });
});
