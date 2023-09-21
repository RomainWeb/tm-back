import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@infrastructure/services/prisma/prisma.module';
import { EnvironmentConfigModule } from '@infrastructure/config/environment-config/environment-config.module';
import * as process from 'process';
import { JwtStrategy } from '@infrastructure/config/auth/jwt.strategy';
import { AuthController } from '@presentation/controllers/auth/auth.controller';
import { RegisterPort } from '@domain/auth/ports/register.port';
import { RegisterUserUseCase } from '@domain/auth/usecase/registerUser.useCase';
import { LoginPort } from '@domain/auth/ports/login.port';
import { LoginUserUseCase } from '@domain/auth/usecase/loginUser.useCase';
import { ProfilePort } from '@domain/auth/ports/profile.port';
import { ProfileUserUseCase } from '@domain/auth/usecase/profileUser.useCase';
import { PrismaProfileAdapter } from '@infrastructure/data/auth/prismaProfile.adapter';
import { PrismaRegisterAdapter } from '@infrastructure/data/auth/prismaRegister.adapter';
import { PrismaLoginAdapter } from '@infrastructure/data/auth/prismaLogin.adapter';

const registerUserUseCase = (registerPort: RegisterPort) =>
  new RegisterUserUseCase(registerPort);

const loginUserUseCase = (loginPort: LoginPort) =>
  new LoginUserUseCase(loginPort);

const profileUserUseCase = (profilePort: ProfilePort) =>
  new ProfileUserUseCase(profilePort);

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
    { provide: ProfilePort, useClass: PrismaProfileAdapter },
    {
      provide: RegisterUserUseCase,
      useFactory: registerUserUseCase,
      inject: [RegisterPort],
    },
    {
      provide: LoginUserUseCase,
      useFactory: loginUserUseCase,
      inject: [LoginPort],
    },
    {
      provide: ProfileUserUseCase,
      useFactory: profileUserUseCase,
      inject: [ProfilePort],
    },
    JwtStrategy,
  ],
})
export class AuthModule {}
