import { Module } from '@nestjs/common';
import { LoggerModule } from '@infrastructure/logger/logger.module';
import { ExceptionsModule } from '@infrastructure/exceptions/exceptions.module';
import { ClubModule } from '@infrastructure/ioc/club/club.module';
import { EnvironmentConfigModule } from '@infrastructure/config/environment-config/environment-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,
    ClubModule,
    TypeOrmModule,
  ],
  controllers: [],
})
export class AppModule {}
