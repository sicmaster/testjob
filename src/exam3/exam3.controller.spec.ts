import { Test, TestingModule } from '@nestjs/testing';
import { Exam3Controller } from './exam3.controller';
import { Exam3Service } from './exam3.service';
import { Exam3Module } from './exam3.module';

describe('Exam3Controller', () => {
  let controller: Exam3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Exam3Module],
      providers: [Exam3Service],
      controllers: [Exam3Controller],
    }).compile();

    controller = module.get<Exam3Controller>(Exam3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
