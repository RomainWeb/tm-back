import { ProfileResponseDto } from '@presentation/dtos/auth/profileResponse.dto';

export abstract class ProfilePort {
  abstract profile(email: string): Promise<ProfileResponseDto>;
}
