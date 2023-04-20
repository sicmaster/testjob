import { Injectable } from '@nestjs/common';
import { IExam3 } from './exam3.model';

@Injectable()
export class Exam3Service {
  private iExam3: IExam3[] = [];

  getAll(): IExam3[] {
    return this.iExam3;
  }

  getById(id: number): IExam3 {
    return this.iExam3.find(obj => obj.id === Number(id));
  }

  create(iExam3: IExam3): IExam3 {
    iExam3.id = (this.iExam3.length > 0) ? this.iExam3[this.iExam3.length - 1].id + 1 : 1;
    this.iExam3.push(iExam3);
    return iExam3;
  }

  update(id: number, iExam3: IExam3): IExam3 {
    const index = this.iExam3.findIndex(obj => obj.id === Number(id));
    iExam3.id = Number(id);
    this.iExam3[index] = iExam3;
    return this.iExam3[index];
  }

  delete(id: number): Boolean {
    const index = this.iExam3.findIndex(obj => obj.id === Number(id));
    if(index >= 0) this.iExam3.splice(index, 1);
    return true;
  }
}
