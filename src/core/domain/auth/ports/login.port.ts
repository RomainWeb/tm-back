import { LoginRequestDto } from '@infrastructure/data/auth/dtos/loginRequest.dto';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/loginResponse.dto';

export abstract class LoginPort {
  abstract login(data: LoginRequestDto): Promise<LoginResponseDto>;
}
