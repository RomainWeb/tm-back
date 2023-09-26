import { RefreshPort } from '@domain/auth/ports/refresh.port';
import { PrismaService } from '@infrastructure/services/prisma/prisma.service';

export class RefreshTokenAdapter implements RefreshPort {
  constructor(private prisma: PrismaService) {}

  refreshTokens(userId: string, refreshToken: string) {
    // ! TODO: Add refresh token to prisma entity and update user with refresh token
    return 'new token';
    // const user = await this.prisma.users.findUnique({
    //   where: { id: userId },
    // });
    // if (!user || !user.refreshToken)
    //   throw new ForbiddenException('Access Denied');
    // const refreshTokenMatches = await argon2.verify(
    //   user.refreshToken,
    //   refreshToken,
    // );
    // if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');
    // const tokens = await this.getTokens(user.id, user.username);
    // await this.updateRefreshToken(user.id, tokens.refreshToken);
    // return tokens;
  }
}
