import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
<<<<<<< HEAD
  await app.listen(4000);
=======
  app.enableCors({
    origin: ['http://localhost:4200'],
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH'],
  });
  await app.listen(3001);
>>>>>>> dev
}
bootstrap();
