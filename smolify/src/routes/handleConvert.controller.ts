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
    console.log(JSON.stringify(body.link));
    return this.cs.convert(body.link);
  }
}
