import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandleRedirectController } from './routes/handleRedirect.controller';
import { HandleConvertController } from './routes/handleConvert.controller';
import { ConvertService } from './services/convert.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    HandleConvertController,
    HandleRedirectController,
  ],
  providers: [AppService, ConvertService],
})
export class AppModule {}
