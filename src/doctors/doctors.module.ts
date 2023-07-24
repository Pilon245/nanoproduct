import { Module } from '@nestjs/common';
import { AppController } from './doctors/api/app.controller';
import { AppService } from './doctors/application/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
