import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';
import { RegisterUserUseCase } from '@domain/auth/usecase/registerUser.useCase';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/loginRequest.dto';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/loginResponse.dto';
import { LoginUserUseCase } from '@domain/auth/usecase/loginUser.useCase';
import { JwtAuthGuard } from '@application/guard/jwtAuth.guard';
import { ProfileUserUseCase } from '@domain/auth/usecase/profileUser.useCase';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';
import { ProfileRequestDto } from '@infrastructure/data/auth/dtos/profileRequest.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private loginUserUseCase: LoginUserUseCase,
    private profileUserUseCase: ProfileUserUseCase,
  ) {}

  @Post('register')
  async register(@Body() data: RegisterRequestDto) {
    return await this.registerUserUseCase.execute(data);
  }

  @Post('login')
  async login(@Body() data: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.loginUserUseCase.execute(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(
    @Request() req: { user: ProfileRequestDto },
  ): Promise<ProfileResponseDto> {
    return await this.profileUserUseCase.execute(req.user.email);
  }
}
