import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@infrastructure/services/prisma/prisma.service';
import { LoginPort } from '@domain/auth/ports/login.port';
import { LoginRequestDto } from '@presentation/dtos/auth/loginRequest.dto';
import { compare } from 'bcrypt';
import { EnvironmentConfigService } from '@infrastructure/config/environment-config/environment-config.service';

@Injectable()
export class PrismaLoginAdapter implements LoginPort {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private environmentConfigService: EnvironmentConfigService,
  ) {}

  async login(data: LoginRequestDto) {
    const checkUserExists = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!checkUserExists) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(
      data.password,
      checkUserExists.password,
    );

    if (checkPassword) {
      const accessToken = this.generateJWT({
        sub: checkUserExists.id,
        name: checkUserExists.name,
        email: checkUserExists.email,
      });

      return {
        statusCode: 200,
        message: 'Login success',
        accessToken: accessToken,
      };
    } else {
      throw new HttpException(
        'User or password not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: this.environmentConfigService.JwtSecret,
      expiresIn: this.environmentConfigService.JwtExpirationTime,
    });
  }
}