import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infrastructure/services/prisma/prisma.service';
import { ProfilePort } from '@domain/auth/ports/profile.port';
import { ProfileResponseDto } from '@presentation/dtos/auth/profileResponse.dto';

@Injectable()
export class PrismaProfileAdapter implements ProfilePort {
  constructor(private prisma: PrismaService) {}

  async profile(email: string): Promise<ProfileResponseDto> {
    return this.prisma.users.findFirst({
      where: {
        email: email,
      },
      select: {
        name: true,
        email: true,
        display_name: true,
        id: true,
      },
    });
  }
}
