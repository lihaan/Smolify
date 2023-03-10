import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ConvertService } from '../services/convert.service';

class BodyConvert {
  link: string;
}

@Controller('handleconvert')
export class HandleConvertController {
  constructor(private readonly cs: ConvertService) {}

  @Post()
  handleConvert(@Body() body: BodyConvert): string {
    return this.cs.convert(body.link);
  }
}
