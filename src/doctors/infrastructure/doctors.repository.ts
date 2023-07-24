import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../domain/entities/users.entity';

@Injectable()
export class DoctorsRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async createUser(user: any) {
    const users = await new this.userModel(user);
    return users.save();
  }
}
