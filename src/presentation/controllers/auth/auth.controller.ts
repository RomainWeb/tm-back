import { Body, Controller, Post } from '@nestjs/common';
import { RegisterRequestDto } from '@presentation/dtos/auth/registerRequest.dto';
import { RegisterUserUseCase } from '@domain/auth/usecase/registerUser.useCase';
import { LoginRequestDto } from '@presentation/dtos/auth/loginRequest.dto';
import { LoginResponseDto } from '@presentation/dtos/auth/loginResponse.dto';
import { LoginUseUseCase } from '@domain/auth/usecase/loginUse.useCase';

@Controller('auth')
export class AuthController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private loginUserUseCase: LoginUseUseCase,
  ) {}

  @Post('register')
  async register(@Body() data: RegisterRequestDto) {
    return await this.registerUserUseCase.execute(data);
  }

  @Post('login')
  async login(@Body() data: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.loginUserUseCase.execute(data);
  }
}
