export abstract class RefreshPort {
  abstract refreshTokens(userId: string, refreshToken: string): string;
}
