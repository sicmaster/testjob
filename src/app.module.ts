import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Exam1Controller } from './exam1/exam1.controller';
import { Exam1Module } from './exam1/exam1.module';
import { Exam1Service } from './exam1/exam1.service';
import { Exam2Controller } from './exam2/exam2.controller';
import { Exam2Module } from './exam2/exam2.module';
import { Exam2Service } from './exam2/exam2.service';
import { Exam3Controller } from './exam3/exam3.controller';
import { Exam3Module } from './exam3/exam3.module';
import { Exam3Service } from './exam3/exam3.service';

@Module({
  imports: [Exam1Module, Exam2Module, Exam3Module],
  controllers: [AppController, Exam1Controller, Exam2Controller, Exam3Controller],
  providers: [AppService, Exam1Service, Exam2Service, Exam3Service],
})
export class AppModule {}
