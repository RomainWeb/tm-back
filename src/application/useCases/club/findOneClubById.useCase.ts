import { ClubRepository } from '@application/ports/club/club.repository';
import { Inject } from '@nestjs/common';
import { ClubEntity } from '@domain/entities/club.entity';

export class FindOneClubByIdUseCase {
  constructor(@Inject(ClubRepository) private clubRepository: ClubRepository) {}

  execute(clubId: number): Promise<ClubEntity> {
    return this.clubRepository.findOneClubById(clubId);
  }
}
