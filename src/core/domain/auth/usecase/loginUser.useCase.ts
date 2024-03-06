import { LoginPort } from '@domain/auth/ports/login.port';
import { Inject } from '@nestjs/common';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/loginRequest.dto';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/loginResponse.dto';

export class LoginUserUseCase {
  constructor(@Inject() private loginPort: LoginPort) {}

  execute(params: LoginRequestDto): Promise<LoginResponseDto> {
    return this.loginPort.login(params);
  }
}
