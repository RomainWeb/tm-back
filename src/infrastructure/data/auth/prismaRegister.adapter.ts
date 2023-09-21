import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@infrastructure/services/prisma/prisma.service';
import { RegisterRequestDto } from '@presentation/dtos/auth/registerRequest.dto';
import { RegisterPort } from '@domain/auth/ports/register.port';
import { RegisterResponseDto } from '@presentation/dtos/auth/registerResponse.dto';

@Injectable()
export class PrismaRegisterAdapter implements RegisterPort {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterRequestDto): Promise<RegisterResponseDto> {
    const checkUserExists = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (checkUserExists) {
      throw new HttpException('User already registered', HttpStatus.FOUND);
    }
    data.password = await hash(data.password, 12);
    const createUser = await this.prisma.users.create({
      data: data,
    });
    if (createUser) {
      return {
        statusCode: 200,
        message: 'Register Successfully',
      };
    }
  }
}
