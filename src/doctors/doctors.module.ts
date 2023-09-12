import { Module } from '@nestjs/common';
import { DoctorsRepository } from './infrastructure/doctors.repository';
import { DoctorsService } from './application/doctors.service';
import { DoctorsController } from './api/doctors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './domain/entities/users.entity';
import { Doctor, DoctorSchema } from './domain/entities/doctors.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './application/task.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Doctor.name, schema: DoctorSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [DoctorsController],
  providers: [DoctorsRepository, DoctorsService, TasksService],
})
export class DoctorsModule {}
