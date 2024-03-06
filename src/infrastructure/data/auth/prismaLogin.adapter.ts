import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@infrastructure/services/prisma/prisma.service';
import { LoginPort } from '@domain/auth/ports/login.port';
import { compare } from 'bcrypt';
import { EnvironmentConfigService } from '@infrastructure/config/environment-config/environment-config.service';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/loginResponse.dto';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/loginRequest.dto';

@Injectable()
export class PrismaLoginAdapter implements LoginPort {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private environmentConfigService: EnvironmentConfigService,
  ) {}

  async login(params: LoginRequestDto): Promise<LoginResponseDto> {
    const checkUserExists = await this.prisma.users.findFirst({
      where: {
        email: params.email,
      },
    });

    if (!checkUserExists) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(
      params.password,
      checkUserExists.password,
    );

    if (checkPassword) {
      const accessToken = this.generateJWT(
        {
          sub: checkUserExists.id,
          email: checkUserExists.email,
        },
        this.environmentConfigService.JwtSecret,
        this.environmentConfigService.JwtExpirationTime,
      );

      const refreshToken = this.generateJWT(
        {
          sub: checkUserExists.id,
          email: checkUserExists.email,
        },
        this.environmentConfigService.JwtSecretRefresh,
        this.environmentConfigService.JwtRefreshExpirationTime,
      );

      return {
        statusCode: 200,
        message: 'Login successfully',
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    } else {
      throw new HttpException(
        'User or password not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  generateJWT(payload: any, secret: string, expiresIn: number) {
    return this.jwtService.sign(payload, {
      secret: secret,
      expiresIn: expiresIn,
    });
  }
}
