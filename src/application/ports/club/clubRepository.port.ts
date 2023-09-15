import { ClubEntity } from '@domain/club/entities/club.entity';

export abstract class ClubRepositoryPort {
  abstract findOneClubById(clubId: number): Promise<ClubEntity>;
}
