import { Injectable } from '@nestjs/common';
import { ClubRepository } from '@club/domain/repositories/club.repository';
import ClubEntity from '@club/domain/entities/club.entity';
import { clubsMock } from '@club/tests/mocks/clubs.mock';

@Injectable()
export default class ClubRepositoryInMemory implements ClubRepository {
  findAll(): Promise<ClubEntity[]> {
    const clubs = [...clubsMock];
    return Promise.resolve(clubs);
  }

  findOne(clubId: number): Promise<ClubEntity> {
    const club = clubsMock.find((club) => club.id === clubId);
    return Promise.resolve(club);
  }
}
