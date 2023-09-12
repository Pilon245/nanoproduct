import { Interval } from '@nestjs/schedule';
import { Injectable, Logger } from '@nestjs/common';
import { DoctorsRepository } from '../infrastructure/doctors.repository';

@Injectable()
export class TasksService {
  constructor(private doctorRepository: DoctorsRepository) {}
  private readonly logger = new Logger(TasksService.name);

  @Interval(10000)
  async handleInterval() {
    // const startTime = new Date();
    // const endTime = new Date(startTime.getTime() + 24 * 60 * 60 * 1000);
    // const slots = await this.doctorRepository.findNotification24hours(
    //   startTime,
    //   endTime,
    // );
    // if (slots.length !== 0) {
    //   slots.map((d) => ({ ...d, slots: JSON.stringify(d.slots) }));
    // }
    // console.log(slots);

    this.logger.debug('Called every 10 seconds');
  }
}
