import { Module } from '@nestjs/common';
import { LoggerModule } from '@infrastructure/logger/logger.module';
import { ExceptionsModule } from '@infrastructure/exceptions/exceptions.module';
import { ClubModule } from '@infrastructure/ioc/club/club.module';

@Module({
  imports: [LoggerModule, ExceptionsModule, ClubModule],
  controllers: [],
})
export class AppModule {}
