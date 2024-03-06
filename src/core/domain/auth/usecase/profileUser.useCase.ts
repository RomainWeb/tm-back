import { Inject } from '@nestjs/common';
import { ProfilePort } from '@domain/auth/ports/profile.port';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';

export class ProfileUserUseCase {
  constructor(@Inject() private profilePort: ProfilePort) {}

  execute(email: string): Promise<ProfileResponseDto> {
    return this.profilePort.profile(email);
  }
}
