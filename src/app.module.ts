import { Module } from '@nestjs/common';
import { LoggerModule } from '@infrastructure/logger/logger.module';
import { ExceptionsModule } from '@infrastructure/exceptions/exceptions.module';
import { EnvironmentConfigModule } from '@infrastructure/config/environment-config/environment-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeSlotModule } from '@application/ioc/time-slot/timeSlot.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,
    TimeSlotModule,
    TypeOrmModule,
  ],
  controllers: [],
})
export class AppModule {}
