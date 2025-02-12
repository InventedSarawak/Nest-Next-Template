import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiOperation } from '@nestjs/swagger'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiOperation({ summary: 'Returns hello world' })
    @Get()
    getHello(): { message: string } {
        return this.appService.getHello()
    }

}
