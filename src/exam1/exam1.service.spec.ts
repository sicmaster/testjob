import { Test, TestingModule } from '@nestjs/testing';
import { Exam1Controller } from './exam1.controller';
import { Exam1Service } from './exam1.service';
import { Exam1Module } from './exam1.module';

const fakeTextSuccess: string[] = ["flower","flight","flame"];
const fakeTextErrorEmpty: string[] = [];
const fakeTextErrorPrefixEmpty: string[] = ["", "flight"];
const fakeTextErrorPrefixOverString: string[] = ["flightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflightflight", "flight"];
const fakeTextErrorCheckEnglishLower: string[] = ["flAbdef", "flEyfwFfe"];

const fakeSuccess = 'fl';
const fakeError = '';

describe('Exam1Service', () => {
  let service: Exam1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Exam1Module],
      providers: [Exam1Service],
      controllers: [Exam1Controller],
    }).compile();

    service = module.get<Exam1Service>(Exam1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('exam1', () => {
    it('should return success', async () => {
      const expectedResult = fakeSuccess;

      const actual = await service.getCommonPrefix(fakeTextSuccess);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error empty', async () => {
      const expectedResult = fakeError;

      const actual = await service.getCommonPrefix(fakeTextErrorEmpty);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error prefix empty', async () => {      
      const expectedResult = fakeError;

      const actual = await service.getCommonPrefix(fakeTextErrorPrefixEmpty);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error array length over 200', async () => {
      let fakeTextErrorPrefixOver: string[] = [];

      for (let i = 0; i < 210; i++) {
        fakeTextErrorPrefixOver.push('flight');
      }
      
      const expectedResult = fakeError;

      const actual = await service.getCommonPrefix(fakeTextErrorPrefixOver);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error first in array length string over 200', async () => {      
      const expectedResult = fakeError;

      const actual = await service.getCommonPrefix(fakeTextErrorPrefixOverString);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error array length over 200', async () => {      
      const expectedResult = fakeError;

      const actual = await service.getCommonPrefix(fakeTextErrorPrefixOverString);

      expect(expectedResult).toEqual(actual);
    });

    it('should return error prefix english lower', async () => {      
      const expectedResult = fakeError;

      const actual = await service.getCommonPrefix(fakeTextErrorCheckEnglishLower);

      expect(expectedResult).toEqual(actual);
    });
  });
});
