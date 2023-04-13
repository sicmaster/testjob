import { Test, TestingModule } from '@nestjs/testing';
import { Exam1Controller } from './exam1.controller';
import { Exam1Service } from './exam1.service';
import { Exam1Module } from './exam1.module';

describe('Exam1Controller', () => {
  let controller: Exam1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Exam1Module],
      providers: [Exam1Service],
      controllers: [Exam1Controller],
    }).compile();

    controller = module.get<Exam1Controller>(Exam1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
