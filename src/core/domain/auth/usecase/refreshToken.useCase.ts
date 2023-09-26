import { Inject } from '@nestjs/common';
import { RefreshPort } from '@domain/auth/ports/refresh.port';

export class RefreshTokenUseCase {
  constructor(@Inject() private refreshPort: RefreshPort) {}

  execute(userId: string, refreshToken: string): string {
    return this.refreshPort.refreshTokens(userId, refreshToken);
  }
}
