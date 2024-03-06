import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';

export abstract class ProfilePort {
  abstract profile(email: string): Promise<ProfileResponseDto>;
}
