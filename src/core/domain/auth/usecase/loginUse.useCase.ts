import { LoginPort } from '@domain/auth/ports/login.port';
import { LoginRequestDto } from '@presentation/dtos/auth/loginRequest.dto';
import { LoginResponseDto } from '@presentation/dtos/auth/loginResponse.dto';
import { Inject } from '@nestjs/common';

export class LoginUseUseCase {
  constructor(@Inject() private loginPort: LoginPort) {}

  execute(data: LoginRequestDto): Promise<LoginResponseDto> {
    return this.loginPort.login(data);
  }
}
