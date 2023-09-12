import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  Post,
  Put,
} from '@nestjs/common';
import { DoctorsService } from '../application/doctors.service';
import { CreateUserInputModel } from '../domain/dto/users.Factory';
import {
  CreateDoctorInputModel,
  CreateRecordInputModel,
} from '../domain/dto/doctors.Factory';

@Controller()
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post('users')
  createUser(@Body() model: CreateUserInputModel) {
    return this.doctorsService.createUser(model);
  }

  @Post('doctors')
  createDoctor(@Body() model: CreateDoctorInputModel) {
    return this.doctorsService.createDoctor(model);
  }
  @Put('record')
  @HttpCode(204)
  async createRecord(@Body() model: CreateRecordInputModel) {
    const record = await this.doctorsService.createRecord(model);
    if (!record) {
      throw new HttpException('invalid data', 400);
    }
    return;
  }
}
