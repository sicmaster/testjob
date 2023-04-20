import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { IExam3, IResp, IRespObj } from './exam3.model';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Exam3Service } from './exam3.service';

@ApiTags('Exam3')
@Controller('exam3')
export class Exam3Controller {

    constructor(private readonly exam3Service: Exam3Service) {}

    @Get()
    @HttpCode(200)
    getAll(): IResp {
        try {
            const data = this.exam3Service.getAll();

            return {
                isSuccess: true,
                message: '',
                data: data,
            };
        } catch (error) {
            return {
              isSuccess: false,
              message: 'พบข้อผิดผลาด กรุณาลองใหม่',
              data: [],
            };
        }
    }

    @Get(':id')
    @HttpCode(200)
    getById(@Param('id') id: number): IRespObj {
        try {
            const data = this.exam3Service.getById(id);

            return {
                isSuccess: true,
                message: '',
                data: data,
            };
        } catch (error) {
            return {
              isSuccess: false,
              message: 'พบข้อผิดผลาด กรุณาลองใหม่',
              data: {},
            };
        }
    }

    @Post()
    @HttpCode(201)
    @ApiBody({
        schema: {
          type: 'object',
          properties: {
            title: { type: 'string', example: 'title' },
            description: { type: 'string', example: 'Desc' }
          },
        },
    })
    create(@Body() iExam3: IExam3): IRespObj {
        try {
            const data = this.exam3Service.create(iExam3);

            return {
                isSuccess: true,
                message: '',
                data: data,
            };
        } catch (error) {
            return {
              isSuccess: false,
              message: 'พบข้อผิดผลาด กรุณาลองใหม่',
              data: {},
            };
        }
    }

    @Put(':id')
    @ApiBody({
        schema: {
          type: 'object',
          properties: {
            title: { type: 'string', example: 'title' },
            description: { type: 'string', example: 'Desc' }
          },
        },
    })
    update(@Param('id') id: number, @Body() iExam3: IExam3): IRespObj {
        try {
            const data = this.exam3Service.update(id, iExam3);

            return {
                isSuccess: true,
                message: '',
                data: data,
            };
        } catch (error) {
            return {
              isSuccess: false,
              message: 'พบข้อผิดผลาด กรุณาลองใหม่',
              data: {},
            };
        }
    }

    @Delete(':id')
    delete(@Param('id') id: number): IRespObj {
        try {
            const data = this.exam3Service.delete(id);
            
            return {
                isSuccess: data,
                message: '',
                data: {},
            };
        } catch (error) {
            return {
              isSuccess: false,
              message: 'พบข้อผิดผลาด กรุณาลองใหม่',
              data: {},
            };
        }
        this.exam3Service.delete(id);
    }
}
