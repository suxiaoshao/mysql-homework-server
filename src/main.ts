import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './app-exception.filter';
import { AdminGuard } from './common/guard/admin.guard';
import { LoginPipe } from './common/pipe/login.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:8083'],
    methods: ['get', 'post', 'GET', 'POST'],
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization,token',
    exposedHeaders:
      'Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type',
    credentials: true,
    optionsSuccessStatus: 204,
  });
  app.useGlobalFilters(new AppExceptionFilter());
  app.useGlobalGuards(new AdminGuard(new Reflector()));
  app.useGlobalPipes(new LoginPipe());
  await app.listen(3000);
}

bootstrap().then();
