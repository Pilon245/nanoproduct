import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../domain/entities/users.entity';
import { UsersFactory } from '../domain/dto/users.Factory';
import { DoctorsFactory } from '../domain/dto/doctors.Factory';
import { Doctor, DoctorDocument } from '../domain/entities/doctors.entity';

@Injectable()
export class DoctorsRepository {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
  ) {}
  async findUserAndDoctor(user_id: string, doctor_id: string) {
    const user = await this.userModel.findOne({ id: user_id });
    const doctor = await this.doctorModel.findOne({ id: doctor_id });
    if (user && doctor) {
      return false;
    }
    return true;
  }

  async findNotification24hours(startTime: Date, endTime: Date) {
    const doctor = await this.doctorModel.find({
      'slots.slot': { $gte: startTime, $lte: endTime },
    });
    return doctor;
  }

  async createUser(user: UsersFactory) {
    const users = await new this.userModel(user);
    return users.save();
  }

  async createDoctor(doctor: DoctorsFactory) {
    const doctors = await new this.doctorModel(doctor);
    return doctors.save();
  }

  async createRecord(
    user_id: string,
    doctor_id: string,
    startTime: Date,
    endTime: Date,
  ) {
    const doctors = await this.doctorModel.find({
      id: doctor_id,
      'slots.slot': { $gte: startTime, $lte: endTime },
    });
    if (doctors.length !== 0) {
      // если указанный слот занят
      return false;
    }

    return this.doctorModel.updateOne(
      { id: doctor_id },
      { $push: { slots: { user_id, slot: startTime } } },
    );
  }
}
