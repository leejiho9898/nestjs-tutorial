import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //app.mudule불러옴
  await app.listen(3000); //포트는 3000번포트
}
bootstrap();
