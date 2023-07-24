import { Interval } from '@nestjs/schedule';
import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from '../users/infrastructure/users.repository';
import { randomUUID } from 'crypto';

@Injectable()
export class TasksService {
  constructor(private userRepository: UsersRepository) {}
  private readonly logger = new Logger(TasksService.name);

  @Interval(10000)
  handleInterval() {
    // const newUser = {
    //   id: String(+new Date()),
    //   login: randomUUID(),
    //   email: randomUUID(),
    //   passwordHash: randomUUID(),
    //   createdAt: new Date().toISOString(),
    //   confirmationCode: randomUUID(),
    // };
    // console.log();
    // this.userRepository.createUsers(newUser);
    // this.logger.debug('Called every 10 seconds');
  }
}
