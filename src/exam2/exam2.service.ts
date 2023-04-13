import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class Exam2Service {
  getInterestingTime(s = '00:00:01', t = "23:59:59"): number {
    try {
      if(this.validateTime(s) === false || this.validateTime(t) === false) return 0;

      const currentDate = new Date();
      const date = moment(currentDate).format('YYYY-MM-DD');
      let count = 0;
      let currTime = new Date(`${date}T${s}Z`);
      let endTime = new Date(`${date}T${t}Z`);

      if(currTime > endTime) return 0;

      while (currTime <= endTime) {
        let timeStr = currTime.toISOString().substr(11, 8);
        if (this.isInteresting(timeStr)) {
          count++;
        }
        currTime.setSeconds(currTime.getSeconds() + 1);
      }
      return count;
    } catch (error) {
      return 0;
    }
  }

  validateTime(time: string): boolean {
    return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time) === true ?? false;
  }

  isInteresting(timeStr: string) {
    let digits = new Set(timeStr.replace(/:/g, ''));
    return digits.size <= 2;
  }

  validateObject(s: string, t: string): string {
    try {
      const currentDate = new Date();
      const date = moment(currentDate).format('YYYY-MM-DD');
      let count = 0;
      let currTime = new Date(`${date}T${s}Z`);
      let endTime = new Date(`${date}T${t}Z`);

      if(s === ''|| t === '') return 'โปรดใส่ข้อมูลให้ครบ';

      if(this.validateTime(s) === false || this.validateTime(t) === false) return 'รูปแบบของเวลาไม่ถูกต้อง';

      if(currTime > endTime) return 'พบข้อผิดพลาด start date > end date';
    } catch (error) {
      return 'พบข้อผิดพลาด';
    }
  }
}
