import { Module } from '@nestjs/common';
import { LoggerModule } from '@infrastructure/services/logger/logger.module';
import { ExceptionsModule } from '@infrastructure/services/exceptions/exceptions.module';
import { EnvironmentConfigModule } from '@infrastructure/config/environment-config/environment-config.module';
import { BcryptModule } from '@infrastructure/services/bcrypt/bcrypt.module';
import { AuthModule } from '@application/ioc/auth/auth.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,
    BcryptModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
