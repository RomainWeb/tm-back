import ClubEntity from '@club/domain/entities/club.entity';

export abstract class ClubRepository {
  abstract findAll(): Promise<ClubEntity[]>;
  abstract findOne(clubId: number): Promise<ClubEntity>;
}
