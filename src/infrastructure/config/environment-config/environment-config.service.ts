import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService {
  constructor(private nestConfig: NestConfigService) {}

  get DbHost(): string {
    return this.nestConfig.get<string>('DATABASE_HOST');
  }

  get DbPort(): number {
    return +this.nestConfig.get<number>('DATABASE_PORT');
  }

  get DbUsername(): string {
    return this.nestConfig.get<string>('DATABASE_USER');
  }

  get DbPassword(): string {
    return this.nestConfig.get<string>('DATABASE_PASSWORD');
  }

  get DbName(): string {
    return this.nestConfig.get<string>('DATABASE_NAME');
  }

  get DbSchema(): string {
    return this.nestConfig.get<string>('DATABASE_SCHEMA');
  }

  get DbSynchronize(): boolean {
    return Boolean(this.nestConfig.get<boolean>('DATABASE_SYNCHRONIZE'));
  }

  get JwtSecret(): string {
    return this.nestConfig.get<string>('JWT_SECRET');
  }

  get JwtSecretRefresh(): string {
    return this.nestConfig.get<string>('JWT_REFRESH_TOKEN_SECRET');
  }

  get JwtExpirationTime(): number {
    return +this.nestConfig.get<number>('JWT_EXPIRATION_TIME');
  }

  get JwtRefreshExpirationTime(): string {
    return this.nestConfig.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME');
  }
}
