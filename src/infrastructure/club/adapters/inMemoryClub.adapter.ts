import { ClubRepositoryPort } from '@application/ports/club/clubRepository.port';
import { ClubEntity } from '@domain/club/entities/club.entity';
import { ClubList } from '../../../test/mock/clubList';

export class InMemoryClubAdapter implements ClubRepositoryPort {
  constructor() {}

  findOneClubById(clubId: number): Promise<ClubEntity> {
    const club = ClubList.find((club: ClubEntity) => club._id === clubId);
    return Promise.resolve(club);
  }
}
