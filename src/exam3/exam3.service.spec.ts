import { Test, TestingModule } from '@nestjs/testing';
import { Exam3Controller } from './exam3.controller';
import { Exam3Service } from './exam3.service';
import { Exam3Module } from './exam3.module';
import { IExam3, IResp, IRespObj } from './exam3.model';

const fakeId = 1;

const fakeData: IExam3 = {
  id: 0,
  title: 'title',
  description: 'description',
};

const fakeUpdateData: IExam3 = {
  id: 1,
  title: 'title2',
  description: 'description2',
};

const fakeSuccess: IExam3 = { 
  id: 1,
  title: 'title',
  description: 'description',
};

const fakeEmptySuccess: IExam3[] = [];

describe('Exam3Service', () => {
  let service: Exam3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Exam3Module],
      providers: [Exam3Service],
      controllers: [Exam3Controller],
    }).compile();

    service = module.get<Exam3Service>(Exam3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('exam3', () => {
    it('should get success', async () => {
      const expectedResult = fakeEmptySuccess;

      const actual = await service.getAll();

      expect(expectedResult).toEqual(actual);
    });

    it('should create success', async () => {
      const expectedResult = fakeSuccess;

      const actual = await service.create(fakeData);

      expect(expectedResult).toEqual(actual);
    });
  });
});
