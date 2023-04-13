import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Exam1Controller } from './exam1/exam1.controller';
import { Exam1Module } from './exam1/exam1.module';
import { Exam1Service } from './exam1/exam1.service';
import { Exam2Controller } from './exam2/exam2.controller';
import { Exam2Module } from './exam2/exam2.module';
import { Exam2Service } from './exam2/exam2.service';

@Module({
  imports: [Exam1Module, Exam2Module],
  controllers: [AppController, Exam1Controller, Exam2Controller],
  providers: [AppService, Exam1Service, Exam2Service],
})
export class AppModule {}
