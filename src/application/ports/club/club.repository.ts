import { ClubEntity } from '@domain/entities/club.entity';

export abstract class ClubRepository {
  abstract findOneClubById(clubId: number): Promise<ClubEntity>;
}
