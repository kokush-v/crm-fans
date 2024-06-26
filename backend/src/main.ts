import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sequelize from './db/sequelize';
import { CORS } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(CORS);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
  sequelize.start();
}

bootstrap();
