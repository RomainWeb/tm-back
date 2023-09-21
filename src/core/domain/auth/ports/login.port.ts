import { LoginRequestDto } from '@presentation/dtos/auth/loginRequest.dto';
import { LoginResponseDto } from '@presentation/dtos/auth/loginResponse.dto';

export abstract class LoginPort {
  abstract login(data: LoginRequestDto): Promise<LoginResponseDto>;
}
