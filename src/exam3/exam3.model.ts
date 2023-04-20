export class IExam3 {
    id: number;
    title: string;
    description: string;
}

export class IResp {
    isSuccess: Boolean;
    message: string;
    data: IExam3[];
}

export class IRespObj {
    isSuccess: Boolean;
    message: string;
    data: IExam3 | {};
}
