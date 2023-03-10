import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://35.206.254.212',
  });
  await app.listen(8000); // 3000 is used by react
}
bootstrap();
