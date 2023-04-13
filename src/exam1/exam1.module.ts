import { Module } from '@nestjs/common';
import { Exam1Service } from './exam1.service';
import { Exam1Controller } from './exam1.controller';

@Module({
    controllers: [Exam1Controller],
    providers: [Exam1Service],
  })
export class Exam1Module {}
