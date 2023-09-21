import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@infrastructure/services/prisma/prisma.module';
import { EnvironmentConfigModule } from '@infrastructure/config/environment-config/environment-config.module';
import * as process from 'process';
import { JwtStrategy } from '@infrastructure/config/auth/jwt.strategy';
import { AuthController } from '@presentation/controllers/auth/auth.controller';
import { RegisterPort } from '@domain/auth/ports/register.port';
import { PrismaRegisterAdapter } from '@infrastructure/data/auth/prismaRegister.adapter';
import { RegisterUserUseCase } from '@domain/auth/usecase/registerUser.useCase';
import { LoginPort } from '@domain/auth/ports/login.port';
import { LoginUseUseCase } from '@domain/auth/usecase/loginUse.useCase';
import { PrismaLoginAdapter } from '@infrastructure/data/auth/prismaLogin.adapter';

const registerUserUseCase = (registerPort: RegisterPort) =>
  new RegisterUserUseCase(registerPort);

const loginUserUseCase = (loginPort: LoginPort) =>
  new LoginUseUseCase(loginPort);

@Module({
  imports: [
    PrismaModule,
    EnvironmentConfigModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    { provide: RegisterPort, useClass: PrismaRegisterAdapter },
    { provide: LoginPort, useClass: PrismaLoginAdapter },
    {
      provide: RegisterUserUseCase,
      useFactory: registerUserUseCase,
      inject: [RegisterPort],
    },
    {
      provide: LoginUseUseCase,
      useFactory: loginUserUseCase,
      inject: [LoginPort],
    },
    JwtStrategy,
  ],
})
export class AuthModule {}
