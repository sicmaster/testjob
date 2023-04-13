import { Test, TestingModule } from '@nestjs/testing';
import { Exam2Controller } from './exam2.controller';
import { Exam2Service } from './exam2.service';
import { Exam2Module } from './exam2.module';

describe('Exam2Controller', () => {
  let controller: Exam2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Exam2Module],
      providers: [Exam2Service],
      controllers: [Exam2Controller],
    }).compile();

    controller = module.get<Exam2Controller>(Exam2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
