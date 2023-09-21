import { ProfileResponseDto } from '@presentation/dtos/auth/profileResponse.dto';

export abstract class ProfilePort {
  abstract profile(userId: number): Promise<ProfileResponseDto>;
}
