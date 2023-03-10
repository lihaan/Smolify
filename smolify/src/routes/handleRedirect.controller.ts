import { Body, Controller, Get, Post } from '@nestjs/common';
// import { RedirectService } from '../services/redirect.service';
import { ConvertService } from 'src/services/convert.service';
import { Level } from 'level';

class BodyRedirect {
  hash: string;
}

@Controller('handleredirect')
export class HandleRedirectController {
  constructor(private readonly cs: ConvertService) {}

  @Post()
  handleRedirect(@Body() body: BodyRedirect): Promise<string> {
    console.log(JSON.stringify(body));
    return this.cs.redirect(body.hash);
  }
}
