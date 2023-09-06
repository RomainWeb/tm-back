import { Inject } from '@nestjs/common';
import ClubEntity from '@club/domain/entities/club.entity';
import { ClubRepository } from '@club/domain/repositories/club.repository';

export class GetClubDetailsUseCase {
  constructor(@Inject(ClubRepository) private clubRepository: ClubRepository) {}

  execute(clubId: number): Promise<ClubEntity> {
    return this.clubRepository.findOne(clubId);
  }
}
