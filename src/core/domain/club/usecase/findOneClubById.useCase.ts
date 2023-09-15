import { ClubRepositoryPort } from '@application/ports/club/clubRepository.port';
import { Inject } from '@nestjs/common';
import { ClubEntity } from '@domain/club/entities/club.entity';

export class FindOneClubByIdUseCase {
  constructor(
    @Inject(ClubRepositoryPort) private clubRepository: ClubRepositoryPort,
  ) {}

  execute(clubId: number): Promise<ClubEntity> {
    return this.clubRepository.findOneClubById(clubId);
  }
}
