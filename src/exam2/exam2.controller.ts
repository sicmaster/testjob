import { Controller, Get, Query, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Exam2Service } from './exam2.service';

@ApiTags('Exam2')
@Controller('exam2')
export class Exam2Controller {

    constructor(private readonly exam2Service: Exam2Service) {}

    @Get()
    @HttpCode(200)
    exam2(@Query('S') s: string, @Query('T') t: string) {
        try {
            const errorMessage = this.exam2Service.validateObject(s, t);

            if(errorMessage) return {
                isSuccess: false,
                message: errorMessage,
                data: "",
            };

            const total = this.exam2Service.getInterestingTime(s, t);

            return {
                isSuccess: true,
                message: '',
                data: total,
            }; 
        } catch (error) {
            return {
                isSuccess: false,
                message: 'พบข้อผิดผลาด กรุณาลองใหม่',
                data: "",
            };
        }
    }

    
}
