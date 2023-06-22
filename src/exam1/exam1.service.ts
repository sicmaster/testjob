import { Injectable } from '@nestjs/common';

@Injectable()
export class Exam1Service {
  getCommonPrefix(body: string[]): string {
    try {
      if (body.length === 0 || body[0].trim() === "") return '';

      if (body.length > 200) return '';

      if (body[0].length > 200) return '';

      if (this.validateEnglishLower(body) === true) return '';
      
      let prefix = body[0];
      for (let i = 1; i < body.length; i++) {
        while (body[i].indexOf(prefix) !== 0) {
          prefix = prefix.slice(0, prefix.length - 1);
          if (prefix === "") return "";
        }
      }
      return prefix;
    } catch (error) {
      // add log
      return 'พบข้อผิดผลาด';
    }
  }

  validateObject(body: string[]): string {
    try {
      // 1 <= strs.length
      if (body.length === 0 || body[0].trim() === "") return 'โปรดกรอกข้อมูล';
      
      // 1 <= strs.length <= 200
      if (body.length > 200) return 'ข้อมูลมีจำนวนมากกว่า 200';

      // 0 <= strs[i].length <= 200
      if (body[0].length > 200) return 'prefix มีจำนวนตัวอักษรมากกว่า 200';

      //strs[i] consists of only lower-case English letters.
      if (this.validateEnglishLower(body) === true) return 'ข้อมูลรองรับเฉพาะ English Lowercase';
    } catch (error) {
      return 'พบข้อผิดพลาด';
    }
  }

  validateEnglishLower(body: string[]): boolean {
    try {
      return Boolean(body.find(element => Boolean(element.match(/^[a-z]*$/)) === false));
    } catch (error) {
      return false;
    }
  }
}
