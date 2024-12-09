import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BDTO } from '@reproduce-inferred-type-error/test-lib';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Body() body: BDTO) {
    return this.appService.getData();
  }
}
