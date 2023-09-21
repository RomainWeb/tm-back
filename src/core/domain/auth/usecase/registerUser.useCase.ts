import { Inject } from '@nestjs/common';
import { RegisterPort } from '@domain/auth/ports/register.port';
import { RegisterRequestDto } from '@presentation/dtos/auth/registerRequest.dto';
import { RegisterResponseDto } from '@presentation/dtos/auth/registerResponse.dto';

export class RegisterUserUseCase {
  constructor(@Inject() private registerPort: RegisterPort) {}

  execute(data: RegisterRequestDto): Promise<RegisterResponseDto> {
    return this.registerPort.register(data);
  }
}
