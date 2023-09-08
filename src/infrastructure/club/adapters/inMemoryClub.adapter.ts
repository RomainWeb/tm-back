import { ClubRepository } from '@application/ports/club/club.repository';
import { ClubEntity } from '@domain/entities/club.entity';
import { ClubList } from '@infrastructure/club/mock/clubList';

export class InMemoryClubAdapter implements ClubRepository {
  constructor() {}

  findOneClubById(clubId: number): Promise<ClubEntity> {
    const club = ClubList.find((club: ClubEntity) => club._id === clubId);
    return Promise.resolve(club);
  }
}
