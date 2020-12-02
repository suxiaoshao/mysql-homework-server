import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:8083'],
    methods: ['get', 'post', 'GET', 'POST'],
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    exposedHeaders:
      'Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type',
    credentials: true,
    optionsSuccessStatus: 204,
  });
  await app.listen(3000);
}

bootstrap().then();
