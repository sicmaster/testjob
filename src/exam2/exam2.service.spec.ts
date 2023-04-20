import { Test, TestingModule } from '@nestjs/testing';
import { Exam2Controller } from './exam2.controller';
import { Exam2Service } from './exam2.service';
import { Exam2Module } from './exam2.module';

const fakeStartSuccess: string = "10:00:00";
const fakeEndSuccess: string = "10:10:10";
const fakeTimeInValid: string = "10:60:99";
const fakeEmptyError: string = "";

const fakeSuccess = 11;
const fakeError = 0;

describe('Exam2Service', () => {
  let service: Exam2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Exam2Module],
      providers: [Exam2Service],
      controllers: [Exam2Controller],
    }).compile();

    service = module.get<Exam2Service>(Exam2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('exam2', () => {
    it('should return success', async () => {
      const expectedResult = fakeSuccess;

      const actual = await service.getInterestingTime(fakeStartSuccess, fakeEndSuccess);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error start time empty', async () => {
      const expectedResult = fakeError;

      const actual = await service.getInterestingTime(fakeEmptyError, fakeEndSuccess);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error end time empty', async () => {
      const expectedResult = fakeError;

      const actual = await service.getInterestingTime(fakeStartSuccess, fakeEmptyError);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error start and end time empty', async () => {
      const expectedResult = fakeError;

      const actual = await service.getInterestingTime(fakeEmptyError, fakeEmptyError);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error start time over end time', async () => {
      const expectedResult = fakeError;

      const actual = await service.getInterestingTime(fakeEndSuccess, fakeStartSuccess);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error format time invalid', async () => {
      const expectedResult = fakeError;

      const actual = await service.getInterestingTime(fakeTimeInValid, fakeTimeInValid);

      expect(expectedResult).toEqual(actual);
    });
  });
});
