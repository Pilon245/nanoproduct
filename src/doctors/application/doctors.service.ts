import { Injectable } from '@nestjs/common';
import {
  CreateUserInputModel,
  UsersFactory,
} from '../domain/dto/users.Factory';
import { randomUUID } from 'crypto';
import { DoctorsRepository } from '../infrastructure/doctors.repository';
import {
  CreateDoctorInputModel,
  CreateRecordInputModel,
  DoctorsFactory,
} from '../domain/dto/doctors.Factory';

@Injectable()
export class DoctorsService {
  constructor(private doctorRepository: DoctorsRepository) {}
  async createUser(model: CreateUserInputModel) {
    const user = new UsersFactory(randomUUID(), model.phone, model.name);
    return this.doctorRepository.createUser(user);
  }

  async createDoctor(model: CreateDoctorInputModel) {
    const doctor = new DoctorsFactory(randomUUID(), model.name, model.spec);
    return this.doctorRepository.createDoctor(doctor);
  }

  async createRecord(model: CreateRecordInputModel) {
    const findID = await this.doctorRepository.findUserAndDoctor(
      model.user_id,
      model.doctor_id,
    );
    const startTime = new Date(model.slot);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);
    if (startTime < new Date() || findID) {
      return false;
    }
    return this.doctorRepository.createRecord(
      model.user_id,
      model.doctor_id,
      startTime,
      endTime,
    );
  }
}
