import { BadRequestException, Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.hbs')
  getHello() {
    // Just a comment
  }

  @Get('exception')
  mainError() {
    throw new BadRequestException();
  }
}
