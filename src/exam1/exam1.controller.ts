import { Controller, Body, Post, HttpCode } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Exam1Service } from './exam1.service';

@ApiTags('Exam1')
@Controller('exam1')
export class Exam1Controller {

  constructor(private readonly exam1Service: Exam1Service) {}

  @Post()
  @HttpCode(200)
  @ApiBody({
    schema: {
      type: 'array',
      example: ["flower", "flow", "flight"]
    },
  })
  exam1(@Body() body: string[]) {
    try {
      const errorMessage = this.exam1Service.validateObject(body);

      if(errorMessage) return {
        isSuccess: false,
        message: errorMessage,
        data: "",
      };
      
      const text = this.exam1Service.getCommonPrefix(body);
  
      return {
        isSuccess: true,
        message: '',
        data: text,
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
