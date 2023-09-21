import { AppModule } from './app.module';
import { AllExceptionFilter } from '@infrastructure/common/exception.filter';
import { LoggerService } from '@infrastructure/services/logger/logger.service';
import { LoggingInterceptor } from '@infrastructure/common/logger.interceptor';
import { ResponseInterceptor } from '@infrastructure/common/response.interceptor';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3001);
}
bootstrap();
