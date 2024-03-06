import { Inject } from '@nestjs/common';
import { RegisterPort } from '@domain/auth/ports/register.port';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';
import { RegisterResponseDto } from '@infrastructure/data/auth/dtos/registerResponse.dto';

export class RegisterUserUseCase {
  constructor(@Inject() private registerPort: RegisterPort) {}

  execute(data: RegisterRequestDto): Promise<RegisterResponseDto> {
    return this.registerPort.register(data);
  }
}
