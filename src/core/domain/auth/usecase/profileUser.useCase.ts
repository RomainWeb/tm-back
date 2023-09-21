import { Inject } from '@nestjs/common';
import { ProfilePort } from '@domain/auth/ports/profile.port';
import { ProfileResponseDto } from '@presentation/dtos/auth/profileResponse.dto';

export class ProfileUserUseCase {
  constructor(@Inject() private profilePort: ProfilePort) {}

  execute(userId: number): Promise<ProfileResponseDto> {
    return this.profilePort.profile(userId);
  }
}
