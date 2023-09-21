import { RegisterRequestDto } from '@presentation/dtos/auth/registerRequest.dto';
import { RegisterResponseDto } from '@presentation/dtos/auth/registerResponse.dto';

export abstract class RegisterPort {
  abstract register(data: RegisterRequestDto): Promise<RegisterResponseDto>;
}
